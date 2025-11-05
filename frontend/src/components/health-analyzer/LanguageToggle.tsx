import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  currentLang: "en" | "ur";
  onToggle: () => void;
}

export default function LanguageToggle({ currentLang, onToggle }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="gap-2"
    >
      <Languages className="w-4 h-4" />
      {currentLang === "en" ? "اردو" : "English"}
    </Button>
  );
}
