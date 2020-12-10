import useEntry from "./useEntry";
import { INITIAL_EXPERIENCE_STATE } from "../models/cv";

const useExperienceEntries = () =>
  useEntry({
    entryName: "experienceEntries",
    initialState: INITIAL_EXPERIENCE_STATE,
    requiredFields: ["role", "company", "startDate"],
  });

export default useExperienceEntries;
