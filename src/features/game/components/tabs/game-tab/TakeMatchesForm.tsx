import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type TakeMatchesFormProps = {
  handleMatchTake: (input: string) => void;
  disabled: boolean;
};

export const TakeMatchesForm = ({
  handleMatchTake,
  disabled,
}: TakeMatchesFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value.replace(/\D/g, ""));
  };

  const handleButtonClick = () => {
    handleMatchTake(inputValue);
  };

  return (
    <div className="flex gap-2">
      <Input
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        onClick={handleButtonClick}
        disabled={disabled}
      >
        Take
      </Button>
    </div>
  );
};
