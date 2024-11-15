n = int(input("Enter a non negative integer: "))

if n < 0:
    print("Error: Integer entered is negative")
else:
    factorial = 1

for x in range(1, n + 1):
    factorial = factorial * x
    print(x, ":", factorial)
