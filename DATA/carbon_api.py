from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/calculate', methods=['POST'])#veriyi aldım
def calculate():
    data = request.get_json()

    car_km = data.get('carKm', 0)
    meat_days = data.get('meatDays', 0)
    electricity = data.get('electricity', 0)

    total_emission = (
        car_km * 0.23 +
        (meat_days / 9.0) * 3.0 +
        (electricity / 65.0) * 0.475
    )

    result = {
        "total_daily_emission_kg": round(total_emission, 2)
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
