import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface SymptomFormProps {
  onAnalyze: (data: any) => void;
  loading: boolean;
  translations: any;
}

export default function SymptomForm({ onAnalyze, loading, translations }: SymptomFormProps) {
  const [form, setForm] = useState({
    symptoms: "",
    heart_rate: "",
    temperature: "",
    spo2: "",
    systolic: "",
    diastolic: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (form.symptoms.length > 1000) {
      newErrors.symptoms = translations.errors.symptomLength;
    }
    
    const hr = Number(form.heart_rate);
    if (hr < 20 || hr > 240) {
      newErrors.heart_rate = translations.errors.heartRate;
    }
    
    const temp = Number(form.temperature);
    if (temp < 30 || temp > 45) {
      newErrors.temperature = translations.errors.temperature;
    }
    
    const spo2 = Number(form.spo2);
    if (spo2 < 70 || spo2 > 100) {
      newErrors.spo2 = translations.errors.spo2;
    }
    
    const sys = Number(form.systolic);
    const dia = Number(form.diastolic);
    if (sys < 40 || sys > 300 || dia < 20 || dia > 200) {
      newErrors.bp = translations.errors.bloodPressure;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    onAnalyze({
      ...form,
      heart_rate: Number(form.heart_rate),
      temperature: Number(form.temperature),
      spo2: Number(form.spo2),
      systolic: Number(form.systolic),
      diastolic: Number(form.diastolic),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-card shadow-sm border rounded-lg p-6 space-y-4 transition-all hover:shadow-md"
    >
      <div className="space-y-2">
        <Label htmlFor="symptoms" className="text-foreground text-base">
          {translations.form.symptomDescription}
        </Label>
        <Textarea
          id="symptoms"
          name="symptoms"
          className="resize-none"
          rows={3}
          onChange={handleChange}
          value={form.symptoms}
          placeholder={translations.form.symptomPlaceholder}
        />
        {errors.symptoms && (
          <p className="text-sm text-destructive">{errors.symptoms}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="heart_rate">{translations.form.heartRate}</Label>
          <Input
            id="heart_rate"
            name="heart_rate"
            type="number"
            onChange={handleChange}
            value={form.heart_rate}
            required
            placeholder="70"
          />
          {errors.heart_rate && (
            <p className="text-sm text-destructive">{errors.heart_rate}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="temperature">{translations.form.temperature}</Label>
          <Input
            id="temperature"
            name="temperature"
            type="number"
            step="0.1"
            onChange={handleChange}
            value={form.temperature}
            required
            placeholder="37.0"
          />
          {errors.temperature && (
            <p className="text-sm text-destructive">{errors.temperature}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="spo2">{translations.form.spo2}</Label>
          <Input
            id="spo2"
            name="spo2"
            type="number"
            onChange={handleChange}
            value={form.spo2}
            required
            placeholder="98"
          />
          {errors.spo2 && (
            <p className="text-sm text-destructive">{errors.spo2}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>{translations.form.bloodPressure}</Label>
          <div className="flex gap-2">
            <Input
              name="systolic"
              placeholder="120"
              type="number"
              onChange={handleChange}
              value={form.systolic}
              required
            />
            <span className="flex items-center text-muted-foreground">/</span>
            <Input
              name="diastolic"
              placeholder="80"
              type="number"
              onChange={handleChange}
              value={form.diastolic}
              required
            />
          </div>
          {errors.bp && (
            <p className="text-sm text-destructive">{errors.bp}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
        size="lg"
      >
        {loading ? translations.form.analyzing : translations.form.analyzeButton}
      </Button>
    </form>
  );
}
