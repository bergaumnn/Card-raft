import { Template } from "@shared/schema";
import { Card } from "@/components/ui/card";

interface TemplateSelectorProps {
  selectedTemplate: Template;
  onSelectTemplate: (template: Template) => void;
}

const templates: { id: Template; name: string; description: string }[] = [
  {
    id: "classic",
    name: "Класичний",
    description: "Елегантний серифний дизайн з золотим акцентом",
  },
  {
    id: "creative",
    name: "Креативний",
    description: "Яскравий дизайн з градієнтами та колами",
  },
  {
    id: "minimal",
    name: "Мінімалістичний",
    description: "Чистий білий простір з тонкими лініями",
  },
  {
    id: "professional",
    name: "Професійний",
    description: "Двоколірна структурована компоновка",
  },
];

export function TemplateSelector({
  selectedTemplate,
  onSelectTemplate,
}: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={`p-4 cursor-pointer transition-all hover-elevate ${
            selectedTemplate === template.id
              ? "border-primary border-2"
              : "border-border"
          }`}
          onClick={() => onSelectTemplate(template.id)}
          data-testid={`template-${template.id}`}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-base">{template.name}</h3>
            <p className="text-sm text-muted-foreground">{template.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
