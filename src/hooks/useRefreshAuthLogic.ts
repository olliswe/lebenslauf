import axios from "axios";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../configs/app";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { useAuthError } from "../components/containers/AuthState";

// Function that will be called to refresh authorization
const useRefreshAuthLogic = () => {
  const authError = useAuthError();

  const refreshAuthLogic = (failedRequest) => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      authError("Error: please login again");
      return;
    }
    return axios
      .post(`${API_URL}/auth/token`, {
        grant_type: "refresh_token",
        client_id: GIT_CLIENT_ID,
        client_secret: GIT_CLIENT_SECRET,
        refresh_token: refreshToken,
      })
      .then((tokenRefreshResponse) => {
        localStorage.setItem(
          "accessToken",
          tokenRefreshResponse.data.access_token
        );
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
      });
  };

  createAuthRefreshInterceptor(axios, refreshAuthLogic);
};

export default useRefreshAuthLogic;
