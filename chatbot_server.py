from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS to fix frontend issues
from aixplain.factories import PipelineFactory
import os

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

# Set API Key (Make sure you have it set in your environment)
os.environ["TEAM_API_KEY"] = "your_api_key_here"

try:
    model = PipelineFactory.get("67e04b53338999cb9696a763")
except Exception as e:
    print(f"Error initializing model: {e}")
    model = None

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    
    if not data or "Input 1" not in data:
        return jsonify({"error": "Invalid request. Missing 'Input 1'."}), 400

    input_text = data["Input 1"]

    if model is None:
        return jsonify({"error": "Model not initialized."}), 500

    try:
        result = model.run({"Input 1": input_text})
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": f"Model execution failed: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
