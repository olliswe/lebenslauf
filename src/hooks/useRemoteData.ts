import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export interface IUseRemoteData extends AxiosRequestConfig {
  path: string;
  method?: "get" | "post";
  body?: { [key: string]: string };
  schema?: any | null;
  reducer?: any | null;
}

interface IUseRemoteDataExt extends IUseRemoteData {
  tokenAndApiUrl: { apiUrl: string; token: string };
}

const useRemoteData = <Schema_T, Reducer_T>({
  tokenAndApiUrl,
  path = "/",
  method = "get",
  body,
  responseType = "json",
  schema = null,
  reducer = null,
}: IUseRemoteDataExt) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const { apiUrl, token } = tokenAndApiUrl;
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        await axios({
          url: `${apiUrl}${path}`,
          method,
          data: body,
          responseType,
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            setLoading(false);
            if (!schema) {
              return response.data;
            }
            try {
              return schema.validate(response.data);
            } catch (err) {
              setError(err);
            }
          })
          .then((validated) => {
            if (!reducer) {
              return validated;
            }
            try {
              return reducer(validated);
            } catch (err) {
              setError(err);
            }
          })
          .then((finalData) => {
            setData(finalData);
          });

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (token) {
      getData();
    }
  }, [token, body, method, path, reducer, schema, responseType, apiUrl]);

  return { error, loading, data };
};

export default useRemoteData;
