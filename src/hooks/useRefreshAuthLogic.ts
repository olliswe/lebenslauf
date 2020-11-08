import axios from "axios";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../configs/app";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { useAuthError } from "../components/containers/AuthState";
import useAuthState from "../stores/useAuthState";

// Function that will be called to refresh authorization
const useRefreshAuthLogic = () => {
  const setAuthToken = useAuthState((state) => state.setAuthToken);
  const authError = useAuthError();

  const refreshAuthLogic = (failedRequest: any) => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      authError("Error: please login again");
      return Promise.reject();
    }
    return axios
      .post(`${API_URL}/auth/token`, {
        grant_type: "refresh_token",
        client_id: GIT_CLIENT_ID,
        client_secret: GIT_CLIENT_SECRET,
        refresh_token: refreshToken,
      })
      .then((tokenRefreshResponse) => {
        setAuthToken(tokenRefreshResponse.data.access_token);
        localStorage.setItem(
          "refreshToken",
          tokenRefreshResponse.data.refresh_token
        );
        failedRequest.response.config.headers["Authorization"] =
          "Bearer " + tokenRefreshResponse.data.access_token;
        return Promise.resolve();
      })
      .catch((error) => {
        authError("Error: please login again");
        return Promise.reject();
      });
  };

  createAuthRefreshInterceptor(axios, refreshAuthLogic);
};

export default useRefreshAuthLogic;
