import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { useCallback, useContext } from "react";
import { GameContext } from "../../context/GameContext";

export const HomeTab = () => {
  const { setActiveTab } = useContext(GameContext);

  const handleStartGame = useCallback(() => {
    setActiveTab("choose-turn");
  }, [setActiveTab]);

  const handleCustomGame = useCallback(() => {
    setActiveTab("settings");
  }, [setActiveTab]);

  return (
    <div className={cn("flex", "flex-col", "items-center", "gap-2")}>
      <h1 className={cn("text-4xl", "font-bold")}>🔥 Match Game 🔥</h1>
      <p className="text-sm text-gray-500">
        Take an even amount of matches to win!
      </p>
      <div className={cn("flex", "space-x-4")}>
        <Button onClick={handleStartGame}>🎮 Start</Button>
        <Button onClick={handleCustomGame}>⚙️ Custom Game</Button>
      </div>
    </div>
  );
};
