const removeEntryHelper = (array, key) => {
  const copy = [...array];
  copy.splice(key, 1);
  return copy;
};

export default removeEntryHelper;
