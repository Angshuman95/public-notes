---
title: Dictionaries_in_Python
date: 2024-07-26
time: 21:31
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Dictionaries in Python

[[000_Index_DS_Algo]]
[[Collections_in_Python]]

- The name of the class for dictionaries is `dict`.

- Collection of <u>key value pairs</u>. The _order_ of the key-value-pairs is _not defined_.

```python
d = dict()          # Empty Dictionary
d[5] = "five"       # key 5 not present - creating one
d[2] = "two"
d["pi"] = 3.1415926

print(type(d))      # <class 'dict'>
print(d)            # {5: 'five', 2: 'two', 'pi': 3.1415926}
print(d["pi"])      # 3.1415926
```

- <u>Keys</u> can be either an atomic type (`int`, `float`, `boolean`), or `string`, or `tuple` - i.e. it <u>has to be immutable</u>.

- If we assign to a key that's not already present in the dictionary -
  it creates a new key (as shown in the above example).

---
### Related Pages

- 

---
### References

1. [Dictionaries-Python_docs](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
