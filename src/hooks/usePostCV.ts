import useCV from "../stores/useCV";
import useMutation from "../queries/useMutation";
import { useCallback } from "react";
import useToastMessages from "./useToastMessages";

const usePostCV = () => {
  const cv = useCV((state) => state.cv);
  const set = useCV((state) => state.set);
  const { success, error } = useToastMessages();

  const [mutate] = useMutation("me/cv", { method: "post", body: cv });

  const postCV = useCallback(async () => {
    try {
      const data = await mutate();
      console.log(data);
      success("CV was successfully saved");
      return { success: true };
    } catch (e) {
      error("Sorry, an error occurred!");
      return { success: false };
    }
  }, [mutate, success, error]);
};
