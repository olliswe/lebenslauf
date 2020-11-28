import useQuery from "../queries/useQuery";
import { useEffect } from "react";
import useUser from "./useUser";
import { ICV } from "../models/cv";

const useGetCV = () => {
  const { data, error } = useQuery<ICV[]>("getMyCVs", "/me/cv");
  const setHasCv = useUser((state) => state.setHasCv);

  useEffect(() => {
    if (error) {
    }
    if (data && data.length > 0) {
    }
  }, [data, error]);
};

export default useGetCV;
