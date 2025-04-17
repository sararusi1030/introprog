# menu.py

def display_menu():
    print("\n\n***Menu***\n")
    print("1 = Balance")
    print("2 = Deposit")
    print("3 = Withdraw")
    print("4 = Cancel\n")
    option_input = input("Please enter your option: ")
    
    # Validate input
    if option_input.isdigit():
        return int(option_input)
    else:
        print("\nError: Invalid option. Please enter a number between 1 and 4.")
        return None
