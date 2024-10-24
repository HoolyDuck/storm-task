import { useCallback, useEffect, useRef, useState } from "react";
import { GameSettings } from "../utils/types";
import { useSubtractAnimation } from "./useSubtractAnimation";
import { calcBestMove } from "../utils/calcWinnerAndBestMove";

export const useGame = ({
  matchAmount,
  turn,
  maxMatchesPerTurn: gameMaxMatchesPerTurn,
}: GameSettings) => {
  const isComputerFirst = useRef(turn === "computer");
  const gameState = useRef({
    matches: matchAmount,
    playerMatches: 0,
    computerMatches: 0,
    maxMatchesPerTurn: gameMaxMatchesPerTurn,
  });

  const [matches, setMatches] = useState(matchAmount);
  const [activeTurn, setActiveTurn] = useState(turn);

  const [maxMatchesPerTurn] = useState(gameState.current.maxMatchesPerTurn);

  const [playerMatches, setPlayerMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [gameWinner, setGameWinner] = useState<"player" | "computer" | null>(
    null
  );

  const { isSubtractAnimationActive, lastMatchAmount, doSubtractAnimation } =
    useSubtractAnimation();

  const makeMove = useCallback(
    (amount: number, player: boolean) => {
      if (amount > maxMatchesPerTurn) {
        return;
      }

      gameState.current.matches -= amount;
      gameState.current[player ? "playerMatches" : "computerMatches"] += amount;

      setMatches(gameState.current.matches);

      if (player) {
        setPlayerMatches((prevMatches) => prevMatches + amount);
      } else {
        setComputerMatches((prevMatches) => prevMatches + amount);
      }
      doSubtractAnimation(amount);

      if (gameState.current.matches === 0) {
        setGameWinner(player ? "computer" : "player");
        return;
      }

      setActiveTurn(player ? "computer" : "player");
    },
    [maxMatchesPerTurn, doSubtractAnimation]
  );

  const makeComputerMove = useCallback(async () => {
    return new Promise<void>((resolve) => {
      let computerMatchAmount = 0;

      const bestMove = calcBestMove(
        gameState.current.matches,
        gameState.current.playerMatches,
        gameState.current.computerMatches,
        maxMatchesPerTurn
      );

      computerMatchAmount =
        bestMove === -1
          ? Math.floor(Math.random() * maxMatchesPerTurn) + 1
          : bestMove;

      setTimeout(() => {
        makeMove(computerMatchAmount, false);
        resolve();
      }, 1000);
    });
  }, [maxMatchesPerTurn, matches, playerMatches, computerMatches, makeMove]);

  useEffect(() => {
    if (isComputerFirst.current) {
      makeComputerMove();
      isComputerFirst.current = false;
    }
  }, []);

  const takeMatches = useCallback(
    async (amount: number) => {
      if (activeTurn === "computer") {
        return;
      }

      if (isNaN(amount)) {
        return;
      }

      if (amount > maxMatchesPerTurn) {
        return;
      }

      makeMove(amount, true);
      if (gameState.current.matches === 0) {
        return;
      }
      await makeComputerMove();
    },
    [activeTurn, maxMatchesPerTurn, makeComputerMove, makeMove]
  );

  return {
    matches,
    activeTurn,
    playerMatches,
    computerMatches,
    gameWinner,
    isSubtractAnimationActive,
    lastMatchAmount,
    takeMatches,
  };
};
