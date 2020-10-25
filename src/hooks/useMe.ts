import useSWR from "swr";

const useMe = () => useSWR("/accounts/me");

export default useMe;
