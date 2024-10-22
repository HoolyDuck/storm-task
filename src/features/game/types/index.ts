export type ActiveTab =
  | "home"
  | "game"
  | "custom-game"
  | "settings"
  | "choose-turn";
export type Turn = "player" | "computer";
export type CustomSettings = {
  matchAmount: number;
  turn: Turn;
};

export interface GameContextValue {
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
  customSettings: CustomSettings;
  setCustomSettings: React.Dispatch<React.SetStateAction<CustomSettings>>;
}
