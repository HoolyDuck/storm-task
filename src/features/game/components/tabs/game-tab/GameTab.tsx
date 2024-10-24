import { GameSettings } from "../../../utils/types";
import { defaultGameSettings } from "../../../utils/constants";

import { useGame } from "@/features/game/hooks/useGame";
import { useErrorAnimation } from "@/hooks/useErrorAnimation";
import { useContext } from "react";

import { GameContext } from "@/features/game/context/GameContext";
import { MatchCounter } from "./MatchCounter";
import { PlayerStats } from "./PlayerStats";
import { Hint } from "./Hint";
import { ResultModal } from "./ResultModal";
import { Layout } from "@/components/ui/layout";
import { TakeMatchesForm } from "./TakeMatchesForm";

type GameTabProps = Partial<GameSettings> & {
  reset: () => void;
};

const {
  matchAmount: defaultMatchAmount,
  turn: defaultTurn,
  maxMatchesPerTurn: defaultMaxMatchesPerTurn,
} = defaultGameSettings;

export const GameTab = ({
  matchAmount = defaultMatchAmount,
  turn = defaultTurn,
  maxMatchesPerTurn = defaultMaxMatchesPerTurn,
  reset,
}: GameTabProps) => {
  const {
    matches,
    activeTurn,
    playerMatches,
    computerMatches,
    isSubtractAnimationActive,
    lastMatchAmount,
    gameWinner,
    takeMatches,
  } = useGame({
    matchAmount,
    turn,
    maxMatchesPerTurn,
  });

  const { isErrorAnimationActive, doErrorAnimation } = useErrorAnimation();
  const { setActiveTab } = useContext(GameContext);

  const handleMatchTake = async (input: string) => {
    const amount = parseInt(input, 10);

    if (amount > maxMatchesPerTurn) {
      doErrorAnimation();
      return;
    }

    await takeMatches(amount);
  };

  const handleGoHome = () => {
    setActiveTab("home");
  };

  return (
    <>
      <Layout>
        <MatchCounter
          matches={matches}
          isSubtractAnimationActive={isSubtractAnimationActive}
          lastMatchAmount={lastMatchAmount}
        />
        <div className="grid w-full gap-4 sm:grid-cols-2">
          <PlayerStats
            matches={playerMatches}
            isPlayerTurn={activeTurn === "player"}
            name="🧑 You"
          />
          <PlayerStats
            matches={computerMatches}
            isPlayerTurn={activeTurn === "computer"}
            name="Computer 🤖"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <TakeMatchesForm
            handleMatchTake={handleMatchTake}
            disabled={!!gameWinner || activeTurn === "computer"}
          />
          <Hint
            isErrorAnimationActive={isErrorAnimationActive}
            maxMatchesPerTurn={maxMatchesPerTurn}
          />
        </div>
      </Layout>

      {gameWinner && (
        <ResultModal
          gameWinner={gameWinner}
          reset={reset}
          handleGoHome={handleGoHome}
        />
      )}
    </>
  );
};
