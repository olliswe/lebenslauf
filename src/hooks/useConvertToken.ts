import { useCallback } from "react";
import axios from "axios";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../configs/app";
import { useAuthError, useAuthState } from "../components/authState/AuthState";

const useConvertToken = () => {
  const setAuthSuccess = useAuthState((state) => state.setAuthSuccess);
  const authError = useAuthError();

  const convertGithubAccessToken = useCallback(
    async (token) => {
      try {
        const result = await axios.post(
          `${API_URL}/auth/convert-token?grant_type=convert_token&client_id=${GIT_CLIENT_ID}&client_secret=${GIT_CLIENT_SECRET}&backend=github&token=${token}`
        );
        const { access_token, refresh_token } = result.data;
        console.log(result.data);
        setAuthSuccess({
          accessToken: access_token,
          refreshToken: refresh_token,
        });
      } catch (e) {
        authError();
      }
    },
    [setAuthSuccess, authError]
  );

  return convertGithubAccessToken;
};

export default useConvertToken;
