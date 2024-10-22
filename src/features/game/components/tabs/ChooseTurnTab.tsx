import { Button } from "@/components/ui/button";
import { GameContext } from "../../context/GameContext";
import { useCallback, useContext } from "react";

const defaultSettings = {
  matchAmount: 25,
  turn: "player",
};

export const ChooseTurnTab = () => {
  const { setGameSettings, setActiveTab } = useContext(GameContext);

  const handleTurn = useCallback(
    (turn: "player" | "computer") => {
      setGameSettings({
        ...defaultSettings,
        turn,
      });
      setActiveTab("game");
    },
    [setGameSettings, setActiveTab]
  );

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Who starts?</h2>
      <div className="flex space-x-4">
        <Button onClick={() => handleTurn("player")}>🧑 Me</Button>
        <Button onClick={() => handleTurn("computer")}>🤖 Computer</Button>
      </div>
    </div>
  );
};
