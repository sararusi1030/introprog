def determine_grades(mark):
    if mark >= 70:
        return "A"
    elif mark >= 60:
        return "B"
    elif mark >= 50:
        return "C"
    elif mark >= 40:
        return "D"
    elif mark >= 30:
        return "E"
    elif mark >= 20:
        return "F"
    else:
        return "Please enter a valid number between 20 and 100"

mark = float(input("Enter the student's grade: "))

print(determine_grades(mark))
