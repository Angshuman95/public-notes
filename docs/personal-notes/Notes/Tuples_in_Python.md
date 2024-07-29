---
title: Tuples_in_Python
date: 2024-07-26
time: 21:22
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Tuples in Python

[[000_Index_DS_Algo]]
[[Collections_in_Python]]

- *<u>Ordered</u>* sequence of objects like lists but they are **immutable**.

- We can access individual elements with bracket syntax but can't modify
  them.

```python
t = ()          # Empty Tuple
t = (1, 2, "skip a few", 99, 100)
print(type(t))  # <class 'tuple'>
print(t[4])     # 100
```

- For `list` and `tuple` <u>Ordered</u> means that the items have a defined
  order (defined when created), and that order will not change.


---
### Related Pages

- 

---
### References

1. [Tuples-Python Docs](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)
