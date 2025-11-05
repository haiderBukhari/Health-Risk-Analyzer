import { AlertCircle } from "lucide-react";

interface ResultCardProps {
  result: {
    level: "green" | "yellow" | "orange" | "red";
    confidence: number;
    message: string;
  };
  translations: any;
}

export default function ResultCard({ result, translations }: ResultCardProps) {
  const colorConfig = {
    green: {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-800 dark:text-green-200",
      bar: "bg-green-500",
      badge: "bg-green-500",
    },
    yellow: {
      bg: "bg-yellow-50 dark:bg-yellow-950",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-800 dark:text-yellow-200",
      bar: "bg-yellow-500",
      badge: "bg-yellow-500",
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-950",
      border: "border-orange-200 dark:border-orange-800",
      text: "text-orange-800 dark:text-orange-200",
      bar: "bg-orange-500",
      badge: "bg-orange-500",
    },
    red: {
      bg: "bg-red-50 dark:bg-red-950",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-800 dark:text-red-200",
      bar: "bg-red-500",
      badge: "bg-red-600",
    },
  };

  const config = colorConfig[result.level];
  const levelText = translations.levels[result.level];

  return (
    <div className="w-full max-w-2xl bg-card shadow-lg border-2 rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between animate-fade-in">
        <h3 className="text-xl font-bold text-foreground">
          {translations.result.title}
        </h3>
        <div className={`px-5 py-2 rounded-full font-bold text-white text-lg ${config.badge} animate-scale-in`}>
          {levelText}
        </div>
      </div>

      <div className={`p-5 rounded-lg border ${config.bg} ${config.border} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
        <p className={`font-semibold text-base ${config.text}`}>{result.message}</p>
      </div>

      <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            {translations.result.confidence}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {result.confidence}%
          </span>
        </div>
        <div className="w-full bg-secondary h-4 rounded-full overflow-hidden">
          <div
            className={`${config.bar} h-4 transition-all duration-1000 ease-out rounded-full`}
            style={{ width: `${result.confidence}%` }}
          ></div>
        </div>
      </div>

      <div className={`flex gap-3 p-4 rounded-lg border ${config.bg} ${config.border} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
        <AlertCircle className={`w-5 h-5 flex-shrink-0 ${config.text}`} />
        <p className={`text-sm ${config.text}`}>
          {translations.result.disclaimer}
        </p>
      </div>
    </div>
  );
}
