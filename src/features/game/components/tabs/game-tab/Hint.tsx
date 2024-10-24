import { cn } from "@/lib/utils";

type HintProps = {
  isErrorAnimationActive: boolean;
  maxMatchesPerTurn: number;
};

export const Hint = ({
  isErrorAnimationActive,
  maxMatchesPerTurn,
}: HintProps) => {
  return (
    <p
      className={cn(
        "text-sm text-center text-gray-500",
        isErrorAnimationActive && "animate-shake text-red-500"
      )}
    >
      You can take from 1 to {maxMatchesPerTurn} matches
    </p>
  );
};
