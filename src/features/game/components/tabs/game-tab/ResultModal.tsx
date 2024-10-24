import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

type ResultModalProps = {
  gameWinner: "player" | "computer";
  reset: () => void;
  handleGoHome: () => void;
};

export const ResultModal = ({
  gameWinner,
  reset,
  handleGoHome,
}: ResultModalProps) => {
  return (
    <Modal>
      <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-md">
        <h2 className="text-2xl font-bold">
          {gameWinner === "player" ? "You won!" : "Computer won!"}
        </h2>
        <div className="flex gap-2">
          <Button onClick={reset}>Play again</Button>
          <Button
            onClick={handleGoHome}
            variant="outline"
          >
            Go home
          </Button>
        </div>
      </div>
    </Modal>
  );
};
