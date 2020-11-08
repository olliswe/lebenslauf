import useQuery from "../queries/useQuery";
import { useEffect } from "react";
import useMeStore from "../stores/useMeStore";
import { IUser } from "../models/user";

const useMe = () => {
  const { data } = useQuery<IUser>("me", "/accounts/me");
  const setUser = useMeStore((state) => state.setUser);

  useEffect(() => {
    setUser(data);
    return () => setUser(undefined);
  }, [data, setUser]);
};

export default useMe;
