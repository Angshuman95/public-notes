---
title: Input_and_Output_in_Python
date: 2024-07-26
time: 20:38
status: DONE
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Input and Output in Python

[[000_Index_DS_Algo]]

- Create two files `input.txt` and `output.txt`, for input and output.
	- For error use `error.txt`
- Within _script_ use the following at the top:

```python
import sys

sys.stdin = open(r"./input.txt", "r")
sys.stdout = open(r"./output.txt", "w")
sys.stderr = open(r"./error.txt", "w")
```

- For input and output use the following:

```python
p = input()           # Read entire line
print(p)              # print to stdout
sys.stderr.write(p)   # print to stderr
```

- To input a sequence of numbers from stdin to an array use

```python
# assuming numbers are separated by ,
arr = [int(ch.strip()) for ch in input().split(",")]
```

---
### Related Pages

- [[Input_and_Output_in_CPP]]

---
### References

1. 
