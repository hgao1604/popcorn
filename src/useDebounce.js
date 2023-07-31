import { useCallback, useRef } from "react";

export function useDebounce(callback, delay) {
  const timer = useRef(null);

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}
