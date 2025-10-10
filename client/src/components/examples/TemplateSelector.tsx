import { TemplateSelector } from "../TemplateSelector";
import { useState } from "react";
import { Template } from "@shared/schema";

export default function TemplateSelectorExample() {
  const [selected, setSelected] = useState<Template>("classic");

  return (
    <div className="p-8 max-w-2xl">
      <TemplateSelector
        selectedTemplate={selected}
        onSelectTemplate={(template) => {
          console.log("Template selected:", template);
          setSelected(template);
        }}
      />
    </div>
  );
}
