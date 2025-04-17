from modules.input_module import get_numbers
from modules.processing_module import add, subtract, multiply, divide
from modules.output_module import display_and_save_results

# Get input
num1, num2 = get_numbers()

# Perform calculations
results = {
    "sum": add(num1, num2),
    "difference": subtract(num1, num2),
    "product": multiply(num1, num2),
    "quotient": divide(num1, num2)
}

# Output and save results
display_and_save_results(num1, num2, results)
