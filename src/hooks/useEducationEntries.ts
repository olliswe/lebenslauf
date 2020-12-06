import useCV, { IUseCV } from "../stores/useCV";
import { useCallback, useMemo } from "react";
import getEntrySetter from "../helpers/getEntrySetter";
import removeEntryHelper from "../helpers/removeEntryHelper";
import { IEducationEntry, INITIAL_EDUCATION_STATE } from "../models/cv";

const useEducationEntries = () => {
  const educationEntries = useCV((state) => state.cv.educationEntries);
  const set = useCV((state) => state.set);
  const setEntries = useCallback(
    (entries) =>
      set((state: IUseCV) => {
        state.cv.educationEntries = entries;
      }),
    [set]
  );
  const setEntry: (entry: IEducationEntry, index: number) => void = (
    entry,
    index
  ) => getEntrySetter(educationEntries, setEntries, index);

  const hasEntries = useMemo(() => educationEntries.length > 0, [
    educationEntries,
  ]);

  const addEntry = useCallback(() => {
    setEntries([...educationEntries, INITIAL_EDUCATION_STATE]);
  }, [setEntries, educationEntries]);

  const removeEntry = useCallback(
    (index: number) => {
      set((state: IUseCV) => {
        state.cv.educationEntries = removeEntryHelper(
          state.cv.educationEntries,
          index
        );
      });
    },
    [set]
  );

  return {
    educationEntries,
    setEntries,
    setEntry,
    hasEntries,
    addEntry,
    removeEntry,
  };
};

export default useEducationEntries;
