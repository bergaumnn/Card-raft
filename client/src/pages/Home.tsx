import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BusinessCardData, Template } from "@shared/schema";
import { BusinessCardPreview } from "@/components/BusinessCardPreview";
import { BusinessCardForm } from "@/components/BusinessCardForm";
import { TemplateSelector } from "@/components/TemplateSelector";
import { ColorPicker } from "@/components/ColorPicker";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ZoomIn, ZoomOut } from "lucide-react";
import html2canvas from "html2canvas";
import { useToast } from "@/hooks/use-toast";

const templateColors: Record<Template, { primary: string; secondary: string }> = {
  classic: { primary: "#333333", secondary: "#ffffff" },
  creative: { primary: "#8b5cf6", secondary: "#ec4899" },
  minimal: { primary: "#3b82f6", secondary: "#ffffff" },
  professional: { primary: "#3563aa", secondary: "#ffffff" },
};

export default function Home() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [cardData, setCardData] = useState<BusinessCardData>({
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
    email: "",
    website: "",
    address: "",
  });
  const [selectedTemplate, setSelectedTemplate] = useState<Template>("classic");
  const [primaryColor, setPrimaryColor] = useState(templateColors.classic.primary);
  const [secondaryColor, setSecondaryColor] = useState(templateColors.classic.secondary);
  const [textColor, setTextColor] = useState("#000000");
  const [scale, setScale] = useState(0.65);

  useEffect(() => {
    const saved = localStorage.getItem("lastTemplate");
    if (saved) {
      const template = saved as Template;
      setSelectedTemplate(template);
      setPrimaryColor(templateColors[template].primary);
      setSecondaryColor(templateColors[template].secondary);
    }
  }, []);

  const handleTemplateChange = (template: Template) => {
    setSelectedTemplate(template);
    setPrimaryColor(templateColors[template].primary);
    setSecondaryColor(templateColors[template].secondary);
    localStorage.setItem("lastTemplate", template);
  };

  const handleDownload = async () => {
    const element = document.getElementById("business-card-preview");
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `business-card-${cardData.firstName}-${cardData.lastName}.png`;
      link.href = canvas.toDataURL();
      link.click();

      toast({
        title: t("toast.success.title"),
        description: t("toast.success.description"),
      });
    } catch (error) {
      toast({
        title: t("toast.error.title"),
        description: t("toast.error.description"),
        variant: "destructive",
      });
    }
  };

  const canDownload = cardData.firstName && cardData.lastName && cardData.profession;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold font-heading">{t("header.title")}</h1>
            <p className="text-sm text-muted-foreground">{t("header.subtitle")}</p>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <Tabs defaultValue="data" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="data" data-testid="tab-data">
                    {t("tabs.data")}
                  </TabsTrigger>
                  <TabsTrigger value="style" data-testid="tab-style">
                    {t("tabs.style")}
                  </TabsTrigger>
                  <TabsTrigger value="export" data-testid="tab-export">
                    {t("tabs.export")}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="data" className="mt-6 space-y-4">
                  <BusinessCardForm
                    onDataChange={setCardData}
                    initialData={cardData}
                  />
                </TabsContent>

                <TabsContent value="style" className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">{t("templates.title")}</h3>
                    <TemplateSelector
                      selectedTemplate={selectedTemplate}
                      onSelectTemplate={handleTemplateChange}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">{t("colors.title")}</h3>
                    <ColorPicker
                      color={primaryColor}
                      onChange={setPrimaryColor}
                      label={t("colors.primary")}
                    />
                    <ColorPicker
                      color={secondaryColor}
                      onChange={setSecondaryColor}
                      label={t("colors.secondary")}
                      disabled={selectedTemplate === "minimal"} 
                      style={
                        selectedTemplate === "minimal"
                          ? { opacity: 0.5, cursor: "not-allowed" } 
                          : {}
                      }
                    />
                    <ColorPicker
                      color={textColor}
                      onChange={setTextColor}
                      label={t("colors.text")} 
                    />
                  </div>
                </TabsContent>

                <TabsContent value="export" className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">{t("export.title")}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t("export.description")}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t("export.zoom")}</span>
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => setScale(Math.max(0.4, scale - 0.1))}
                          data-testid="button-zoom-out"
                        >
                          <ZoomOut className="w-4 h-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          onClick={() => setScale(Math.min(1, scale + 0.1))}
                          data-testid="button-zoom-in"
                        >
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      size="lg"
                      onClick={handleDownload}
                      disabled={!canDownload}
                      data-testid="button-download"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t("export.download")}
                    </Button>

                    {!canDownload && (
                      <p className="text-xs text-muted-foreground text-center">
                        {t("export.required")}
                      </p>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <Card className="p-8 bg-muted/30">
              <div className="flex items-center justify-center min-h-[500px]">
                <div className="relative">
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <BusinessCardPreview
                    data={cardData}
                    template={selectedTemplate}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                    scale={scale}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
