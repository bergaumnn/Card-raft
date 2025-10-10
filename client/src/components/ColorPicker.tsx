import { HexColorPicker } from "react-colorful";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label: string;
}

export function ColorPicker({ color, onChange, label }: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start space-x-2"
            data-testid={`color-picker-${label.toLowerCase()}`}
          >
            <div
              className="w-6 h-6 rounded-sm border border-border"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm font-mono">{color.toUpperCase()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-3" align="start">
          <HexColorPicker color={color} onChange={onChange} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
