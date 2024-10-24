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

  const [matchAmount, setMatchAmount] = useState(
    defaultGameSettings.matchAmount
  );
  const [turn, setTurn] = useState(defaultGameSettings.turn);
  const [maxMatchesPerTurn, setMaxMatchesPerTurn] = useState(
    defaultGameSettings.maxMatchesPerTurn
  );

  const handleStartGame = useCallback(() => {
    setGameSettings({
      matchAmount,
      turn,
      maxMatchesPerTurn,
    });
    setActiveTab("game");
  }, [setGameSettings, setActiveTab, matchAmount, turn, maxMatchesPerTurn]);

  const handleMatchAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMatchAmount(parseInt(e.target.value, 10));
    },
    [setMatchAmount]
  );

  const handleMaxMatchesPerTurnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaxMatchesPerTurn(parseInt(e.target.value, 10));
    },
    [setMaxMatchesPerTurn]
  );

  return (
    <div className="flex flex-col w-10/12 max-w-md gap-4 sm:w-6/12">
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
          value={matchAmount}
          onChange={handleMatchAmountChange}
          id="match-amount"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="max-matches-per-turn">Max matches per turn</Label>
        <Input
          value={maxMatchesPerTurn}
          onChange={handleMaxMatchesPerTurnChange}
          id="max-matches-per-turn"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Who starts?</Label>

        <div className={cn("flex", "flex-col", "gap-2", "sm:flex-row")}>
          <Button
            onClick={() => setTurn("player")}
            variant={turn === "player" ? "outline" : "secondary"}
          >
            🧑 Player
          </Button>
          <Button
            onClick={() => setTurn("computer")}
            variant={turn === "computer" ? "outline" : "secondary"}
          >
            🤖 Computer
          </Button>
        </div>
      </div>

      <Button onClick={handleStartGame}>🔥 Start Game</Button>
    </div>
  );
};
