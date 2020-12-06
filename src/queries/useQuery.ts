import { useQuery as useRqQuery, QueryConfig } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";
import useAuthState from "../stores/useAuthState";

const useQuery = <TResult = unknown, TError = unknown>(
  key: string,
  path: string,
  props?: Omit<IBaseRequest, "token" | "path" | "method"> & {
    config?: QueryConfig<any>;
  }
) => {
  const config = props?.config || {};
  const token = useAuthState((state) => state.token);
  return useRqQuery<TResult, TError>({
    queryKey: key,
    queryFn: () => baseRequest({ path, token, method: "get", ...props }),
    config: { retry: false, ...config },
  });
};

export default useQuery;
