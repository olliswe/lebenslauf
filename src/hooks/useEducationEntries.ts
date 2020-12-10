import { INITIAL_EDUCATION_STATE } from "../models/cv";
import useEntry from "./useEntry";

const useEducationEntries = () =>
  useEntry({
    entryName: "educationEntries",
    initialState: INITIAL_EDUCATION_STATE,
    requiredFields: ["institution", "degree", "startDate"],
  });

export default useEducationEntries;
