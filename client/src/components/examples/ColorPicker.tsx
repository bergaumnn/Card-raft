import { ColorPicker } from "../ColorPicker"; 
// Імпорт компонента ColorPicker, який дозволяє користувачу вибирати колір у вигляді квадратика або вводити його вручну.

import { useState } from "react"; 
// Імпорт хука useState із React — використовується для збереження поточного вибраного кольору.

export default function ColorPickerExample() {
  // Створюємо стан для кольору
  const [color, setColor] = useState("#5b8de8");

  return (
    // Контейнер із відступом (p-8) і обмеженням ширини (max-w-md)
    <div className="p-8 max-w-md">
      {/* Підключення компонента вибору кольору */}
      <ColorPicker
        color={color} // Поточне значення кольору
        onChange={(newColor) => {
          // Обробник зміни кольору — викликається при виборі нового кольору
          console.log("Color changed:", newColor); // Виводить колір у консоль (для перевірки)
          setColor(newColor); // Оновлює стан компонента
        }}
        label="Основний колір" // Текст мітки, який відображається над елементом вибору кольору
      />
    </div>
  );
}