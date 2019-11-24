import { useState, useEffect } from "react";

export function useTimeout(time) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsFinished(true), time);
  }, []);

  return isFinished;
}
