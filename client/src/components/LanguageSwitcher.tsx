import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" data-testid="button-language-toggle">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black dark:bg-gray-800 dark:text-white rounded-md shadow-lg">
        <DropdownMenuItem
          onClick={() => changeLanguage("uk")}
          className={`flex items-center gap-2 ${i18n.language === "uk" ? "bg-accent dark:bg-accent-dark" : ""}`}
          data-testid="language-uk"
        >
          Українська
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage("en")}
          className={`flex items-center gap-2 ${i18n.language === "en" ? "bg-accent dark:bg-accent-dark" : ""}`}
          data-testid="language-en"
        >
         English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
