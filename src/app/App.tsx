import { GameProvider } from "@/features/game/context/GameContext";
import { Game } from "../features/game/Game";
function App() {
  return (
    <GameProvider>
      <Game />;
    </GameProvider>
  );
}

export default App;
