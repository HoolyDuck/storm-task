import { cn } from "@/lib/utils";

type MatchCounterProps = {
  matches: number;
  isSubtractAnimationActive: boolean;
  lastMatchAmount: number;
};

export const MatchCounter = ({
  matches,
  isSubtractAnimationActive,
  lastMatchAmount,
}: MatchCounterProps) => {
  return (
    <div className="flex flex-col items-center">
      <p>Matches left</p>
      <div className="relative text-4xl">
        <span>{matches}</span>

        <div
          className={cn(
            "absolute -top-0 -right-10 text-2xl opacity-0 transition-opacity",
            isSubtractAnimationActive && "animate-fadeToRight"
          )}
        >
          -{lastMatchAmount}
        </div>
      </div>
    </div>
  );
};
