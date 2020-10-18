import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { API_URL } from "../../configs/app";
import get from "lodash/get";
import useConvertToken from "../../hooks/useConvertToken";
import useRefreshAuthLogic from "../../hooks/useRefreshAuthLogic";
import useAuthState, { AuthStates } from "../../hooks/useAuthState";
import useToastMessages from "../../hooks/useToastMessages";

const defaultError = "Unable to login";

export const useAuthError = () => {
  const setAuthFailure = useAuthState((state) => state.setAuthFailure);
  const { error: errorMsg } = useToastMessages();

  const authError = useCallback(
    (error = defaultError) => {
      setAuthFailure(error);
      errorMsg(error, true);
    },
    [setAuthFailure, errorMsg]
  );

  return authError;
};

const AuthState = () => {
  const { search } = useLocation();
  const params = queryString.parse(search);
  const code = params?.code;
  const state = params?.state;
  const authState = useAuthState((state) => state.authState);
  const setAuthState = useAuthState((state) => state.setAuthState);
  const setAuthSuccess = useAuthState((state) => state.setAuthSuccess);
  const convertGithubAccessToken = useConvertToken();
  const authError = useAuthError();
  useRefreshAuthLogic();
  useAuthError();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken && accessToken) {
      setAuthSuccess({ accessToken, refreshToken });
    }
  }, [setAuthSuccess]);

  const getGithubAccessToken = useCallback(
    async (code, state) => {
      try {
        const { data } = await axios.post(
          `${API_URL}/accounts/get-access-token`,
          {
            code,
            state,
          }
        );
        if (!data || data.error || !data.accessToken) {
          authError(
            "Error: " + get(data, "error_description", "Unable to login")
          );
          return { success: false };
        }
        return { success: true, accessToken: data.accessToken };
      } catch (e) {
        authError();
        return { success: false };
      }
    },
    [authError]
  );

  const login = useCallback(
    async (code, state) => {
      const { success, accessToken } = await getGithubAccessToken(code, state);
      if (!success || !accessToken) return;
      await convertGithubAccessToken(accessToken);
    },
    [getGithubAccessToken, convertGithubAccessToken]
  );

  useEffect(() => {
    if (code && state && authState === AuthStates.pending) {
      setAuthState(AuthStates.loading);
    }
  }, [code, state, login, authState, setAuthState]);

  const authReducer = useCallback(async () => {
    switch (authState) {
      case AuthStates.loading:
        await login(code, state);
        break;
      case AuthStates.authenticated:
        break;
    }
  }, [code, state, login, authState]);

  useEffect(() => {
    authReducer();
  }, [authReducer]);

  return null;
};

export default AuthState;
