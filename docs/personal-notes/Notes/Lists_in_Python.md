---
title: Lists_in_Python
date: 2024-07-26
time: 21:25
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Lists in Python

[[000_Index_DS_Algo]]
[[Collections_in_Python]]

- **Ordered** sequence of objects - which can have _any types_. There are no arrays with pre-defined data-type in python.

```python
L = [1, 2, "test"]

print(type(L))   # <class 'list'>
```

- The content of a list like strings can be accessed using a _zero based index_. A <u>negative index signifies counting from reverse</u>.

> NOTE
> The last element is  `L(-1)` and **NOT `L(-0)`**.

- `L.append(100)` - Appends at the back of list.

- Lists are **not** immutable. We can update existing values.

- An empty list is created as (`len` measures length of any sequence)

```python
L = []
print(len(L))   # 0
```

- A list of length `n` initialised with say 0 (it could be any thing) can
  be declared as:

```python
L = [0] * n
```


---
### Related Pages

- [[Strings_in_Python]]

---
### References

1. [Lists-Python Docs](https://docs.python.org/3/tutorial/introduction.html#lists)
2. [More_Lists-Python Docs](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)
