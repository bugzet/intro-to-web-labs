import re

text = "There are 2 apples, 8 oranges, and 32 bananas in the basket."
pattern = r"\d+"

upd_text = re.sub(pattern, "NUMBER", text)
print("Modified Text:", upd_text)