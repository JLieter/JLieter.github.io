import os

Files = os.walk("./..")
for file in Files:
    print(file)