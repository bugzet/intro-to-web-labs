name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello, {name}. You are {age} years old.")

a, b, c = map(int, input("Enter three numbers: ").split())
total = a + b + c
average = total / 3
product = a * b * c
print(f"Sum: {total}, Average: {average}, Product: {product}")