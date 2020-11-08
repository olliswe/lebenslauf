import useQuery from "../queries/useQuery";

const useMe = () => useQuery("me", "/accounts/me");

export default useMe;
