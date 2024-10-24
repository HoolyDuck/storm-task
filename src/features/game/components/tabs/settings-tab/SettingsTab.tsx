import { useCallback, useContext, useState } from "react";
import { GameContext } from "../../../context/GameContext";

import { defaultGameSettings } from "../../../utils/constants";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

import { useErrorAnimation } from "@/hooks/useErrorAnimation";
import { SettingsInput } from "./SettingsInput";
import { SettingsTurnChoices } from "./SettingsTurnChoices";

export const SettingsTab = () => {
  const { setGameSettings, setActiveTab } = useContext(GameContext);

  const [turn, setTurn] = useState(defaultGameSettings.turn);
  const { doErrorAnimation, isErrorAnimationActive } = useErrorAnimation();

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const matchAmount = formData.get("match-amount") as string;
      const maxMatchesPerTurn = formData.get("max-matches-per-turn") as string;

      if (!matchAmount || !maxMatchesPerTurn) {
        return;
      }

      if (parseInt(matchAmount, 10) % 2 === 0) {
        doErrorAnimation();
        return;
      }

      setGameSettings({
        matchAmount: parseInt(matchAmount, 10),
        turn,
        maxMatchesPerTurn: parseInt(maxMatchesPerTurn, 10),
      });
      setActiveTab("game");
    },
    [setGameSettings, setActiveTab, turn, doErrorAnimation]
  );

  const handleSetTurn = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, turn: "player" | "computer") => {
      e.preventDefault();
      setTurn(turn);
    },
    [setTurn]
  );

  return (
    <form
      className="flex flex-col w-10/12 max-w-md gap-4 sm:w-6/12"
      onSubmit={handleFormSubmit}
    >
      <div>
        <h2 className="text-2xl font-bold">Game Settings</h2>
        <p className="text-gray-500">
          Customize the game settings to your liking
        </p>
      </div>
      <Separator />
      <SettingsInput
        isErrorAnimationActive={isErrorAnimationActive}
        type="number"
        label="Match amount (should be an odd number)"
        id="match-amount"
        name="match-amount"
        min="5"
        max="500"
        defaultValue={defaultGameSettings.matchAmount}
      />
      <SettingsInput
        label="Max matches per turn"
        type="number"
        id="max-matches-per-turn"
        name="max-matches-per-turn"
        min="1"
        max="20"
        defaultValue={defaultGameSettings.maxMatchesPerTurn}
      />
      <SettingsTurnChoices
        turn={turn}
        handleSetTurn={handleSetTurn}
      />

      <Button>🔥 Start Game</Button>
    </form>
  );
};
