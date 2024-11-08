num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

sum_result = num1 + num2
difference_result = num1 - num2
product_result = num1 * num2
quotient_result = num1 / num2 if num2 != 0 else "Undefined.(Cannot divide by 0)"

print("Sum: " + str(sum_result))
print("Difference: " + str(difference_result))
print("Product: " + str(product_result))
print("Quotient: " + str(quotient_result))
