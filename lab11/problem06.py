company = {
    "employees": [
        {"name": "Alice", "position": "Developer", "salary": 50000},
        {"name": "Bob", "position": "Designer", "salary": 45000}
    ]
}

company["employees"].append({"name": "Charlie", "position": "Manager", "salary": 60000})

for employee in company["employees"]:
    print(employee["name"])
