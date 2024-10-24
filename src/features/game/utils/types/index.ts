export type ActiveTab = "home" | "game" | "settings" | "choose-turn";
export type Turn = "player" | "computer";
export type GameSettings = {
  matchAmount: number;
  turn: Turn;
  maxMatchesPerTurn: number;
};

export interface GameContextValue {
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
  gameSettings: GameSettings;
  setGameSettings: React.Dispatch<React.SetStateAction<GameSettings>>;
}
