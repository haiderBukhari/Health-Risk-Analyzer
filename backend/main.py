from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
import logging
from model import predict_risk, score_to_level_and_confidence

app = FastAPI(title="Health Risk Analyzer API", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)

class AnalyzeRequest(BaseModel):
    symptoms: str = Field("", description="Short description of symptoms")
    heart_rate: int = Field(..., ge=20, le=240)
    temperature: float = Field(..., ge=30.0, le=45.0)
    spo2: int = Field(..., ge=70, le=100)
    systolic: int = Field(..., ge=40, le=300)
    diastolic: int = Field(..., ge=20, le=200)

@app.post("/analyze")
def analyze(req: AnalyzeRequest):

    try:
        score = predict_risk(req.heart_rate, req.temperature, req.spo2, req.systolic)
    except Exception as e:
        logging.error(f"Model error: {e}")
        raise HTTPException(status_code=500, detail="AI model error")

    level, confidence = score_to_level_and_confidence(score)
    messages = {
        "green": "Low risk. Self-care and monitor your symptoms.",
        "yellow": "Moderate risk. Rest and seek advice if symptoms worsen.",
        "orange": "High risk. Contact a healthcare provider soon.",
        "red": "Emergency. Seek immediate medical attention.",
    }

    logging.info(
        f"Analyzed: HR={req.heart_rate}, Temp={req.temperature}, SpO2={req.spo2}, BP={req.systolic}/{req.diastolic} → {level.upper()} ({confidence}%)"
    )

    return {"level": level, "confidence": confidence, "message": messages[level]}

@app.get("/")
def root():
    return {"message": "Health Risk Analyzer API is running 🚀"}

