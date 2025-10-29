import { BusinessCardData, Template } from "@shared/schema"; // Імпорт типів для даних візитки та шаблонів
import { ClassicTemplate } from "./templates/ClassicTemplate"; // Імпорт шаблону Classic
import { CreativeTemplate } from "./templates/CreativeTemplate"; // Імпорт шаблону Creative
import { MinimalTemplate } from "./templates/MinimalTemplate"; // Імпорт шаблону Minimal
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate"; // Імпорт шаблону Professional

// Інтерфейс пропсів для компонента
interface BusinessCardPreviewProps {
  data: BusinessCardData; // Дані для візитки
  template: Template; // Обраний шаблон
  primaryColor: string; // Основний колір
  secondaryColor: string; // Вторинний колір
  textColor?: string; // Колір тексту 
  scale?: number; // Масштаб попереднього перегляду 
}

export function BusinessCardPreview({
  data,
  template,
  primaryColor,
  secondaryColor,
  textColor = "#000000", // Дефолтний колір тексту чорний
  scale = 1, // Дефолтний масштаб 1
}: BusinessCardPreviewProps) {
  // Об'єкт з усіма шаблонами для динамічного вибору
  const templates = {
    classic: ClassicTemplate,
    creative: CreativeTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
  };

  // Вибираємо компонент шаблону на основі пропсу template
  const TemplateComponent = templates[template];

  return (
    <div
      id="business-card-preview" // Ідентифікатор для завантаження/скріншотів
      className="transition-transform duration-300" // Анімація при зміні масштабу
      style={{ transform: `scale(${scale})` }} // Застосовуємо масштаб
    >
      <TemplateComponent
        data={data}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        textColor={textColor}
        forExport={false} // <- додаємо для зміщення іконок при імпорті
      />
    </div>
  );
}