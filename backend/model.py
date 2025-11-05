import torch
import torch.nn as nn
import random

class TinyClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(4, 8),
            nn.ReLU(),
            nn.Linear(8, 4),
            nn.ReLU(),
            nn.Linear(4, 1),
            nn.Sigmoid()
        )

    def forward(self, x):
        return self.net(x)

_model = TinyClassifier()

def normalize_inputs(hr, temp, spo2, systolic):
    hr_n = (hr - 70.0) / 50.0
    temp_n = (temp - 37.0) / 3.0
    spo2_n = (spo2 - 95.0) / 5.0
    sys_n = (systolic - 120.0) / 40.0
    return torch.tensor([hr_n, temp_n, spo2_n, sys_n], dtype=torch.float32)

def predict_risk(hr, temp, spo2, systolic):
    x = normalize_inputs(hr, temp, spo2, systolic)
    with torch.no_grad():
        score = _model(x).item()
    score = min(max(score + random.gauss(0, 0.05), 0.0), 1.0)
    return score

def score_to_level_and_confidence(score: float):
    if score < 0.15:
        level, center = "green", 0.075
    elif score < 0.35:
        level, center = "yellow", 0.25
    elif score < 0.65:
        level, center = "orange", 0.5
    else:
        level, center = "red", 0.8

    confidence = round(max(0.0, 1 - abs(score - center) / 0.5) * 100, 1)
    return level, confidence

