---
title: Sets_in_Python
date: 2024-07-26
time: 21:28
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Sets in Python

[[000_Index_DS_Algo]]
[[Collections_in_Python]]

- Collection of `objects` **without duplicates** - with <u>no fixed ordering</u>.

- Sets are mutable.

- Sets are defined as:

```python
s = {1, 2, 3}
s = set()           # Empty Set

print(type(s))      # <class 'set'>

s.add(3)
s.add(2)
s.add(2)            # Adding duplicate has no effect

print(s)            # {2, 3}
```

> **NOTE**
> `s = {}` defines an empty `dictionary`


---
### Related Pages

- [[Dictionaries_in_Python]]

---
### References

1. [Sets-Python_Docs](https://docs.python.org/3/tutorial/datastructures.html#sets)
