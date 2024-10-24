import { useCallback, useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { Input } from "@/components/ui/input";
import { defaultGameSettings } from "../../utils/constants";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export const SettingsTab = () => {
  const { setGameSettings, setActiveTab } = useContext(GameContext);

  const [turn, setTurn] = useState(defaultGameSettings.turn);

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget);
      const matchAmount = formData.get("match-amount") as string;
      const maxMatchesPerTurn = formData.get("max-matches-per-turn") as string;

      setGameSettings({
        matchAmount: parseInt(matchAmount, 10),
        turn,
        maxMatchesPerTurn: parseInt(maxMatchesPerTurn, 10),
      });
      setActiveTab("game");
    },
    [setGameSettings, setActiveTab, turn]
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
      <div className="flex flex-col gap-2">
        <Label htmlFor="match-amount">Match amount</Label>
        <Input
          type="number"
          defaultValue={defaultGameSettings.matchAmount}
          id="match-amount"
          name="match-amount"
          min="5"
          max="500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="max-matches-per-turn">Max matches per turn</Label>
        <Input
          type="number"
          defaultValue={defaultGameSettings.maxMatchesPerTurn}
          id="max-matches-per-turn"
          name="max-matches-per-turn"
          min="1"
          max="20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Who starts?</Label>

        <div className={cn("flex", "flex-col", "gap-2", "sm:flex-row")}>
          <Button
            onClick={(e) => handleSetTurn(e, "player")}
            variant={turn === "player" ? "outline" : "secondary"}
          >
            🧑 Player
          </Button>
          <Button
            onClick={(e) => handleSetTurn(e, "computer")}
            variant={turn === "computer" ? "outline" : "secondary"}
          >
            🤖 Computer
          </Button>
        </div>
      </div>

      <Button>🔥 Start Game</Button>
    </form>
  );
};
