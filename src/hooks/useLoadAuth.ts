import axios from "axios";
import { API_URL, GIT_CLIENT_ID, GIT_CLIENT_SECRET } from "../configs/app";
import useAuthState, { AuthStates } from "../stores/useAuthState";
import { useEffect } from "react";

interface IResponse {
  data: { accessToken?: string; refreshToken?: string };
}

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
          grantType: "refresh_token",
          clientId: GIT_CLIENT_ID,
          clientSecret: GIT_CLIENT_SECRET,
          refreshToken: refreshToken,
        });
        if (data.accessToken && data.refreshToken) {
          setAuthSuccess({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
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
