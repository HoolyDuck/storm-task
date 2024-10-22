import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DicesIcon, SettingsIcon } from "lucide-react";

export const HomeTab = () => {
  return (
    <>
      <h1 className={cn("text-4xl", "font-bold", "mb-4")}>🔥 Match Game 🔥</h1>
      <div className={cn("flex", "space-x-4")}>
        <Button>
          <DicesIcon size={24} />
          Start
        </Button>
        <Button>
          <SettingsIcon size={24} />
          Custom Game
        </Button>
      </div>
    </>
  );
};
