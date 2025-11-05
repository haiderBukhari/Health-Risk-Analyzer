# Health Risk Analyzer

A full-stack web application for instant health risk assessment using AI-powered analysis of vital signs and symptoms. The application consists of a React-based frontend and a FastAPI backend with a PyTorch mock AI model.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Frontend](#frontend)
- [Backend](#backend)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Technical Stack](#technical-stack)

## Project Overview

The Health Risk Analyzer is a medical assessment tool that allows users to input their symptoms and vital signs to receive an instant risk analysis. The system evaluates health metrics including heart rate, temperature, blood oxygen saturation (SpO2), and blood pressure to determine risk levels ranging from low (green) to emergency (red).

### Key Features

- Real-time health risk assessment based on vital signs
- AI-powered analysis using PyTorch neural network
- Multi-language support (English and Urdu)
- Responsive web interface
- Color-coded risk level indicators
- Confidence scoring for each assessment

## Architecture

The application follows a client-server architecture:

- **Frontend**: React application built with Vite, TypeScript, and Tailwind CSS
- **Backend**: FastAPI REST API with PyTorch-based AI model
- **Communication**: RESTful API over HTTP/JSON

## Frontend

### Description

The frontend is a modern React application that provides an intuitive interface for users to input their health data and receive risk assessments. The application features a clean, responsive design with real-time form validation and visual feedback.

### Features

#### Symptom and Vital Signs Input Form

The main interface allows users to enter the following information:

1. **Symptom Description**
   - Text area for users to describe their symptoms
   - Maximum length: 1000 characters
   - Optional field for additional context

2. **Heart Rate (bpm)**
   - Accepts values between 20 and 240 beats per minute
   - Required field with input validation
   - Default placeholder: 70 bpm

3. **Temperature (°C)**
   - Accepts values between 30.0 and 45.0 degrees Celsius
   - Required field with decimal precision (0.1 step)
   - Default placeholder: 37.0°C

4. **SpO2 (%)**
   - Blood oxygen saturation percentage
   - Accepts values between 70 and 100
   - Required field with input validation
   - Default placeholder: 98%

5. **Blood Pressure (SYS/DIA)**
   - Systolic pressure: 40-300 mmHg
   - Diastolic pressure: 20-200 mmHg
   - Required field with dual input format (120/80)
   - Visual separator between systolic and diastolic values

6. **Analyze Risk Button**
   - Triggers the risk assessment analysis
   - Shows loading state during API call
   - Displays results with color-coded risk levels

### Frontend Components

- **SymptomForm**: Main input form component with validation
- **ResultCard**: Displays analysis results with risk level indicators
- **LanguageToggle**: Switches between English and Urdu languages
- **HealthRiskAnalyzer**: Main page component that orchestrates the application

### User Interface Elements

- Responsive grid layout that adapts to mobile and desktop screens
- Real-time form validation with error messages
- Loading indicators during analysis
- Color-coded risk level cards (Green, Yellow, Orange, Red)
- Information cards explaining risk levels
- Professional medical disclaimer in footer

### Technology Stack

- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- Tailwind CSS 3.4.11
- React Router DOM 6.26.2
- Radix UI components
- React Hook Form 7.53.0
- Zod 3.23.8 (for validation)

## Backend

### Description

The backend is a FastAPI application that provides a RESTful API for health risk analysis. It uses a PyTorch-based neural network model to process vital signs and generate risk assessments. The backend handles CORS for frontend communication and includes comprehensive input validation.

### Features

#### API Endpoints

1. **POST /analyze**
   - Main endpoint for health risk analysis
   - Accepts JSON payload with vital signs and symptoms
   - Returns risk level, confidence score, and message
   - Includes error handling and logging

2. **GET /**
   - Health check endpoint
   - Returns API status message

#### AI Model

The backend uses a PyTorch neural network model for risk prediction:

- **Architecture**: Multi-layer perceptron with 3 hidden layers
- **Input**: Normalized vital signs (heart rate, temperature, SpO2, systolic BP)
- **Output**: Risk score between 0.0 and 1.0
- **Processing**: Includes normalization and noise injection for realistic simulation

#### Risk Level Classification

The system classifies risk into four levels:

- **Green** (Low Risk): Score < 0.15
  - Message: "Low risk. Self-care and monitor your symptoms."
  
- **Yellow** (Moderate Risk): 0.15 ≤ Score < 0.35
  - Message: "Moderate risk. Rest and seek advice if symptoms worsen."
  
- **Orange** (High Risk): 0.35 ≤ Score < 0.65
  - Message: "High risk. Contact a healthcare provider soon."
  
- **Red** (Emergency): Score ≥ 0.65
  - Message: "Emergency. Seek immediate medical attention."

#### Input Validation

The backend validates all inputs with the following constraints:

- Heart Rate: 20-240 bpm
- Temperature: 30.0-45.0°C
- SpO2: 70-100%
- Systolic BP: 40-300 mmHg
- Diastolic BP: 20-200 mmHg
- Symptoms: Optional string field

### Technology Stack

- FastAPI 0.115.0
- Python 3.11+
- PyTorch 2.5.1
- Pydantic 2.10.2
- Uvicorn 0.32.0
- NumPy (for PyTorch dependencies)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (for frontend)
- Python 3.11+ and pip (for backend)
- Git (for cloning the repository)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

4. Verify the backend is running:
   - Open http://127.0.0.1:8000 in your browser
   - You should see: `{"message": "Health Risk Analyzer API is running 🚀"}`
   - API documentation available at: http://127.0.0.1:8000/docs

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Configure the API URL (optional):
   - Create a `.env` file in the frontend directory
   - Add: `VITE_API_URL=http://localhost:8000`
   - If not set, defaults to `http://localhost:8000`

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application:
   - Open http://localhost:8080 in your browser
   - The frontend will connect to the backend API automatically

### Running Both Services

1. **Terminal 1 - Backend**:
   ```bash
   cd backend
   uvicorn main:app --reload --port 8000
   ```

2. **Terminal 2 - Frontend**:
   ```bash
   cd frontend
   npm run dev
   ```

3. Access the application:
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## Project Structure

```
.
├── backend/
│   ├── main.py              # FastAPI application and routes
│   ├── mock_model.py        # PyTorch AI model implementation
│   ├── requirements.txt     # Python dependencies
│   └── README.md            # Backend-specific documentation
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── health-analyzer/
│   │   │       ├── SymptomForm.tsx      # Input form component
│   │   │       ├── ResultCard.tsx       # Results display component
│   │   │       └── LanguageToggle.tsx   # Language switcher
│   │   ├── pages/
│   │   │   └── HealthRiskAnalyzer.tsx   # Main page component
│   │   ├── lib/
│   │   │   ├── healthAnalyzerApi.ts     # API client functions
│   │   │   └── translations.ts          # Language translations
│   │   └── ...
│   ├── package.json         # Node.js dependencies
│   ├── vite.config.ts      # Vite configuration
│   └── README.md            # Frontend-specific documentation
│
└── README.md                # This file
```

## API Documentation

### POST /analyze

Analyzes health metrics and returns risk assessment.

**Request Body:**
```json
{
  "symptoms": "fever and headache",
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

**Response Fields:**
- `level`: Risk level ("green", "yellow", "orange", or "red")
- `confidence`: Confidence score (0-100)
- `message`: Human-readable risk assessment message

**Error Responses:**
- `400 Bad Request`: Invalid input parameters
- `500 Internal Server Error`: AI model processing error

### GET /

Health check endpoint.

**Response:**
```json
{
  "message": "Health Risk Analyzer API is running 🚀"
}
```

## Development

### Frontend Development

The frontend uses Vite for fast development with hot module replacement:

```bash
cd frontend
npm run dev
```

- Development server runs on http://localhost:8080
- Changes are automatically reflected in the browser
- TypeScript type checking enabled
- ESLint for code quality

### Backend Development

The backend uses Uvicorn with auto-reload:

```bash
cd backend
uvicorn main:app --reload --port 8000
```

- API server runs on http://localhost:8000
- Code changes trigger automatic server restart
- Interactive API documentation at /docs endpoint
- Request logging enabled

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

Output directory: `frontend/dist`

**Backend:**
The backend is ready for production deployment. For production, use:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Technical Stack

### Frontend Technologies

- **React 18.3.1**: UI library
- **TypeScript 5.5.3**: Type safety
- **Vite 5.4.1**: Build tool and dev server
- **Tailwind CSS 3.4.11**: Utility-first CSS framework
- **React Router DOM 6.26.2**: Client-side routing
- **Radix UI**: Accessible component primitives
- **React Hook Form 7.53.0**: Form state management
- **Zod 3.23.8**: Schema validation

### Backend Technologies

- **FastAPI 0.115.0**: Modern Python web framework
- **Python 3.11+**: Programming language
- **PyTorch 2.5.1**: Deep learning framework
- **Pydantic 2.10.2**: Data validation
- **Uvicorn 0.32.0**: ASGI server
- **NumPy**: Numerical computing (PyTorch dependency)

### Communication

- **Protocol**: HTTP/HTTPS
- **Data Format**: JSON
- **CORS**: Enabled for cross-origin requests

## Notes

- The AI model is a mock implementation using random weights for demonstration purposes
- For production use, the model should be trained on real medical data
- This application is for informational purposes only and is not a substitute for professional medical advice
- Always consult with healthcare professionals for actual medical concerns

