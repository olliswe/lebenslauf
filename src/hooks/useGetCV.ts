import useQuery from "../queries/useQuery";
import { useEffect } from "react";
import useUser from "../stores/useUser";
import { ICV } from "../models/cv";
import useCV, { IUseCV } from "../stores/useCV";
import useToastMessages from "./useToastMessages";
import { cvsPostProcessor } from "../helpers/postProcessors/cvPostProcessor";

const useGetCV = () => {
  const { data, isError, isLoading } = useQuery<ICV[]>("getMyCVs", "/me/cv", {
    reducer: cvsPostProcessor,
  });
  const setHasCv = useUser((state) => state.setHasCv);
  const set = useCV((state) => state.set);
  const { error } = useToastMessages();

  useEffect(() => {
    set((state: IUseCV) => {
      state.loading = isLoading;
    });
  }, [isLoading, set]);

  useEffect(() => {
    if (isError) {
      error("Unable to get your CV, please try again later!");
      return;
    }
    if (data && data.length > 0) {
      setHasCv(true);
      set((state: IUseCV) => {
        state.cv = data[0];
      });
    }
  }, [data, isError, setHasCv, error, set]);

  return { isLoading };
};

export default useGetCV;
