import { ColorPicker } from "../ColorPicker";
import { useState } from "react";

export default function ColorPickerExample() {
  const [color, setColor] = useState("#5b8de8");

  return (
    <div className="p-8 max-w-md">
      <ColorPicker
        color={color}
        onChange={(newColor) => {
          console.log("Color changed:", newColor);
          setColor(newColor);
        }}
        label="Основний колір"
      />
    </div>
  );
}
