import { GameSettings } from "../../../utils/types";
import { defaultGameSettings } from "../../../utils/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useGame } from "@/features/game/hooks/useGame";
import { useErrorAnimation } from "@/hooks/useErrorAnimation";
import { useState } from "react";

type GameTabProps = Partial<GameSettings> & {
  reset: () => void;
};

const {
  matchAmount: defaultMatchAmount,
  turn: defaultTurn,
  maxMatchesPerTurn: defaultMaxMatchesPerTurn,
} = defaultGameSettings;

export const GameTab = ({
  matchAmount = defaultMatchAmount,
  turn = defaultTurn,
  maxMatchesPerTurn = defaultMaxMatchesPerTurn,
  reset,
}: GameTabProps) => {
  const [inputValue, setInputValue] = useState("");

  const {
    matches,
    activeTurn,
    playerMatches,
    computerMatches,
    isSubtractAnimationActive,
    lastMatchAmount,
    gameWinner,
    takeMatches,
  } = useGame({
    matchAmount,
    turn,
    maxMatchesPerTurn,
  });

  const { isErrorAnimationActive, doErrorAnimation } = useErrorAnimation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value.replace(/\D/g, ""));
  };

  const handleMatchTake = async () => {
    const amount = parseInt(inputValue, 10);

    if (amount > maxMatchesPerTurn) {
      doErrorAnimation();
      return;
    }

    await takeMatches(amount);
  };

  return (
    <>
      <div className="flex flex-col items-center w-10/12 max-w-md gap-4 sm:w-6/12">
        <div className="flex flex-col items-center">
          <p>Matches left</p>
          <div className="relative text-4xl">
            <span>{matches}</span>

            <div
              className={cn(
                "absolute -top-0 -right-10 text-2xl opacity-0 transition-opacity",
                isSubtractAnimationActive && "animate-fadeToRight"
              )}
            >
              -{lastMatchAmount}
            </div>
          </div>
        </div>
        <div className="grid w-full gap-4 sm:grid-cols-2">
          <div
            className={cn(
              "flex flex-col items-start grow border-2 rounded-md p-2",
              activeTurn === "player" && " border-blue-500  bg-blue-100"
            )}
          >
            <p>🧑 You</p>
            <p>{playerMatches}</p>
          </div>
          <div
            className={cn(
              "flex flex-col items-end grow border-2 rounded-md p-2",
              activeTurn === "computer" && " border-blue-500  bg-blue-100"
            )}
          >
            <p>Computer 🤖</p>
            <p>{computerMatches}</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={handleInputChange}
            />

            <Button
              onClick={handleMatchTake}
              disabled={activeTurn === "computer"}
            >
              Take
            </Button>
          </div>

          <p
            className={cn(
              "text-sm text-center text-gray-500",
              isErrorAnimationActive && "animate-shake text-red-500"
            )}
          >
            You can take from 1 to {maxMatchesPerTurn} matches
          </p>
        </div>
      </div>
      {gameWinner && (
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold">
            {gameWinner === "player" ? "You won!" : "Computer won!"}
          </h2>
          <Button onClick={reset}>Play again</Button>
        </div>
      )}
    </>
  );
};
