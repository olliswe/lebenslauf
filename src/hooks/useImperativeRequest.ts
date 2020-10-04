import { useCallback, useState } from "react";
import axios from "axios";
import useRefreshAuthLogic from "./useRefreshAuthLogic";

export interface IUseImperativeRequest {
  path: string;
  method?: "get" | "post";
  headers?: any;
  body?: { [key: string]: string };
}

interface IUseImperativeRequestUrlToken {
  url: string;
  token: string;
}

const useImperativeRequest = ({
  url,
  token,
}: IUseImperativeRequestUrlToken): any => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const makeRequest = useCallback(
    async ({
      path = "/",
      method = "get",
      body,
      headers = {},
    }: IUseImperativeRequest) => {
      try {
        setLoading(true);
        const data = await axios({
          url: `${url}${path}`,
          method,
          data: body,
          headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => res.data);
        setError("");
        setData(data);
        setLoading(false);
        return { data: data, error: "" };
      } catch (err) {
        setError(err);
        console.log(err);
        setLoading(false);
        return { data: null, error: err };
      }
    },
    [token, url]
  );

  return [{ error, loading, data }, makeRequest];
};

export default useImperativeRequest;
