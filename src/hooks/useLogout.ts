import useAuthState from "../stores/useAuthState";

const useLogout = () => {
  const setLogout = useAuthState((state) => state.setLogout);

  const logout = () => setLogout();

  return logout;
};

export default useLogout;
