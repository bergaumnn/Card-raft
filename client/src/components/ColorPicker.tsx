import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ColorPickerProps {
  color: string; // Поточне значення кольору
  onChange: (color: string) => void; // Функція, що викликається при зміні кольору
  label?: string; // Текст мітки над елементом
  disabled?: boolean; // Якщо true — вибір кольору заблоковано
}

// Компонент для вибору кольору
export function ColorPicker({ color, onChange, label, disabled = false }: ColorPickerProps) {
  return (
    <div className="flex flex-col gap-2">

      {/* Підпис над елементом (Label) */}
      {label && (
        <Label className={disabled ? "text-gray-400" : ""}>
          {label}
        </Label>
      )}

      <div className="flex items-center gap-2">

        {/* Квадратик вибору кольору */}
        <input
          type="color" // HTML елемент вибору кольору
          value={color} // Поточний колір
          onChange={(e) => !disabled && onChange(e.target.value)} // Обробник зміни
          className={`w-10 h-10 rounded-md border-0 p-0 appearance-none ${
            disabled ? "bg-gray-300 cursor-not-allowed" : "cursor-pointer"
          }`} // Зовнішній вигляд кнопки
          style={{ backgroundColor: disabled ? "#d1d5db" : color }} // Якщо заблоковано — фон сірий
          disabled={disabled} // Блокує взаємодію
        />

        {/* Поле для ручного введення HEX-коду кольору */}
        <Input
          type="text"
          value={color}
          onChange={(e) => {
            const value = e.target.value;
            // Перевірка, чи введений текст — допустимий HEX-код
            if (/^#([0-9A-Fa-f]{0,6})$/.test(value) || value === "") {
              !disabled && onChange(value); // Якщо не заблоковано — оновлюємо колір
            }
          }}
          placeholder="#rrggbb"
          className="font-mono" // Моноширинний шрифт для HEX-кодів
          disabled={disabled} // Поле неактивне, якщо заблоковано
        />
      </div>
    </div>
  );
}