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
    <>
      <h1 className={cn("text-4xl", "font-bold", "mb-4")}>🔥 Match Game 🔥</h1>
      <div className={cn("flex", "space-x-4")}>
        <Button onClick={handleStartGame}>🎮 Start</Button>
        <Button onClick={handleCustomGame}>⚙️ Custom Game</Button>
      </div>
    </>
  );
};
