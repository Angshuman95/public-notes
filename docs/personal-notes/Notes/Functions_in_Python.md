---
title: Functions_in_Python
date: 2024-07-27
time: 20:03
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Functions in Python

[[000_Index_DS_Algo]]

- Function is defined as follows:

```python
def fib(n):
    """Print a Fibonacci series up to n.""" # documentation string
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a + b     # technique for swapping a and b
    print()
    
    # returns None
```

- Functions must be defined by `def` keyword.

- Note that `"""` for documentation of functions.

-  Functions are objects.

	- If we define a function twice, even if we change the parameters, the first will be overwritten by the second.

```python
def foo(x):
    return x + 2

def bar(someFunction):
    return someFunction(4)

print(bar(foo))                 # 6
someVariable = foo 
print(bar(someVariable))        # 6
```

- The `return`  statement returns with a value from a function. `return` without an expression argument returns `None`. Falling off the end of a function also returns `None`.

##  Default Arguments

- Default arguments work as usual -

```python
def f(arg="Test"):
    print(arg)

f()            # Test
```

- The default value could be a variable or constant. They are evaluated at the point of function definition in the _defining_ scope.

```python
i = 5

def f(arg=i):
    print(arg)

i = 6
f()              # prints 5
```

---
### Related Pages

- 

---
### References

1. [Python Docs](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
