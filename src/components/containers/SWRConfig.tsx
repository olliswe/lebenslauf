import React from "react";
import { SWRConfig as OrigSWRConfig } from "swr";
import axios from "axios";
import { API_URL } from "../../configs/app";

const SWRConfig = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const apiUrl = API_URL;

  return (
    <OrigSWRConfig
      value={{
        fetcher: (url) =>
          axios
            .get(apiUrl + url, {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => res.data),
      }}
    >
      {children}
    </OrigSWRConfig>
  );
};

export default SWRConfig;
