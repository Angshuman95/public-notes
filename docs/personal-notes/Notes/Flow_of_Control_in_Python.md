---
title: Flow_of_Control_in_Python
date: 2024-07-27
time: 19:21
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Flow of Control in Python

[[000_Index_DS_Algo]]

## If statements

- We have `if`, `elif`, `else`

```python
if 2 + 2 < 3:
    print("Test - 01")
elif 3+2 > 6:
    print("Test - 02")
else:
    print("Test - 03")
```

- Note the colon `:` at the end.

- Equality operators like  `!= , >, <, >=, ==, <=` work the same.

- The value of true is `True` (capital T) and false is `False` (capital F).

## switch - case (Only applicable in Python 3.10)

- In place of switch we have the `match` keyword

- `_` - default case

```python
match term:
    case pattern-1:
        action-1
    case pattern-2:
        action-2
    case pattern-3:
        action-3
    case _:
        action-default
```

## `while` loop

- `while` works same. Note the `:` at end.

```python
x = 1                   # initialize
while x < 128:          # condition
    print(x, end=" ")
    x = x * 2           # update
```

### `break` and `continue`

-  `break` and `continue` works as usual.

## `for` loop

- Note [[Operation_on_Python_Collections#Iteration]]

## Exception handling

- We use `except` to catch an exception.

- Use `raise` to manually throw exceptions

```python
x = "not a number"
try:
    f = float(x)        # or `raise ValueError("An Error")`
except ValueError:      # catch if it's ValueError
    print("You can't do that!")
```

- `Exception` is the wildcard that catches everything.

```python
try:
    raise Exception('spam', 'eggs')
except Exception as err:
    print(type(err))    # <class 'Exception'>
    print(err.args)     # ('spam', 'eggs')
    print(err)          # ('spam', 'eggs') 
```



---
### Related Pages

- [[Functions_in_Python]]

---
### References

1. [Python switch case example](https://www.freecodecamp.org/news/python-switch-statement-switch-case-example/)
