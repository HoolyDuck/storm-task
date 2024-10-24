import { useCallback, useState } from "react";

export const useSubtractAnimation = () => {
  const [isSubtractAnimationActive, setIsSubtractAnimationActive] =
    useState(false);

  const [lastMatchAmount, setLastMatchAmount] = useState(0);

  const doSubtractAnimation = useCallback((amount: number) => {
    setIsSubtractAnimationActive(true);
    setLastMatchAmount(amount);
    setTimeout(() => {
      setIsSubtractAnimationActive(false);
    }, 500);
  }, []);

  return {
    isSubtractAnimationActive,

    lastMatchAmount,
    doSubtractAnimation,
  };
};
