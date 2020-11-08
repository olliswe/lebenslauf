import { IUseCV, useCV } from "../stores/useCV";
import { useCallback, useMemo } from "react";
import getEntrySetter from "../helpers/getEntrySetter";
import removeEntryHelper from "../helpers/removeEntryHelper";
import { IExperienceEntry } from "../models/cv";

const INITIAL_STATE = {
  role: "",
  company: "",
  start_month: "",
  start_year: "",
  end_month: "",
  current: false,
  techStack: [],
  githubProjectUrl: "",
};

const useExperienceEntries = (index?: number) => {
  const experienceEntries = useCV((state) => state.cv.experienceEntries);
  const set = useCV((state) => state.set);
  const setEntries = useCallback(
    (entries) =>
      set((state: IUseCV) => {
        state.cv.experienceEntries = entries;
      }),
    [set]
  );
  const setEntry: (entry: IExperienceEntry) => void = getEntrySetter(
    experienceEntries,
    setEntries,
    index
  );

  const hasEntries = useMemo(() => experienceEntries.length > 0, [
    experienceEntries,
  ]);

  const addEntry = useCallback(() => {
    setEntries([...experienceEntries, INITIAL_STATE]);
  }, [setEntries, experienceEntries]);

  const removeEntry = useCallback(() => {
    if (index === undefined) {
      return;
    }
    set((state: IUseCV) => {
      state.cv.experienceEntries = removeEntryHelper(
        state.cv.experienceEntries,
        index
      );
    });
  }, [set, index]);

  return {
    experienceEntries,
    setEntries,
    setEntry,
    hasEntries,
    addEntry,
    removeEntry,
  };
};

export default useExperienceEntries;
