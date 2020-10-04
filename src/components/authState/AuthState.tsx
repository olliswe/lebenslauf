import { useCallback, useEffect } from "react";
import create from "zustand";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../../configs/app";
import get from "lodash/get";
import useConvertToken from "../../hooks/useConvertToken";
import useRefreshAuthLogic from "../../hooks/useRefreshAuthLogic";

export enum AuthStates {
  pending = "NOT_AUTHENTICATED",
  loading = "LOADING",
  authenticated = "AUTHENTICATED",
}

interface IAuthState {
  authState: AuthStates;
  error: string;
  setAuthState: (newState: AuthStates) => void;
  setAuthFailure: (error?: string) => void;
  setAuthSuccess: (input: {
    accessToken: string;
    refreshToken: string;
  }) => void;
}

const ACCESS_TOKEN_URL = `https://github.com/login/oauth/access_token?client_id=${GIT_CLIENT_ID}&client_secret=${GIT_CLIENT_SECRET}`;

export const [useAuthState] = create<IAuthState>((set) => ({
  authState: AuthStates.pending,
  error: "",
  setAuthState: (newState: AuthStates) =>
    set((state) => ({ authState: newState })),
  setAuthFailure: (error: string) =>
    set((state) => ({
      authState: AuthStates.pending,
      error,
      token: "",
    })),
  setAuthSuccess: ({ accessToken, refreshToken }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return set((state) => ({
      authState: AuthStates.authenticated,
      error: "",
    }));
  },
}));

const defaultError = "Unable to login";

export const useAuthError = () => {
  const history = useHistory();
  const setAuthFailure = useAuthState((state) => state.setAuthFailure);

  const authError = useCallback((error = defaultError) => {
    setAuthFailure(error);
    history.push("/login");
  }, []);

  return authError;
};

const AuthState = () => {
  const { search } = useLocation();
  const history = useHistory();
  const params = queryString.parse(search);
  const code = params?.code;
  const state = params?.state;
  const authState = useAuthState((state) => state.authState);
  const setAuthState = useAuthState((state) => state.setAuthState);
  const setAuthSuccess = useAuthState((state) => state.setAuthSuccess);
  const convertGithubAccessToken = useConvertToken();
  const authError = useAuthError();
  useRefreshAuthLogic();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken && accessToken) {
      setAuthSuccess({ accessToken, refreshToken });
    }
  }, []);

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
    [authError, history]
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
