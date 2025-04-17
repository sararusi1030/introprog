def calculate_marks(mark):
    if mark >= 70:
        return "Distinction"
    elif mark >= 60:
        return "Merit"
    elif mark >= 50:
        return "Pass"
    else:
        return "Fail"

input_f = "input.txt"
output_f = "output.txt"

students = {}

with open(input_f, "r") as file:
    for line in file:
        if len(line)>1:
            name, unit, mark, weight = line.strip().split(",")
            mark = float(mark)
            weight = float(weight)

            students[name] = students.get(name, 0) + mark * (weight/100)

with open(output_f, "w") as file:
    for name, total_marks in students.items():
        grades = calculate_marks(total_marks)
        file.write(f"{name},{total_marks},{grades}\n")

print("Operation Completed! Check output file")
