import csv

csv_filename = 'people.csv'
data = [
    ["Name", "Age", "City"],
    ["Alice", "30", "New York"],
    ["Bob", "25", "Los Angeles"],
    ["Charlie", "35", "Chicago"]
]

with open(csv_filename, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(data)

print(f"Data has been written to {csv_filename}")

print("Reading data from the CSV file:")
with open(csv_filename, 'r', newline='') as csvfile:
    reader = csv.reader(csvfile)
    for row in reader:
        print(row)
