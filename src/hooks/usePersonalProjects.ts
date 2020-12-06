import useCV, { IUseCV } from "../stores/useCV";
import { useCallback, useMemo } from "react";
import getEntrySetter from "../helpers/getEntrySetter";
import removeEntryHelper from "../helpers/removeEntryHelper";
import { IPersonalProjectEntry, INITIAL_PERSONAL_PROJECT } from "../models/cv";

const usePersonalProjects = () => {
  const personalProjects = useCV((state) => state.cv.personalProjectEntries);
  const set = useCV((state) => state.set);
  const setEntries = useCallback(
    (entries) =>
      set((state: IUseCV) => {
        state.cv.personalProjectEntries = entries;
      }),
    [set]
  );
  const setEntry: (entry: IPersonalProjectEntry, index: number) => void = (
    entry,
    index
  ) => getEntrySetter(personalProjects, setEntries, index);

  const hasEntries = useMemo(() => personalProjects.length > 0, [
    personalProjects,
  ]);

  const addEntry = useCallback(() => {
    setEntries([...personalProjects, INITIAL_PERSONAL_PROJECT]);
  }, [setEntries, personalProjects]);

  const removeEntry = useCallback(
    (index: number) => {
      set((state: IUseCV) => {
        state.cv.personalProjectEntries = removeEntryHelper(
          state.cv.personalProjectEntries,
          index
        );
      });
    },
    [set]
  );

  return {
    personalProjects,
    setEntries,
    setEntry,
    hasEntries,
    addEntry,
    removeEntry,
  };
};

export default usePersonalProjects;
