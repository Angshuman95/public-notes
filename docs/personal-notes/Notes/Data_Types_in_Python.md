---
title: Data_Types_in_Python
date: 2024-07-26
time: 20:57
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Data Types in Python

[[000_Index_DS_Algo]]

## Atomic Data Types

- `int`
- `float`
- `bool`

### To get the type of an object

```python
x = 5
print(type(x))  # <class 'int'>
```

### To type-cast use

```python
number = 73
x = str(number)
print(type(x))  # <class 'str'>

print(float("inf") + 1) # inf
```

- _type_ and _class_ are often used for same meaning.

## Variables and Objects 

- Note the expression -

```python
x = [1, 2, 3]
```

- Here `x` is a variable. `[1, 2, 3]` is an _object_ in memory. An object once created can't be reused.
- We can re-assign `x` to a new object.

```python
x = "Hello"      # [1, 2, 3] is not used. A new object is created
```

- Object can have
    - Identity
    - Type
    - Value
	
-  For atomic types all the above can't be changed. For other types value may or may not be changed. 
	* For ex. _a string is immutable_ - it's value can't be changed, but a list isn't - we can add or delete elements thus changing it's value.

- To check if the variables are referring to same object use `is` keyword.

```python
x = [1, 2, 3]
y = x;
z = [1, 2, 3]

print(x is y)   # True
print(x is z)   # False
print(x == z)   # True
```

- To represent infinity use. (Don't use `int`)

```python
thisworks = float("inf")
```


---
### Related Pages

- [[Input_and_Output_in_Python]]

---

### References

1. 
