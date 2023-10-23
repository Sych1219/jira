export const isUndefined = (obj) => (obj === 0 ? false : !obj);
export const cleanObject = (object) => {
  const res = { ...object };
  Object.keys(res).forEach((key) => {
    if (isUndefined(object[key])) {
      delete res[key];
    }
  });
  return res;
};
