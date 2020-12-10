import { INITIAL_PERSONAL_PROJECT } from "../models/cv";
import useEntry from "./useEntry";

const usePersonalProjects = () =>
  useEntry({
    entryName: "personalProjectEntries",
    initialState: INITIAL_PERSONAL_PROJECT,
    requiredFields: ["name"],
  });
export default usePersonalProjects;
