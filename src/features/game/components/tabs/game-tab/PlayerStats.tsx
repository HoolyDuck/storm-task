import { cn } from "@/lib/utils";

type PlayerStatsProps = {
  matches: number;
  isPlayerTurn: boolean;
  name: string;
};

export const PlayerStats = ({
  matches,
  isPlayerTurn,
  name,
}: PlayerStatsProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start grow border-2 rounded-md p-2",
        isPlayerTurn && " border-blue-500  bg-blue-100"
      )}
    >
      <p>{name}</p>
      <p>{matches}</p>
    </div>
  );
};
