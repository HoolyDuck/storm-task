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
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get("matches") as string;

    handleMatchTake(inputValue);
  };

  return (
    <form
      className="flex gap-2"
      onSubmit={handleFormSubmit}
    >
      <Input
        type="number"
        name="matches"
      />
      <Button
        type="submit"
        disabled={disabled}
      >
        Take
      </Button>
    </form>
  );
};
