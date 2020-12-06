import useCV, { IUseCV } from "../stores/useCV";
import { useCallback, useMemo } from "react";
import getEntrySetter from "../helpers/getEntrySetter";
import removeEntryHelper from "../helpers/removeEntryHelper";
import {
  IEducationEntry,
  IExperienceEntry,
  IPersonalProjectEntry,
} from "../models/cv";
import pick from "lodash/pick";
import isEmpty from "lodash/isEmpty";

interface IUseEntry<T> {
  entryName:
    | "educationEntries"
    | "experienceEntries"
    | "personalProjectEntries";
  initialState: T;
  requiredFields: Array<keyof T>;
}

type TEntry = IExperienceEntry | IPersonalProjectEntry | IEducationEntry;

const useEntry = <T extends TEntry>({
  entryName,
  initialState,
  requiredFields,
}: IUseEntry<T>) => {
  const entries = useCV((state) => state.cv[entryName]) as Array<T>;
  const set = useCV((state) => state.set);
  const setEntries = useCallback(
    (entries) =>
      set((state: IUseCV) => {
        state.cv[entryName] = entries;
      }),
    [set, entryName]
  );
  const setEntry: (entries: Array<T>, index: number) => void = (entry, index) =>
    getEntrySetter(entries, setEntries, index);

  const hasEntries = useMemo(() => entries.length > 0, [entries]);

  const addEntry = useCallback(() => {
    setEntries([...entries, initialState]);
  }, [setEntries, entries, initialState]);

  const removeEntry = useCallback(
    (index: number) => {
      set((state: IUseCV) => {
        state.cv[entryName] = removeEntryHelper(state.cv[entryName], index);
      });
    },
    [set, entryName]
  );

  const isInvalid = useMemo(
    () =>
      entries.some((entry) => {
        if (isEmpty(entry)) {
          return false;
        }
        const required = pick(entry, requiredFields);
        if (isEmpty(required)) {
          return true;
        }
        return false;
      }),
    [entries, requiredFields]
  );

  return {
    entries,
    setEntries,
    setEntry,
    hasEntries,
    addEntry,
    removeEntry,
    isInvalid,
  };
};

export default useEntry;
