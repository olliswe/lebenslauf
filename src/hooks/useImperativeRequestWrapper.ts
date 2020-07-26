import useImperativeRequest from "./useImperativeRequest";
import { API_URL } from "../configs/app";

const useImperativeRequestWrapper = () => {
  //TODO: get token
  const token = "";
  return useImperativeRequest({ url: API_URL, token });
};

export default useImperativeRequestWrapper;
