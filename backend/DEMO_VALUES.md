# Health Risk Analyzer - Demo Values Guide

This guide provides example values you can use to test different risk levels in the Health Risk Analyzer.

## Input Validation Ranges

- **Heart Rate**: 20-240 bpm
- **Temperature**: 30.0-45.0°C
- **SpO2**: 70-100%
- **Systolic BP**: 40-300 mmHg
- **Diastolic BP**: 20-200 mmHg
- **Symptoms**: Optional text (max 1000 characters)

## Demo Test Cases

### 1. Green (Low Risk) - Normal Vital Signs

These values represent healthy, normal vital signs:

```json
{
  "symptoms": "Feeling fine, no concerns",
  "heart_rate": 72,
  "temperature": 36.8,
  "spo2": 98,
  "systolic": 120,
  "diastolic": 80
}
```

**Expected Result**: Green level with high confidence (typically 85-95%)

---

### 2. Yellow (Moderate Risk) - Slightly Elevated

Mild variations from normal:

```json
{
  "symptoms": "Mild headache, slight fatigue",
  "heart_rate": 95,
  "temperature": 37.3,
  "spo2": 96,
  "systolic": 135,
  "diastolic": 88
}
```

**Expected Result**: Yellow level with moderate confidence (typically 75-90%)

---

### 3. Orange (High Risk) - Elevated Values

Significant deviations from normal:

```json
{
  "symptoms": "Fever, body aches, feeling unwell",
  "heart_rate": 110,
  "temperature": 38.5,
  "spo2": 94,
  "systolic": 145,
  "diastolic": 95
}
```

**Expected Result**: Orange level with confidence (typically 80-95%)

---

### 4. Red (Emergency) - Critical Values

Critical vital signs requiring immediate attention:

```json
{
  "symptoms": "Severe chest pain, difficulty breathing",
  "heart_rate": 140,
  "temperature": 39.5,
  "spo2": 88,
  "systolic": 180,
  "diastolic": 110
}
```

**Expected Result**: Red level with high confidence (typically 90-99%)

---

## Additional Test Scenarios

### Scenario A: Low Heart Rate (Bradycardia)

```json
{
  "symptoms": "Feeling tired, dizzy",
  "heart_rate": 50,
  "temperature": 36.5,
  "spo2": 97,
  "systolic": 115,
  "diastolic": 75
}
```

### Scenario B: High Temperature (Fever)

```json
{
  "symptoms": "High fever, chills, body aches",
  "heart_rate": 105,
  "temperature": 39.2,
  "spo2": 96,
  "systolic": 130,
  "diastolic": 85
}
```

### Scenario C: Low Oxygen Saturation

```json
{
  "symptoms": "Shortness of breath, chest tightness",
  "heart_rate": 115,
  "temperature": 37.2,
  "spo2": 90,
  "systolic": 140,
  "diastolic": 90
}
```

### Scenario D: High Blood Pressure (Hypertension)

```json
{
  "symptoms": "Headache, blurred vision",
  "heart_rate": 85,
  "temperature": 36.9,
  "spo2": 98,
  "systolic": 160,
  "diastolic": 105
}
```

### Scenario E: Multiple Abnormal Values

```json
{
  "symptoms": "Severe symptoms, multiple concerns",
  "heart_rate": 125,
  "temperature": 38.8,
  "spo2": 92,
  "systolic": 155,
  "diastolic": 100
}
```

## Testing via API

### Using cURL

```bash
# Test Green level
curl -X POST "http://localhost:8000/analyze" \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": "Feeling fine",
    "heart_rate": 72,
    "temperature": 36.8,
    "spo2": 98,
    "systolic": 120,
    "diastolic": 80
  }'

# Test Orange level
curl -X POST "http://localhost:8000/analyze" \
  -H "Content-Type: application/json" \
  -d '{
    "symptoms": "Fever and body aches",
    "heart_rate": 110,
    "temperature": 38.5,
    "spo2": 94,
    "systolic": 145,
    "diastolic": 95
  }'
```

### Using Swagger UI

1. Start the backend server: `uvicorn main:app --reload --port 8000`
2. Open http://localhost:8000/docs
3. Click on `POST /analyze`
4. Click "Try it out"
5. Paste any of the JSON examples above
6. Click "Execute"

## Testing via Frontend

1. Start both frontend and backend servers
2. Navigate to the Health Risk Analyzer page
3. Enter the values from the examples above in the form
4. Click "Analyze Risk"
5. Observe the color-coded result

## Notes

- The model uses random weights, so results may vary slightly between requests
- The model includes random noise (±0.05), which adds variability
- Extreme values (near validation limits) tend to produce higher risk scores
- Normal values (close to typical ranges) tend to produce lower risk scores
- Multiple abnormal values increase the overall risk score

## Typical Normal Ranges (Reference)

- **Heart Rate**: 60-100 bpm (resting)
- **Temperature**: 36.1-37.2°C (97-99°F)
- **SpO2**: 95-100% (healthy individuals)
- **Systolic BP**: 90-120 mmHg (normal)
- **Diastolic BP**: 60-80 mmHg (normal)

