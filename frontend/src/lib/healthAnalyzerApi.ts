// API helper for Health Risk Analyzer
// Replace with your actual FastAPI backend URL
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export interface AnalyzeRequest {
  symptoms: string;
  heart_rate: number;
  temperature: number;
  spo2: number;
  systolic: number;
  diastolic: number;
}

export interface AnalyzeResponse {
  level: "green" | "yellow" | "orange" | "red";
  confidence: number;
  message: string;
}

export async function analyzeRisk(data: AnalyzeRequest): Promise<AnalyzeResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to analyze risk");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
