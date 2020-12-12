import useCV, { IUseCV } from "../stores/useCV";
import { useCallback, useMemo } from "react";
import removeEntryHelper from "../helpers/removeEntryHelper";
import {
  IEducationEntry,
  IExperienceEntry,
  IPersonalProjectEntry,
} from "../models/cv";
import pick from "lodash/pick";
import isEqual from "lodash/isEqual";

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
  const setEntry = useCallback(
    (entry: T, index: number) => {
      const entriesCopy = [...entries];
      entriesCopy.splice(index, 1, entry);
      setEntries(entriesCopy);
    },
    [entries, setEntries]
  );

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
        if (isEqual(entry, initialState)) {
          return false;
        }
        const required = pick(entry, requiredFields);
        if (
          Object.values(required).some(
            (x) => x === null || x === "" || x === undefined
          )
        ) {
          return true;
        }
        return false;
      }),
    [entries, requiredFields, initialState]
  );

  const handleChange = useCallback(
    ({ index, name, value }: { index: number; name: keyof T; value: any }) => {
      const entry = entries[index];
      if (!entry) {
        return;
      }
      const newEntry = { ...entry, [name]: value };
      setEntry(newEntry, index);
    },
    [entries, setEntry]
  );

  return {
    entries,
    setEntries,
    setEntry,
    hasEntries,
    addEntry,
    removeEntry,
    isInvalid,
    handleChange,
  };
};

export default useEntry;
