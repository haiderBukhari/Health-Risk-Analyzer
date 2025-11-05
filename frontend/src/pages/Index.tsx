import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Heart, ThermometerSun, Wind, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageToggle from "@/components/health-analyzer/LanguageToggle";
import { translations } from "@/lib/translations";

const Index = () => {
  const [lang, setLang] = useState<"en" | "ur">("en");
  const t = translations[lang].home;

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ur" : "en");
  };

  const features = [
    {
      icon: Heart,
      title: t.features.heartRate.title,
      description: t.features.heartRate.description,
    },
    {
      icon: ThermometerSun,
      title: t.features.temperature.title,
      description: t.features.temperature.description,
    },
    {
      icon: Wind,
      title: t.features.oxygen.title,
      description: t.features.oxygen.description,
    },
    {
      icon: AlertCircle,
      title: t.features.risk.title,
      description: t.features.risk.description,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h1 className="text-base sm:text-xl font-bold text-foreground">
              {t.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle currentLang={lang} onToggle={toggleLanguage} />
            <Link to="/health-analyzer">
              <Button size="sm" className="sm:size-default">{t.getStarted}</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            {t.heroTitle}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t.heroSubtitle}
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Link to="/health-analyzer">
              <Button size="lg" className="gap-2">
                <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.analyzeNow}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            {t.whatWeAnalyze}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-12 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-foreground">
            {t.howItWorks}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h4 className="font-semibold text-foreground">{t.steps.step1.title}</h4>
              <p className="text-sm text-muted-foreground px-2">
                {t.steps.step1.description}
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                2
              </div>
              <h4 className="font-semibold text-foreground">{t.steps.step2.title}</h4>
              <p className="text-sm text-muted-foreground px-2">
                {t.steps.step2.description}
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h4 className="font-semibold text-foreground">{t.steps.step3.title}</h4>
              <p className="text-sm text-muted-foreground px-2">
                {t.steps.step3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="flex gap-3 sm:gap-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{t.importantNotice}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t.disclaimer}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 bg-primary/5 rounded-lg p-6 sm:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
            {t.readyTitle}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            {t.readySubtitle}
          </p>
          <Link to="/health-analyzer">
            <Button size="lg" className="gap-2">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.startAnalysis}
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 sm:mt-16 border-t bg-card/30">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t.footer}
            </p>
            <p className="text-xs text-muted-foreground px-4">
              {t.footerDisclaimer}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
