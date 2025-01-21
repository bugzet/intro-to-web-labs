# 1
int_input    = int(input("Enter an integer: "))
float_input  = float(input("Enter a floating point number: "))
string_input = input("Enter a string: ")

print(type(int_input))
print(type(float_input))
print(type(string_input))

# 2
text = "123"
num = int(text)
num_float = float(num)

print(type(num))
print(type(num_float))

person = {
    "name": "Karen",
    "age":  27
}
print(person['name'], person["age"])

# 3
my_set = {1, 2, 3}
my_set.add(4)
my_set.remove(2)
print(2 in my_set)