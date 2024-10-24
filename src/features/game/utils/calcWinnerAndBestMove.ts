const isEven = (num: number) => num % 2 === 0;

const _calcBestMove = (
  matches: number,
  p1Matches: number,
  p2Matches: number,
  maxMatchesPerTurn: number,
  memo: Record<string, number>
): number => {
  if (matches === 0) {
    return isEven(p1Matches) ? 0 : -1;
  }

  const key = `${matches}-${p1Matches}-${p2Matches}`;
  if (memo[key] !== undefined) {
    return memo[key];
  }

  for (
    let toTake = 1;
    toTake <= Math.min(maxMatchesPerTurn, matches);
    toTake++
  ) {
    // if other player is losing after this move, this is the best move
    const bestMove = _calcBestMove(
      matches - toTake,
      p2Matches,
      p1Matches + toTake,
      maxMatchesPerTurn,
      memo
    );

    if (bestMove === -1) {
      memo[key] = toTake;
      return toTake;
    }
  }

  memo[key] = -1;
  return -1;
};

export const calcBestMove = (
  matchesLeft: number,
  playerMatches: number,
  computerMatches: number,
  maxMatchesPerTurn: number
): number => {
  const memo = {};
  // find out if computer can win
  const bestMove = _calcBestMove(
    matchesLeft,
    computerMatches,
    playerMatches,
    maxMatchesPerTurn,
    memo
  );

  return bestMove;
};
