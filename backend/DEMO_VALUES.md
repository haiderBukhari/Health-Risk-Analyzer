# Health Risk Analyzer - Demo & Prediction Results

This guide provides example values and actual test outputs from the Health Risk Analyzer, along with expected vs. observed results for model evaluation.

## 🔍 Input Validation Ranges

- **Heart Rate**: 20–240 bpm
- **Temperature**: 30.0–45.0°C
- **SpO₂**: 70–100%
- **Systolic BP**: 40–300 mmHg
- **Diastolic BP**: 20–200 mmHg
- **Symptoms**: Optional text (max 1000 characters)

## 🧪 Test Predictions (Actual Model Outputs)

### 1. Case 1 – Normal (Should be LOW Risk)

**Input:**

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

**Model Output:**

- **Result**: MODERATE
- **Confidence**: 95.1%
- **Comment**: ⚠️ Should ideally be LOW risk. Indicates over-sensitivity in model thresholds.

---

### 2. Case 2 – Mild Symptoms

**Input:**

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

**Model Output:**

- **Result**: MODERATE
- **Confidence**: 85%
- **Comment**: ✅ Acceptable — correctly classified as moderate.

---

### 3. Case 3 – Fever and Body Aches

**Input:**

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

**Model Output:**

- **Result**: HIGH RISK
- **Confidence**: 82.3%
- **Comment**: ✅ Correct — aligns with high risk profile.

---

### 4. Case 4 – Critical Condition

**Input:**

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

**Model Output:**

- **Result**: HIGH RISK
- **Confidence**: 87.5%
- **Comment**: ✅ Correct — consistent with emergency indicators.

---

## 🧭 Expected vs Actual Summary

| Case | Expected | Actual | Confidence | Status |
|------|----------|--------|------------|--------|
| 1 | LOW | MODERATE | 95.1% | ⚠ Needs recalibration |
| 2 | MODERATE | MODERATE | 85% | ✅ Correct |
| 3 | HIGH | HIGH | 82.3% | ✅ Correct |
| 4 | EMERGENCY | HIGH | 87.5% | ✅ Acceptable |
