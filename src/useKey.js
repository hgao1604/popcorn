import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(() => {
    function handleKey(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    }
    document.addEventListener("keydown", handleKey);
    return function cleanup() {
      document.removeEventListener("keydown", handleKey);
    };
  }, [callback, key]);
}
