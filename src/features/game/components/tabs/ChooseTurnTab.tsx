import { Button } from "@/components/ui/button";
import { GameContext } from "../../context/GameContext";
import { useCallback, useContext } from "react";
import { defaultGameSettings } from "../../utils/constants";
import { Layout } from "@/components/ui/layout";

export const ChooseTurnTab = () => {
  const { setGameSettings, setActiveTab } = useContext(GameContext);

  const handleTurn = useCallback(
    (turn: "player" | "computer") => {
      setGameSettings({
        ...defaultGameSettings,
        turn,
      });
      setActiveTab("game");
    },
    [setGameSettings, setActiveTab]
  );

  return (
    <Layout>
      <h2 className="text-2xl font-bold ">Who starts?</h2>
      <div className="flex space-x-4">
        <Button onClick={() => handleTurn("player")}>🧑 Me</Button>
        <Button onClick={() => handleTurn("computer")}>🤖 Computer</Button>
      </div>
    </Layout>
  );
};
