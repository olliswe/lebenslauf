import { useMutation as useRqMutation } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";

const useMutation = (
  path: string,
  props?: Omit<IBaseRequest, "token" | "path">
) => {
  const token = localStorage.getItem("accessToken") || "";
  return useRqMutation(() => baseRequest({ path, token, ...props }));
};

export default useMutation;
