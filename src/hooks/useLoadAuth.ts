import axios from "axios";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../configs/app";
import useAuthState, { AuthStates } from "./useAuthState";
import { useEffect } from "react";

interface IResponse {
  data: { access_token?: string; refresh_token?: string };
}
// Function that will be called to refresh authorization
const useLoadAuth = () => {
  const setAuthSuccess = useAuthState((state) => state.setAuthSuccess);
  const setAuthState = useAuthState((state) => state.setAuthState);
  useEffect(() => {
    const loginAgain = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        setAuthState(AuthStates.notAuthenticated);
        return;
      }
      try {
        const { data }: IResponse = await axios.post(`${API_URL}/auth/token`, {
          grant_type: "refresh_token",
          client_id: GIT_CLIENT_ID,
          client_secret: GIT_CLIENT_SECRET,
          refresh_token: refreshToken,
        });
        if (data.access_token && data.refresh_token) {
          setAuthSuccess({
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
          });
        }
      } catch (e) {
        console.log(e.toString());
        setAuthState(AuthStates.notAuthenticated);
      }
    };

    loginAgain();
  }, [setAuthSuccess, setAuthState]);
};

export default useLoadAuth;
