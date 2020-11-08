import { useQuery as useRqQuery } from "react-query";
import baseRequest, { IBaseRequest } from "./baseRequest";

const useQuery = (
  key: string,
  path: string,
  props?: Omit<IBaseRequest, "token" | "path" | "method">
) => {
  const token = localStorage.getItem("accessToken") || "";
  return useRqQuery({
    queryKey: key,
    queryFn: () => baseRequest({ path, token, method: "get", ...props }),
    config: { retry: false },
  });
};

export default useQuery;
