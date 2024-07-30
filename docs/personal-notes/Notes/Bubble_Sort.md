---
title: Bubble_Sort
date: 2024-07-30
time: 10:25
status: PROG
aliases: 
tags:
  - ds-algo/basics/sorting
---
# Bubble Sort

[[000_Index_DS_Algo]]

## Bubble Sort algorithm

   - First, we will _select the range_ of the unsorted array using an outer loop(say i). This range initially starts from $(n - 1)th$ element and goes upto $1st$ element, running _backwards_.

   - Within the loop, we will run inner loop(say j, runs from $0$ to $i-1$).
	   - Within loop $j$ we check `if arr[j] > arr[j + 1]`. If so we swap `arr[j]` and `arr[j + 1]`.
	   - At the end of loop $j$, the largest element is _bubbled_ at the end at position $i$.
	   
   - On the first iteration the entire array ($0$ to $n - 1$) is the range. On the second range is from $0$ to $n - 2$.
	   - After $(n-1)$ iteration, the whole array will be sorted.

### Notes on the algorithm

- $j$ runs upto $(i - 1)th$ element and not upto $(i)th$ element because -
	- $i$ runs from $nth$ element (`i = n - 1`) 
	-  $j$ runs from $0$ to $i - 1$, checking if `arr[j] > arr[j + 1]`. 
		- We see at `j = i - 1` when $i = n$ we check if `arr[n - 1] > arr[n]`.
		- If $j$ ran upto $(i)th$ element we will access beyond array limits.

- $i$ runs upto $2nd$ element (`i = 1`) as the first element will be sorted by default at the last iteration of the inner loop.

## Bubble Sort in Ascending order

- Python Implementation

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1, 1, -1):
        for j in  range(0, i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    bubble_sort(arr)
    print(arr)
```

- C++ Implementation

```cpp
void bubble_sort(std::vector<int> &arr) {
    size_t n = arr.size();
    for (size_t i = n - 1; i > 0; --i) {
        for (size_t j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    bubble_sort(arr);

    print_vector(arr);

    return 0;
}
```

## Bubble Sort in Descending order

- Python Implementation

```python
def bubble_sort_desc(arr):
    n = len(arr)
    for i in range(n - 1, 1, -1):
        for j in  range(0, i):
            if arr[j] < arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    bubble_sort_desc(arr)
    print(arr)
```

- C++ Implementation

```cpp
void bubble_sort_desc(std::vector<int> &arr) {
    size_t n = arr.size();
    for (size_t i = n - 1; i > 0; --i) {
        for (size_t j = 0; j < i; j++) {
            if (arr[j] < arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    bubble_sort_desc(arr);

    print_vector(arr);

    return 0;
}
```

## Time and Space Complexity

### Time Complexity

- $O(n^2)$
	- (where N = size of the array), for the _worst_, and _average_ cases. For bese case see [[#Check for best case]].

- **Reason:** 
	- The outer loop, say $i$, is running from $n-1$ to $1$ i.e. $n - 1$ times,
	- for each $i$, the inner loop $j$ runs from $0$ to $i-1$.
		-  For, $i = n-1$, the inner loop runs n-1 times, 
		- for $i = n-2$, the inner loop runs $n-2$ times, and so on. 
	
	- So, the total steps will be approximately the following: 
		- $(n-1) + (n-2) + (n-3) + ……..+ 3 + 2 + 1$.
	- The summation is approximately the sum of the first n natural numbers i.e. $(n*(n+1))/2$. 
	- The precise time complexity will be $O(n^2/2 + n/2)$.
	- So Time Complexity is $O(n^2)$. Here the value of n is N i.e. the size of the array.

### Space Complexity

- $O(1)$

## Check for best case

- We can apply a check to find if the array is already sorted. If so we break
  out after the first iteration. This **Time Complexity** for _best_ case will be
  $O(N)$.

- Python Implementation

```python
def bubble_sort(arr):
    n = len(arr)
    did_swap = False
    for i in range(n - 1, 1, -1):
        for j in  range(0, i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                did_swap = True
        if not did_swap:
            break


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    bubble_sort(arr)
    print(arr)
```

---
## Related Pages

- [[Cpp_helper_snippets]]

---
## References

1. 
