import { useEffect, useState } from "react";

export const isUndefined = (obj: unknown) => (obj === 0 ? false : !obj);
export const cleanObject = (object: any) => {
  const res = { ...object };
  Object.keys(res).forEach((key) => {
    if (isUndefined(object[key])) {
      delete res[key];
    }
  });
  return res;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number): V => {
  const [params, setParams] = useState<typeof value>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setParams(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return params;
};
