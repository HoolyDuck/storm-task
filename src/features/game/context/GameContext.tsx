import { createContext, useState } from "react";
import { ActiveTab, GameContextValue } from "../utils/types";
import { defaultGameSettings } from "../utils/constants";

export const GameContext = createContext<GameContextValue>({
  activeTab: "home",
  setActiveTab: () => {},
  gameSettings: defaultGameSettings,
  setGameSettings: () => {},
});

export const GameProvider = ({ children }: React.PropsWithChildren) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [gameSettings, setGameSettings] = useState(defaultGameSettings);

  return (
    <GameContext.Provider
      value={{
        activeTab,
        setActiveTab,
        gameSettings,
        setGameSettings,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
