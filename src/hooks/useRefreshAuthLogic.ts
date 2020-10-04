import axios from "axios";
import { API_URL } from "../configs/app";
import { useAuthError } from "../components/authState/AuthState";
import createAuthRefreshInterceptor from "axios-auth-refresh";

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
      .post(`${API_URL}`)
      .then((tokenRefreshResponse) => {
        localStorage.setItem(
          "accessToken",
          tokenRefreshResponse.data.access_token
        );
        failedRequest.response.config.headers["Authorization"] =
          "Bearer " + tokenRefreshResponse.data.token;
        return Promise.resolve();
      })
      .catch((error) => {
        authError("Error: please login again");
      });
  };

  createAuthRefreshInterceptor(axios, refreshAuthLogic);
};

export default useRefreshAuthLogic;
