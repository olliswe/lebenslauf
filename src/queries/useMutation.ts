import { QueryConfig, useMutation as useRqMutation } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";
import useAuthState from "../stores/useAuthState";

const useMutation = (
  path: string,
  props?: Omit<IBaseRequest, "token" | "path"> & {
    config?: QueryConfig<any>;
  }
) => {
  const config = props?.config || {};
  const token = useAuthState((state) => state.token);
  return useRqMutation(() => baseRequest({ path, token, ...props }), config);
};

export default useMutation;
