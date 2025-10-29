import { TemplateSelector } from "../TemplateSelector";
// Імпортуємо компонент TemplateSelector — він відображає список шаблонів візиток для вибору користувачем.

import { useState } from "react";
// Імпортуємо хук useState із React, щоб зберігати поточний вибраний шаблон.

import { Template } from "@shared/schema";
// Імпортуємо тип Template — це типізація, яка визначає можливі варіанти шаблонів

export default function TemplateSelectorExample() {
  // Створюємо стан для збереження вибраного шаблону. Початково — classic.
  const [selected, setSelected] = useState<Template>("classic");

  return (
    <div className="p-8 max-w-2xl">
      {/* Компонент TemplateSelector, який дозволяє користувачу обрати шаблон */}
      <TemplateSelector
        selectedTemplate={selected} // Передаємо поточний вибраний шаблон
        onSelectTemplate={(template) => {
          // Обробник, який викликається при виборі нового шаблону
          console.log("Template selected:", template); // Виводить вибір у консоль (для перевірки)
          setSelected(template); // Оновлює стан з новим вибраним шаблоном
        }}
      />
    </div>
  );
}