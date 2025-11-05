# Health Risk Analyzer Backend

FastAPI backend with PyTorch mock AI model for health risk analysis.

## Setup

1. Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

2. Run the server:
```bash
uvicorn main:app --reload --port 8000
```

3. Access the API:
- API Docs (Swagger UI): http://127.0.0.1:8000/docs
- Root endpoint: http://127.0.0.1:8000

## API Endpoints

### POST /analyze
Analyzes health metrics and returns risk level.

**Request Body:**
```json
{
  "symptoms": "fever",
  "heart_rate": 110,
  "temperature": 38.5,
  "spo2": 94,
  "systolic": 130,
  "diastolic": 85
}
```

**Response:**
```json
{
  "level": "orange",
  "confidence": 86.7,
  "message": "High risk. Contact a healthcare provider soon."
}
```

## Project Structure

```
backend/
├── main.py              # FastAPI application
├── mock_model.py        # PyTorch mock AI model
└── requirements.txt     # Dependencies
```

