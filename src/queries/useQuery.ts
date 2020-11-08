import { useQuery as useRqQuery } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";
import useAuthState from "../hooks/useAuthState";

const useQuery = (
  key: string,
  path: string,
  props?: Omit<IBaseRequest, "token" | "path" | "method">
) => {
  const token = useAuthState((state) => state.token);
  return useRqQuery({
    queryKey: key,
    queryFn: () => baseRequest({ path, token, method: "get", ...props }),
    config: { retry: false },
  });
};

export default useQuery;
