import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type SettingsInputProps = React.HTMLProps<HTMLInputElement> & {
  isErrorAnimationActive?: boolean;
  label: string;
  id: string;
};

export const SettingsInput = ({
  isErrorAnimationActive,
  label,
  id,
  ...inputProps
}: SettingsInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor={id}
        className={cn({ "text-red-500 animate-shake": isErrorAnimationActive })}
      >
        {label}
      </Label>
      <Input
        {...inputProps}
        id={id}
      />
    </div>
  );
};
