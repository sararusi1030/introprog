def display_and_save_results(num1, num2, results):
    with open("calculations.txt", "a") as file:
        file.write(f"The sum of {num1} and {num2} is {results['sum']}\n")
        file.write(f"The difference between {num1} and {num2} is {results['difference']}\n")
        file.write(f"The product of {num1} and {num2} is {results['product']}\n")
        file.write(f"The quotient of {num1} and {num2} is {results['quotient']}\n")

    print(f"The sum of {num1} and {num2} is {results['sum']}")
    print(f"The difference between {num1} and {num2} is {results['difference']}")
    print(f"The product of {num1} and {num2} is {results['product']}")
    print(f"The quotient of {num1} and {num2} is {results['quotient']}")