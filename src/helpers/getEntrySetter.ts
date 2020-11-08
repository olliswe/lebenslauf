const getEntrySetter = (entries: any[], stateSetter: any, index?: number) => (
  entry: any
) => {
  if (index === undefined) {
    return;
  }
  const entriesCopy = [...entries];
  const newEntries = entriesCopy.splice(index, 1, entry);
  stateSetter(newEntries);
};

export default getEntrySetter;
