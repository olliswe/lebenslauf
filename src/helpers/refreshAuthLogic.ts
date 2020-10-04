import axios from "axios";
import { API_URL } from "../configs/app";

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) {
    console.log("Error: no refresh token!");
    return;
  }
  return axios.post(`${API_URL}`).then((tokenRefreshResponse) => {
    localStorage.setItem("accessToken", tokenRefreshResponse.data.token);
    failedRequest.response.config.headers["Authorization"] =
      "Bearer " + tokenRefreshResponse.data.token;
    return Promise.resolve();
  });
};

export default refreshAuthLogic;
