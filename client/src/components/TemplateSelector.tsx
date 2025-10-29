import { useTranslation } from "react-i18next";
import { Template } from "@shared/schema";
import { Card } from "@/components/ui/card";

interface TemplateSelectorProps {
  selectedTemplate: Template;
  onSelectTemplate: (template: Template) => void;
}

const templates: Template[] = ["classic", "creative", "minimal", "professional"];

export function TemplateSelector({
  selectedTemplate,
  onSelectTemplate,
}: TemplateSelectorProps) {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 gap-4">
      {templates.map((template) => (
        <Card
          key={template}
          className={`p-4 cursor-pointer transition-all hover-elevate ${
            selectedTemplate === template
              ? "border-primary border-2"
              : "border-border"
          }`}
          onClick={() => onSelectTemplate(template)}
          data-testid={`template-${template}`}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-base">
              {t(`templates.${template}.name`)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(`templates.${template}.description`)}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
