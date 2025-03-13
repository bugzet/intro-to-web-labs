import re

text = "Call me at 0778-514-312 or at the office line 0512-314-592. For emergencies, dial 0271-828-182."

pattern = r"0\d{3}-\d{3}-\d{3}"

phone_numbers = re.findall(pattern, text)
print("Phone numbers found:", phone_numbers)