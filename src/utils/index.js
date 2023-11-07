import { useEffect, useState } from "react";

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

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [params, setParams] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => setParams(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return params;
};
