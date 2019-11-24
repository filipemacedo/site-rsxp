import { useState, useEffect } from "react";

export function useTimeout(time) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsFinished(true), time);

    return () => clearTimeout(timeout);
  }, []);

  return isFinished;
}
