const removeEntry = (array, key) => {
  const copy = [...array];
  copy.splice(key, 1);
  return copy;
};

export default removeEntry;
