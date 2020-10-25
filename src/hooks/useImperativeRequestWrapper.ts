import useImperativeRequest from "./useImperativeRequest";
import { API_URL } from "../configs/app";

const useImperativeRequestWrapper = () => {
  const token = localStorage.getItem("accessToken");
  return useImperativeRequest({ url: API_URL, token });
};

export default useImperativeRequestWrapper;
