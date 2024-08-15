---
id: Quick_Sort
aliases: []
tags:
  - ds-algo/basics/sorting
date: "2024-08-04"
status: NEW
time: 19:56
title: Quick_Sort
---
# Quick Sort

[[000_Index_DS_Algo]]

## Quick Sort Algorithm

- Choose a <u>pivot</u> element has to from the array.

    - The pivot element could be 
        - the first element
        - the last element
        - any other element based on the implementation.

- Place the pivot element in its correct position in a sorted array such that

    - all elements smaller than the pivot are on the left side of the pivot
    - all elements greater than the pivot are on the right side of the pivot.

    - Now the pivot element is in its correct position.

- Recursively apply the above steps to the left and right sub-arrays.


### Notes on Implementation

- The implementation of quick sort differs on how to place the pivot element
    in its correct position. The following are the popular methods:

    - **Hoare's partition scheme** - Uses two pointers
    - **Lomuto partition scheme** - Uses one pointer
    - **Dutch National Flag algorithm** - Uses three pointers

#### Notes on Hoare's partition scheme

- Consider the first element `arr[left]` as the pivot element.

- Start with 2 pointers one on the left + 1 (`l`) and another on the right (`r`).

- If `arr[l]` is less than the pivot, increment `l`. Continue this until `arr[l]` is 
    greater than the pivot. Stop.

- Now if `arr[r]` is greater than the pivot, decrement `r`. Continue this until `arr[r]` is
    less than the pivot. Stop.

- At this situation `l` and `r` are pointing to elements that are on the wrong side 
    of the pivot. Swap `arr[l]` and `arr[r]`.

- Continue this process until `l` is greater than `r`.

- At the end `r` points to the correct position of the pivot element. Swap `arr[left]` 
    and `arr[r]`.


## Quick Sort in ascending order

- Python Implementation (Hoaare's partition scheme)

```python
def partition_hoare(arr, left, right):
    pivot = arr[left]
    l = left + 1
    r = right
    while l <= r:
        if arr[l] <= pivot:
            l += 1
        elif arr[r] >= pivot:
            r -= 1
        else:
            arr[l], arr[r] = arr[r], arr[l]
    arr[left], arr[r] = arr[r], arr[left]

    return r


def quick_sort(arr, left, right):
    if left >= right:
        return

    partiton_index = partition_hoare(arr, left, right)
    quick_sort(arr, left, partiton_index - 1)
    quick_sort(arr, partiton_index + 1, right)


if __name__ == "__main__":
    input_arr = [int(ch.strip()) for ch in input().split(",")]
    quick_sort(input_arr, 0, len(input_arr) - 1)
    print(input_arr)
```

- C++ Implementation (Hoare's partition scheme)

```cpp
size_t partition_hoare(std::vector<int> &arr, size_t left, size_t right) {
    size_t l = left + 1, r = right;

    int pivot = arr[left];

    while (l <= r) {
        if (arr[l] <= pivot) {
            l++;
        } else if (arr[r] > pivot) {
            r--;
        } else {
            std::swap(arr[l], arr[r]);
        }
    }

    std::swap(arr[left], arr[r]);

    return r;
}

void quick_sort(std::vector<int> &arr, size_t left, size_t right) {
    if (left >= right) {
        return;
    }

    size_t partition_index = partition_hoare(arr, left, right);
    if (partition_index != 0) {                     // Prevents underflow
        quick_sort(arr, left, partition_index - 1);
    }
    quick_sort(arr, partition_index + 1, right);
}

int main() {
    IORedirector io_red("input.txt", "output.txt");

    std::string input;
    std::getline(std::cin, input);
    std::vector<int> input_arr = split<int>(input, ',');

    quick_sort(input_arr, 0, input_arr.size() - 1);
    print_vector(input_arr);
    std::cout << std::endl;

    return 0;
}
```

## Quick Sort in descending order

- Python Implementation (Hoare's partition scheme)

```python
def partition_hoare_desc(arr, left, right):
    pivot = arr[left]
    l = left + 1
    r = right
    while l <= r:
        if arr[l] >= pivot:
            l += 1
        elif arr[r] <= pivot:
            r -= 1
        else:
            arr[l], arr[r] = arr[r], arr[l]
    arr[left], arr[r] = arr[r], arr[left]

    return r


def quick_sort_desc(arr, left, right):
    if left >= right:
        return

    partiton_index = partition_hoare_desc(arr, left, right)
    quick_sort_desc(arr, left, partiton_index - 1)
    quick_sort_desc(arr, partiton_index + 1, right)


if __name__ == "__main__":
    input_arr = [int(ch.strip()) for ch in input().split(",")]
    quick_sort_desc(input_arr, 0, len(input_arr) - 1)
    print(input_arr)
```

- C++ Implementation (Hoare's partition scheme)

```cpp
size_t partition_hoare_desc(std::vector<int> &arr, size_t left, size_t right) {
    size_t l = left + 1, r = right;

    int pivot = arr[left];

    while (l <= r) {
        if (arr[l] >= pivot) {
            l++;
        } else if (arr[r] <= pivot) {
            r--;
        } else {
            std::swap(arr[l], arr[r]);
        }
    }

    std::swap(arr[left], arr[r]);

    return r;
}

void quick_sort_desc(std::vector<int> &arr, size_t left, size_t right) {
    if (left >= right) {
        return;
    }

    size_t partition_index = partition_hoare_desc(arr, left, right);
    if (partition_index != 0) {
        quick_sort_desc(arr, left, partition_index - 1);
    }
    quick_sort_desc(arr, partition_index + 1, right);
}

int main() {
    IORedirector io_red("input.txt", "output.txt");

    std::string input;
    std::getline(std::cin, input);
    std::vector<int> input_arr = split<int>(input, ',');

    quick_sort_desc(input_arr, 0, input_arr.size() - 1);
    print_vector(input_arr);
    std::cout << std::endl;

    return 0;
}
```

## Time and Space Complexity

### Time Complexity

- **Best Case** - $O(nlog(n))$
- **Average Case** - $O(nlog(n))$
- **Worst Case** - $O(n^2)$

- **Reason:** 
    - At each step, we divide the whole array, for that it takes $logN$. 
    - $n$ steps are taken for the part where find correct pivot index. 
    - So time complexity will be $N \times log(N)$.

    - There can be 2 cases:

        - _Worst Case_ – This happens specifically when
            - The array is in descending order and we want it to sort in ascending 
                order.
            - While doing so we are choosing the first or last element as the pivot.
                This results in one subarray with no elements and another with all 
                elements all the time.


        - _Best Case_ - This case occurs when the pivot is the middle element or 
            near to middle element of the array.

### Space Complexity

- $O(1) + O(N)$ - We require $O(N)$ for auxiliary stack space in the worst case.

---
## Related Pages

- [[Merge_Sort]]

---
## References

1. [[Cpp_helper_snippets]]
