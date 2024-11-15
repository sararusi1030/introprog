unit = input("Is this temperature in Celisus or Farenheit(C/F): ")
temp = float(input("Enter the temperature: "))

if unit == "C":
    temp = round((temp * 9) / 5 + 32, 1)
    print(f"The temperature in Farenheit is: {temp}°C")
elif unit == "F":
    temp = round ((temp - 32) * 5 / 9, 1)
    print(f"The temperature in Celsius is: {temp}°F")
else:
    print("Error: Unit entered is invalid")