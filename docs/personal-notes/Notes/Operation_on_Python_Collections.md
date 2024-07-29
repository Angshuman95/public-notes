---
title: Operation_on_Python_Collections
date: 2024-07-26
time: 21:33
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/py
---
# Operations on Collections in Python

[[000_Index_DS_Algo]]
[[Collections_in_Python]]

## Length

- To get the length of any collection use `len()`

```python
print(len(s))       # 2
```

## Slicing (For `list`, `tuple`, and `string`)

- `slice` is only defined when the type has a fixed ordering.

- `slice` will start with the first index and proceed up to <u>but not including the last index</u>.

- Negative index count backwards from the end.

- If we don't mention the first index  - starts from index `0`.

- Leaving the last index - will continue till last.

- Slicing **creates a new sequence**. Thus for a big collection it is not advisable to use `slice`.

```python
a = "a string"
b = ["my", "second", "favorite", "list"]
c = (1, 2, 3, "tuple")
print(a[3:7])       # trin
print(a[1:-2])      # ' stri'
print(b[1:])        # ['second', 'favorite', 'list']
print(c[:2])        # (1, 2)
```

## Iteration

- Iterating with a `for` loop

-  Note the syntax

```python
for obj in Objects
```

```python
mylist = [1, 3, 5]
mytuple = (1, 2, "skip a few", 99, 100)
myset = {"a", "b", "z"}
mystring = "abracadabra"
mydict = {"a": 96, "b": 97, "c": 98}

for item in mylist:
    print(item, end=" ")            # 1 3 5

for item in mytuple:
    print(item, end=" ")            # 1 2 skip a few 99 100

for element in myset:
    print(element, end=" ")         # z a b

for character in mystring:
    print(character, end=" ")       # a b r a c a d a b r a

for key in mydict:
    print(key, end=" ")             # a b c

for key, value in mydict.items():
    print(key, value, end=" ")      # a 96 b 97 c 98

for value in mydict.values():
    print(value, end=" ")           # 96 97 98
```

- Use the function `range()` to represent a sequence a numbers.

```python
for i in range(5):
    print(i, end=" ")               # 0 1 2 3 4

for i in range(2, 5):
    print(i, end=" ")               # 2 3 4
```

> **NOTE**
>  `range()` - starting index starts from index itself, ending index is one last number before
>   the mentioned number as shown in the example.

---
### Related Pages

- [[Flow_of_Control_in_Python]]

---
### References

1. 
