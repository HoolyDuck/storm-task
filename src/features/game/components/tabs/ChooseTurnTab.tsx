import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { BotIcon } from "lucide-react";

export const ChooseTurnTab = () => {
  return (
    <div>
      <h2>Who starts first?</h2>
      <div>
        <Button>
          <PersonIcon />
          Player
        </Button>
        <Button>
          <BotIcon />
          Computer
        </Button>
      </div>
    </div>
  );
};
