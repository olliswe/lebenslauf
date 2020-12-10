import useCV, { IUseCV } from "../stores/useCV";
import useMutation from "../queries/useMutation";
import { useEffect } from "react";
import useToastMessages from "./useToastMessages";
import { cvPostProcessor } from "../helpers/postProcessors/cvPostProcessor";

const usePostCV = () => {
  const cv = useCV((state) => state.cv);
  const set = useCV((state) => state.set);
  const { success, error } = useToastMessages();

  const [mutate, { isError }] = useMutation("/me/cv", {
    method: "post",
    reducer: cvPostProcessor,
    body: { ...cv, skills: cv.skills.map((skill) => ({ name: skill })) },
    config: {
      onSuccess: (data) => {
        set((state: IUseCV) => {
          state.cv = data;
        });
        success("CV was successfully saved");
      },
      onError: () => {
        error("Sorry, an error occurred!");
      },
    },
  });

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return mutate;
};

export default usePostCV;
