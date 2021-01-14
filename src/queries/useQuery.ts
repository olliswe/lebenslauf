import { useQuery as useRqQuery, QueryConfig } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";
import useAuthState from "../stores/useAuthState";
import omit from "lodash/omit";

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
    queryFn: () =>
      baseRequest({ path, token, method: "get", ...omit(props, "config") }),
    config: { retry: false, ...config },
  });
};

export const useImperativeQuery = <TResult = unknown, TError = unknown>(
  key: string,
  path: string,
  props?: Omit<IBaseRequest, "token" | "path" | "method"> & {
    config?: QueryConfig<any>;
  }
) => {
  const result = useQuery<TResult, TError>(key, path, {
    ...(props || {}),
    config: { enabled: false, ...(props?.config || {}) },
  });

  const refetch = async () => {
    try {
      const data = await result.refetch({ throwOnError: true });
      return { data, error: null };
    } catch (e) {
      return { error: e, data: null };
    }
  };
  return {
    ...result,
    refetch,
  };
};

export default useQuery;
