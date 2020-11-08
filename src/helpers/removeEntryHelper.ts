const removeEntryHelper = (array: any[], key: number) => {
  const copy = [...array];
  copy.splice(key, 1);
  return copy;
};

export default removeEntryHelper;
