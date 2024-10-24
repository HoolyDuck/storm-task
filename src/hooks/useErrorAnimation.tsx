import { useState, useCallback } from "react";

export const useErrorAnimation = () => {
  const [isErrorAnimationActive, setIsErrorAnimationActive] = useState(false);
  const doErrorAnimation = useCallback(() => {
    setIsErrorAnimationActive(true);
    setTimeout(() => {
      setIsErrorAnimationActive(false);
    }, 500);
  }, []);

  return {
    isErrorAnimationActive,
    doErrorAnimation,
  };
};
