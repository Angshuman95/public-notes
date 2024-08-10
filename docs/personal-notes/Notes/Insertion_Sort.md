---
title: Insertion_Sort
date: 2024-07-31
time: 10:40
status: PROG
aliases: 
tags:
  - ds-algo/basics/sorting
---
# Insertion Sort

[[000_Index_DS_Algo]]

## Insertion Sort algorithm

- Assume the given array to be of two sub-arrays -

    - the _left_ sub-array being _sorted_ always
    - the right one being unsorted

- The first element being the only element in the left sub-array is thus always sorted.

- Start from second element. Put it in the correct position in the sorted part.

- Continue till last element.

### Notes on algorithm

- Since the left half is always sorted - for the element at $j$
	- Check if the number before it is greater (or smaller). If so we need to position $jth$ element in proper place.
	- We swap `arr[j]` with `arr[j - 1]`. We decrement $j$.
	- We continue this until `j > 0` _and_ $arr[j]$ is smaller than it's previous element.
		- When the above condition fails - that means the left sub-array is now sorted.
- We see that $j$ starts from $ith$ element and goes upto second element and not the first element.
	- This is so as we check `arr[j] < arr[j - 1]`. if `j = 0` then `arr[-1]` will not be correct.

## Insertion Sort in Ascending order

- Python Implementation

```python
def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        j = i
        while j > 0 and arr[j] < arr[j - 1]:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    insertion_sort(arr)
    print(arr)
```

- C++ Implementation

```cpp
void insertion_sort(std::vector<int> &arr) {
    size_t n = arr.size();
    for (size_t i = 1; i < n; ++i) {
        for (size_t j = i; j > 0 && arr[j] < arr[j - 1]; --j) {
            swap(arr[j], arr[j - 1]);
        }
    }
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    insertion_sort(arr);

    print_vector(arr);

    return 0;
}
```

## Insertion Sort in descending order

- Python Implementation

```python
def insertion_sort_desc(arr):
    n = len(arr)
    for i in range(1, n):
        j = i
        while j > 0 and arr[j] > arr[j - 1]:
            arr[j], arr[j - 1] = arr[j - 1], arr[j]
            j -= 1


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    insertion_sort_desc(arr)
    print(arr)
```

- C++ Implementation

```cpp
void insertion_sort_desc(std::vector<int> &arr) {
    size_t n = arr.size();
    for (size_t i = 1; i < n; ++i) {
        for (size_t j = i; j > 0 && arr[j] > arr[j - 1]; --j) {
            swap(arr[j], arr[j - 1]);
        }
    }
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    insertion_sort_desc(arr);

    print_vector(arr);

    return 0;
}
```

## Time and Space Complexities

### Time Complexity

- $O(n^2)$ 
	- (where N = size of the array), for **worst** and **average** cases.
- $O(n)$
	- for *best* case.

- **Reason:** 
	- The outer loop, say i, is running from $1$ to $n-1$ i.e. $n - 1$ times,
	- for each $i$, the inner loop $j$ runs from $i$ to $1$ i.e. $i$ times. 
		- For, $i = 1$, the inner loop runs $1$ time, 
		- for $i = 2$, the inner loop runs 2 times, and so on. 
	
	- So, the total steps will be approximately the following: 
		- $1 + 2 + 3 +……+ (n-2) + (n-1)$. 
	- The summation is approximately the sum of the first n natural numbers i.e. $(n*(n+1))/2$.
	- The precise time complexity will be $O(n^2/2 + n/2)$. 
	- So Time Complexity is $O(n^2)$. Here the value of n is N i.e. the size of the array.

    - For best case the array is already sorted - thus the inner loop body
      never executes.

### Space Complexity

- $O(1)$


---
## Related Pages

- 

---
## References

1. [[Cpp_helper_snippets]]
