---
title: Selection_Sort
date: 2024-07-29
time: 14:02
status: PROG
aliases: 
tags:
  - ds-algo/basics/sorting
---
# Selection Sort

[[000_Index_DS_Algo]]

## Selection Sort algorithm

- First, we will <u>select the range</u> of the unsorted array using an <u>outer loop</u> (say `i`) that indicates the starting index of the range.
	- Initially `i = 0` to `i = n-1` - we will have the entire array as our range.

- Now, in each iteration, we will <u>select the minimum</u> element from the range of the unsorted array using <u>an inner loop</u>.

- After that, we will <u>swap the minimum element with the first element</u> of the selected range(in step 1).

- Finally, after each iteration, we will find that the array is sorted up to the first index of the range.

### Notes on the algorithm

- Here, after each iteration, the array becomes sorted up to the first index of the range.
	- That is why the starting index of the range increases by 1 after each iteration.

- This increment is achieved by the outer loop. The inner loop (i.e. j) helps to find the minimum element of the range `[i + 1 .. n - 1]`.

- The last index `i = N - 1` will be <u>sorted automatically</u>.

## Selection Sort in Ascending order

- Python implementation

```python
# Bring the minimum number to the begining
def selection_sort(arr):
    n = len(arr)
    for i in range(0, n - 1):   # last number will be sorted
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    selection_sort(arr)
    print(arr)
```

- C++ implementation

```cpp
// Bring minimum to the begining
void selection_sort(std::vector<int> &arr) {
    size_t n = arr.size();
    for (size_t i = 0; i < n - 1; ++i) {   // last number will get sorted
        size_t min_index = i;
        for (int j = i; j < n; ++j) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }

        if (i != min_index) {
            swap(arr[i], arr[min_index]);
        }
    }
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    selection_sort(arr);

    print_vector(arr);

    return 0;
}

```

## Selection Sort in Descending order

- Python implementation

```python
# Bring the maximum number to the begining
def selection_sort_desc(arr):
    n = len(arr)
    for i in range(0, n - 1):
        max_index = i
        for j in range(i + 1, n):
            if arr[j] > arr[max_index]:
                max_index = j
        if max_index != i:
            arr[i], arr[max_index] = arr[max_index], arr[i]


if __name__ == "__main__":
    arr = [int(ch.strip()) for ch in input().split(",")]
    selection_sort(arr)
    print(arr)
```

- C++ implementation

```cpp
// Bring maximum to the begining
void selection_sort_desc(std::vector<int> &arr) {
    size_t n = arr.size();
    for (size_t i = 0; i < n - 1; ++i) {
        size_t max_index = i;
        for (int j = i; j < n; ++j) {
            if (arr[j] > arr[max_index]) {
                max_index = j;
            }
        }

        if (i != max_index) {
            swap(arr[i], arr[max_index]);
        }
    }
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    selection_sort_desc(arr);

    print_vector(arr);

    return 0;
}
```

## Time and Space Complexity

### Time Complexity

- $O(n^2)$ 
	- (where n = size of the array), for the _best_, _worst_, and _average_ cases.

- **Reason:**  
	- The outer loop (say i) is running from 0 to n-2 i.e. n-1 times
	- for each i, the inner loop j runs from i to n-1. 
		- For, i = 0, the inner loop runs n-1 times, 
		- for i = 1, the inner loop runs n-2 times, and so on. 
	
	- So, the <u>total steps</u> will be approximately the following: 
		- $(n-1) + (n-2) + (n-3) + ……..+ 3 + 2 + 1$.
	- The is approximately the sum of the first n natural numbers $(n*(n+1))/2$.
	- The precise time complexity will be $O(n^2/2 + n/2)$.
	- So Time Complexity is $O(n^2)$. Here the value of n is N i.e. the size of the array.

### Space Complexity

- $O(1)$

---
## Related Pages

- [[Cpp_helper_snippets]]

---
## References

1. 
