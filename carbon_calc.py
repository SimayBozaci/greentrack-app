import json

def calculate_carbon_footprint(data):

    factors = {
        "car_km": 0.21,
        "meat_days_per_week": 5.0,
        "electricity_kwh_per_month": 0.475,
        "water_liters_per_day": 0.0015,
        "natural_gas_m3_per_month": 2.05
    }


    car_emission = data["car_km"] * factors["car_km"]
    meat_emission = (data["meat_days_per_week"] / 7) * factors["meat_days_per_week"]
    electricity_emission = (data["electricity_kwh_per_month"] / 30) * factors["electricity_kwh_per_month"]
    water_emission = data["water_liters_per_day"] * factors["water_liters_per_day"]
    gas_emission = (data["natural_gas_m3_per_month"] / 30) * factors["natural_gas_m3_per_month"]

    total_daily_emission = car_emission + meat_emission + electricity_emission + water_emission + gas_emission

    # JSON çıktısı
    result = {
        "car_emission_kg": round(car_emission, 2),
        "meat_emission_kg": round(meat_emission, 2),
        "electricity_emission_kg": round(electricity_emission, 2),
        "water_emission_kg": round(water_emission, 2),
        "natural_gas_emission_kg": round(gas_emission, 2),
        "total_daily_emission_kg": round(total_daily_emission, 2)
    }

    return result


if __name__ == "__main__":

    user_data = {
        "car_km": 10,
        "meat_days_per_week": 3,
        "electricity_kwh_per_month": 150,
        "water_liters_per_day": 100,
        "natural_gas_m3_per_month": 50
    }

    result = calculate_carbon_footprint(user_data)

    with open("carbon_output.json", "w") as f:
        json.dump(result, f, indent=4)

    print("✅ Karbon ayak izi hesaplandı ve 'carbon_output.json' dosyasına yazıldı.")
