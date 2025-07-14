import requests

response = requests.get("https://countriesnow.space/api/v0.1/countries/capital")

print(response.json()["data"][0])