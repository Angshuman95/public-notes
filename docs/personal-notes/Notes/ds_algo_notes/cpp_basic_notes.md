---
id: cpp_basic_notes
aliases: []
tags: []
date: "2024-07-23"
status: PROG
time: 07:44
title: cpp_basic_notes
---
# CPP Notes for DSA

## Input and Output

- Create two files `input.txt` and `output.txt`, for input and output.
- Within `main` use the following:

```cpp
int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

	// ... Other code here
}
```


## Data Types

### Strings and `getline`

- To use strings use `#include<string>`.
- To read a single line from input at a time use

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string str;
    getline(cin, str);

	// .. Other code here
}
```


## Arrays

- To define a 2D array use `int arr[3][5]`.
- 3 - No of rows. 5 - no of columns.
- It's stored linearly.
	- First entire column of row 1 is stored.
	- Next entire column of row 2 is stored and so on.


---

### Related Pages

-

---

### References

1.
