import useCV, { IUseCV } from "../stores/useCV";
import useMutation from "../queries/useMutation";
import useToastMessages from "./useToastMessages";
import { cvPostProcessor } from "../helpers/postProcessors/cvPostProcessor";
import {
  ICV,
  INITIAL_EDUCATION_STATE,
  INITIAL_EXPERIENCE_STATE,
  INITIAL_PERSONAL_PROJECT,
} from "../models/cv";
import isEqual from "lodash/isEqual";
import omit from "lodash/omit";

const cleanupCV = (cv: ICV) => {
  const experienceEntries = cv.experienceEntries
    .map((entry) => omit(entry, ["id"]))
    .filter((entry) => !isEqual(entry, INITIAL_EXPERIENCE_STATE));
  const educationEntries = cv.educationEntries
    .map((entry) => omit(entry, ["id"]))
    .filter((entry) => !isEqual(entry, INITIAL_EDUCATION_STATE));
  const personalProjectEntries = cv.personalProjectEntries
    .map((entry) => omit(entry, ["id"]))
    .filter((entry) => !isEqual(entry, INITIAL_PERSONAL_PROJECT));
  const skills = cv.skills.map((skill) => ({ name: skill }));
  return {
    ...omit(cv, ["id"]),
    experienceEntries,
    educationEntries,
    personalProjectEntries,
    skills,
  };
};

const usePostCV = () => {
  const cv = useCV((state) => state.cv);
  const set = useCV((state) => state.set);
  const { success, error } = useToastMessages();

  const [mutate] = useMutation("/me/cv", {
    method: "post",
    reducer: cvPostProcessor,
    body: cleanupCV(cv),
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

  return mutate;
};

export default usePostCV;
