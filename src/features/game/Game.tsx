import { cn } from "@/lib/utils";
import { HomeTab } from "./components/tabs/HomeTab";
import { GameTab } from "./components/tabs/game-tab/GameTab";
import { ChooseTurnTab } from "./components/tabs/ChooseTurnTab";
import { SettingsTab } from "./components/tabs/settings-tab/SettingsTab";
import { useContext, useState } from "react";
import { GameContext } from "./context/GameContext";

export const Game = () => {
  const { activeTab, gameSettings: customSettings } = useContext(GameContext);
  const [resetKey, setResetKey] = useState(0);

  const reset = () => {
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <main
      className={cn(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "min-h-screen"
      )}
    >
      {activeTab === "home" && <HomeTab />}
      {activeTab === "game" && (
        <GameTab
          {...customSettings}
          reset={reset}
          key={resetKey}
        />
      )}
      {activeTab === "settings" && <SettingsTab />}
      {activeTab === "choose-turn" && <ChooseTurnTab />}
    </main>
  );
};
