import { cn } from "@/lib/utils";
import { HomeTab } from "./components/tabs/HomeTab";
import { GameTab } from "./components/tabs/game-tab/GameTab";
import { ChooseTurnTab } from "./components/tabs/ChooseTurnTab";
import { SettingsTab } from "./components/tabs/SettingsTab";
import { useContext } from "react";
import { GameContext } from "./context/GameContext";

export const Game = () => {
  const { activeTab, gameSettings: customSettings } = useContext(GameContext);

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
      {activeTab === "game" && <GameTab {...customSettings} />}
      {activeTab === "settings" && <SettingsTab />}
      {activeTab === "choose-turn" && <ChooseTurnTab />}
    </main>
  );
};
