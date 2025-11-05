import { useState } from "react";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import SymptomForm from "@/components/health-analyzer/SymptomForm";
import ResultCard from "@/components/health-analyzer/ResultCard";
import LanguageToggle from "@/components/health-analyzer/LanguageToggle";
import { AnalyzeResponse, analyzeRisk, AnalyzeRequest } from "@/lib/healthAnalyzerApi";
import { translations } from "@/lib/translations";

const HealthRiskAnalyzer = () => {
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "ur">("en");

  const t = translations[lang];

  const handleAnalyze = async (data: any) => {
    setLoading(true);
    setResult(null);
    setError(null);
    
    try {
      const requestData: AnalyzeRequest = {
        symptoms: data.symptoms || "",
        heart_rate: data.heart_rate,
        temperature: data.temperature,
        spo2: data.spo2,
        systolic: data.systolic,
        diastolic: data.diastolic,
      };

      const apiResult = await analyzeRisk(requestData);
      setResult(apiResult);
    } catch (err) {
      console.error("Error analyzing risk:", err);
      setError("Failed to analyze risk. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ur" : "en");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10 animate-fade-in">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 hover-scale">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h1 className="text-base sm:text-xl font-bold text-foreground">
              {t.title}
            </h1>
          </Link>
          <LanguageToggle currentLang={lang} onToggle={toggleLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Hero Section */}
          <div className="text-center max-w-2xl space-y-3 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Activity className="w-4 h-4" />
              <span>AI-Powered Health Assessment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.subtitle}
            </h2>
            <p className="text-muted-foreground">
              Enter your vital signs below for instant risk analysis
            </p>
          </div>

          {/* Form */}
          <div className="w-full flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <SymptomForm 
              onAnalyze={handleAnalyze} 
              loading={loading} 
              translations={t}
            />
          </div>

          {/* Loading State */}
          {loading && (
            <div className="w-full max-w-2xl flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <Activity className="w-6 h-6 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="mt-4 text-muted-foreground font-medium">
                {t.form.analyzing}
              </p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="w-full max-w-2xl flex flex-col items-center justify-center py-12 animate-fade-in">
              <div className="p-4 rounded-lg border border-destructive bg-destructive/10 text-destructive text-center">
                <p className="font-medium">{error}</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Make sure the backend server is running on http://localhost:8000
                </p>
              </div>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className="w-full flex justify-center animate-scale-in">
              <ResultCard result={result} translations={t} />
            </div>
          )}

          {/* Info Cards - Only show when no result */}
          {!result && !loading && (
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-4 rounded-lg border bg-card hover-scale transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Low Risk</h4>
                    <p className="text-xs text-muted-foreground mt-1">Normal vitals, continue monitoring</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card hover-scale transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Moderate Risk</h4>
                    <p className="text-xs text-muted-foreground mt-1">Consult healthcare provider</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card hover-scale transition-all">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">High Risk</h4>
                    <p className="text-xs text-muted-foreground mt-1">Seek immediate attention</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-card/30">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Health Risk Analyzer. For informational purposes only.</p>
          <p className="text-xs mt-1">Not a substitute for professional medical advice</p>
        </div>
      </footer>
    </div>
  );
};

export default HealthRiskAnalyzer;
