import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebounce] = useState(value);
  useEffect(() => {
    const debtimeout = setTimeout(() => {
      setDebounce(value);
    }, [timeout]);

    return () => {
      clearTimeout(debtimeout);
    };
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
