import { useState } from "react";
import { GameSettings } from "../../utils/types";

type GameTabProps = Partial<GameSettings>;

export const GameTab = ({
  matchAmount = 25,
  turn = "player",
}: GameTabProps) => {
  const [matches, setMatches] = useState(matchAmount);
  const [activeTurn, setActiveTurn] = useState(turn);

  const handleMatchClick = () => {
    setMatches(matches - 1);
    setActiveTurn(activeTurn === "player" ? "computer" : "player");
  };

  return (
    <div>
      <h1>Matches: {matches}</h1>
      <h2>Turn: {activeTurn}</h2>
      <button onClick={handleMatchClick}>Take Match</button>
    </div>
  );
};
