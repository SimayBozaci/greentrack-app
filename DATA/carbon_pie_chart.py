import json
import matplotlib.pyplot as plt


with open("carbon_output.json", "r") as f:
    data = json.load(f)

# Anahtarlar ve değerler
labels = []
values = []


for key, value in data.items():
    if key != "total_daily_emission_kg":
        labels.append(key.replace("_emission_kg", "").replace("_", " ").title())
        values.append(value)


colors = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3']

# Pasta grafiği
plt.figure(figsize=(7, 7))
plt.pie(values, labels=labels, autopct='%1.1f%%', colors=colors, startangle=140)
plt.title("Günlük Karbon Emisyon Dağılımı", fontsize=14)
plt.tight_layout()

plt.savefig("carbon_pie_chart.png")


plt.show()
