import { QueryConfig, useMutation as useRqMutation } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";
import useAuthState from "../stores/useAuthState";
import omit from "lodash/omit";

const useMutation = (
  path: string,
  props?: Omit<IBaseRequest, "token" | "path"> & {
    config?: QueryConfig<any>;
  }
) => {
  const config = props?.config || {};
  const token = useAuthState((state) => state.token);
  return useRqMutation(
    (body?: any) =>
      baseRequest({ path, token, body, ...omit(props, "config") }),
    {
      retry: false,
      throwOnError: true,
      ...config,
    }
  );
};

export default useMutation;
