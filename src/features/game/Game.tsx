import { useState } from "react";

export const Game = () => {
  const [matchAmount, setMatchAmount] = useState(25);
  const [isAllowedToTake, setIsAllowedToTake] = useState(true);

  const handleTakeMatches = (count: number) => {
    if (isAllowedToTake) {
      setMatchAmount((prev) => prev - count);
      setIsAllowedToTake(false);
      setTimeout(() => {
        setMatchAmount((prev) => prev - Math.floor(Math.random() * 3 + 1));
        setIsAllowedToTake(true);
      }, 1000);
    }
  };

  return (
    <div>
      <h1>{matchAmount}</h1>
      {[1, 2, 3].map((number) => {
        return (
          <button
            onClick={() => {
              handleTakeMatches(number);
            }}
          >
            take {number}
          </button>
        );
      })}
    </div>
  );
};
