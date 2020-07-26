import useRemoteData from "./useRemoteData";

const useRemoteDataWrapper = (props) => {
  //TODO: get token and API_URL
  return useRemoteData(props);
};

export default useRemoteDataWrapper;
