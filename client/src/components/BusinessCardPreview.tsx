import { BusinessCardData, Template } from "@shared/schema";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";

interface BusinessCardPreviewProps {
  data: BusinessCardData;
  template: Template;
  primaryColor: string;
  secondaryColor: string;
  scale?: number;
}

export function BusinessCardPreview({
  data,
  template,
  primaryColor,
  secondaryColor,
  scale = 1,
}: BusinessCardPreviewProps) {
  const templates = {
    classic: ClassicTemplate,
    creative: CreativeTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
  };

  const TemplateComponent = templates[template];

  return (
    <div
      id="business-card-preview"
      className="transition-transform duration-300"
      style={{ transform: `scale(${scale})` }}
    >
      <TemplateComponent
        data={data}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  );
}
