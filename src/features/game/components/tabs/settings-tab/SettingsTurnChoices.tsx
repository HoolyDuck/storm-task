import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type SettingsTurnChoicesProps = {
  turn: "player" | "computer";
  handleSetTurn: (
    e: React.MouseEvent<HTMLButtonElement>,
    turn: "player" | "computer"
  ) => void;
};

export const SettingsTurnChoices = ({
  turn,
  handleSetTurn,
}: SettingsTurnChoicesProps) => {
  return (
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
  );
};
