import sys
import os

# Add parent directory to path to import main and model
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from main import app

