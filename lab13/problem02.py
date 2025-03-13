import re

text1 = "Hello, world! Welcome to regex."
text2 = "Greetings! Hello, how are you?"
word = "Hello"

match1 = re.match(word, text1)
if match1:
    print("Match1 found:", match1.group())
else:
    print("Not found")

search1 = re.search(word, text1)
if search1:
    print("Search1 found:", search1.group())
else:
    print("Not found")

match2 = re.match(word, text2)
if match2:
    print("Match2 found:", match2.group())
else:
    print("Not found")

search2 = re.search(word, text2)
if search2:
    print("Search2 found:", search2.group())
else:
    print("Not found")