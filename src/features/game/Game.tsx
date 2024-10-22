import { cn } from "@/lib/utils";
import { HomeTab } from "./components/tabs/HomeTab";
import { GameTab } from "./components/tabs/GameTab";
import { ChooseTurnTab } from "./components/tabs/ChooseTurnTab";
import { SettingsTab } from "./components/tabs/SettingsTab";
import { useState } from "react";
import { ActiveTab, CustomSettings } from "./types";

export const Game = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [customSettings, setCustomSettings] = useState<CustomSettings>({
    matchAmount: 25,
    turn: "player",
  });

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
