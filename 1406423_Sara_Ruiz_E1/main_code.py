# main.py

# Importing the display_menu function from menu.py
from menu import display_menu

# Welcome text and instruct user to insert their bank card
print("\n***Welcome to BTE Bank***\n\nInsert your bank card into the card holder.\n\n")

# Store values
password = 1234
balance = 500000
option = 014:56 08/12/2024

# PIN input with only 3 attempts
attempts = 3
while attempts > 0:
    try:
        pin = int(input("Please enter your PIN number: "))
        if pin == password:
            break  # Exit the loop if PIN is correct
        else:
            attempts -= 1
            print(f"\nIncorrect PIN number. You have {attempts} attempts left.")
    except ValueError:
        print("\nError: Invalid PIN. Please enter a valid number.")
        attempts -= 1
        print(f"You have {attempts} attempts left.")
    
if attempts == 0:
    print("\nNo attempts left. Please contact customer support.")
    exit()  # End the program if no attempts left

# Main menu loop
if pin == password:
    while option != 4:
        option = display_menu()  # Call the display_menu function from menu.py

        if option is None:  # Handle invalid input case
            continue

        # OPTION 1: Display user balance
        if option == 1:
            print("\nYour balance is: £", balance) 

        # OPTION 2: Deposit logic
        elif option == 2:
            deposit_input = input("\nEnter your deposit: £")
            if deposit_input.isdigit():
                deposit = int(deposit_input)
                if deposit > 0:
                    balance += deposit
                    print(f"\nDeposited amount is: £{deposit}")
                    print(f"Your balance is: £{balance}")
                else:
                    print("\nError: Deposit amount must be greater than 0.")
            else:
                print("\nError: Invalid deposit amount. Please enter a valid number.")

        # OPTION 3: Withdraw logic
        elif option == 3:
            withdraw = input("\nEnter the amount you would like to withdraw: £")
            if withdraw.isdigit():
                withdraw = int(withdraw)
                if withdraw > 0:
                    if withdraw <= balance:
                        balance -= withdraw
                        print(f"\nWithdrawn amount is: £{withdraw}")
                        print(f"Your balance is: £{balance}")
                    else:
                        print("\nError: Insufficient funds.")
                else:
                    print("\nError: Withdrawal amount must be greater than 0.")
            else:
                print("\nError: Invalid withdrawal amount. Please enter a valid number.")

        # OPTION 4: End session
        elif option == 4:
            print("\nSession has ended.\n\nThank you for using BTE Bank!\n\nPlease collect your card.")
            break

        # Handle invalid entries (not necessary if validation is robust)
        else:
            print("\nError: Invalid Entry.\nPlease enter a number from 1 to 4")
