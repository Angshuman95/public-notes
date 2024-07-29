---
title: Modules_Imports_in_Python
date: 2024-07-27
time: 20:32
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Modules & Import in Python

[[000_Index_DS_Algo]]

- A single `.py` file is a Module. To import one module into another use `import` keyword. The name of a module, by default, is the name of the file (without the `.py` extension)

- When we import a module - the code within the module is executed. 

- Assume two files `main.py`  and `lib.py` .  We are running `main.py`.

```python
# In file lib.py
def f(x):
    return 2 * x + 3

def g(x):
    return x ** 2 - 1

# In file main.py
import lib

def f(x):
    return x - 1

print(lib.f(1))          # 5
print(f(1))              # 0
print(lib.g(4))          # 15
```

- We see that we have `f` defined in `main` as well as `lib`. To use `lib` we need to use `lib.f()`.

- The module that is _being run_ is called the _script_. `main` is the script in the above example.

- Every module has attributes. `__name__` is one of them.
	- For _script_ file `__name__ = "__main__"`
	- For other modules `__name__ = "lib"` - No `__` here.

	- This can be helpful if we want to run something only from the file that is being run.

- Modules are only executed the first time they are imported. If  we import the same module twice, the namespace exists and can be accessed for the second one.

## Import variations

### `from modulename import thethingIwanted`

- This brings the new name `thethingIwanted` into the current namespace. 
	- It doesn’t need to be preceded by `modulename` and a dot.

### `from modulename import *`

- Every name defined in the module will be accessible in the current namespace. 
	- It doesn’t need to be preceded by `modulename` and a dot.

### `import numpy as np`

- We can write `np.array` instead of `numpy.array`. This can help avoid naming conflicts.

---
### Related Pages

- 

---
### References

1. 
