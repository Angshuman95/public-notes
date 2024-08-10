---
id: Merge_Sort
aliases: []
tags:
  - ds-algo/basics/sorting
date: "2024-08-04"
status: PROG
time: 19:56
title: Merge_Sort
---
# Merge Sort

[[000_Index_DS_Algo]]

## Merge Sort algorithm

- The array is to be broken recursively from the middle into sub-arrays until subarrays are sorted.
	- All of the subarrays are sorted when each subarray is of length $1$.

- Now we recursively merge the individual arrays back.

### Notes on implementation

- We use the index of the array to break it into sub-array hypothetically.
	- We break the array in the middle. Left half is one array. The right half is the other one.

### Notes on `merge` function

- We create an auxiliary array to store the sorted elements.

- We start two pointers one from starting of left subarray, another from right subarray. 
    - We compare individual pointed elements. 
    - Based on the order we place them in the auxiliary array.

- When either left or right subarray is exhausted, we copy remaining elements from the other subarray 
    to auxiliary array. Note individual subarrays are sorted by definition.

- Now we copy the elements from auxiliary array back to main array.

## Merge Sort in ascending order

- Python Implementation

```python
def merge(arr, left, mid, right):
    aux_arr = []
    l = left
    r = mid + 1
    while l <= mid and r <= right:
        if arr[l] <= arr[r]:
            aux_arr.append(arr[l])
            l += 1
        else:
            aux_arr.append(arr[r])
            r += 1
    while l <= mid:
        aux_arr.append(arr[l])
        l += 1
    while r <= right:
        aux_arr.append(arr[r])
        r += 1

    for i in range(left, right + 1):
        arr[i] = aux_arr[i - left]


def merge_sort(arr, left, right):
    if left >= right:
        return
    mid = left + int((right - left) / 2)
    merge_sort(arr, left, mid)
    merge_sort(arr, mid + 1, right)
    merge(arr, left, mid, right)


if __name__ == "__main__":
    input_arr = [int(ch.strip()) for ch in input().split(",")]
    merge_sort(input_arr, 0, len(input_arr) - 1)
    print(input_arr)
```

- C++ Implementation

```cpp
void merge(std::vector<int> &arr, size_t left, size_t mid, size_t right) {
    std::vector<int> aux_arr;
    size_t l = left, r = mid + 1;
    while (l <= mid && r <= right) {
        if (arr[l] < arr[r]) {
            aux_arr.push_back(arr[l]);
            l++;
        } else {
            aux_arr.push_back(arr[r]);
            r++;
        }
    }

    while (l <= mid) {
        aux_arr.push_back(arr[l++]);
    }

    while (r <= right) {
        aux_arr.push_back(arr[r++]);
    }

    for (size_t i = 0; i < aux_arr.size(); i++) {
        arr[left + i] = aux_arr[i];
    }
}

void merge_sort(std::vector<int> &arr, size_t left, size_t right) {
    if (left >= right) {
        return;
    }
    size_t mid = left + (right - left) / 2;
    merge_sort(arr, left, mid);
    merge_sort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    merge_sort(arr, 0, arr.size() - 1);

    print_vector(arr);

    return 0;
}
```

## Merge Sort in Descending Order

- Python Implementation

```python
def merge_desc(arr, left, mid, right):
    aux_arr = []
    l = left
    r = mid + 1
    while l <= mid and r <= right:
        if arr[l] >= arr[r]:
            aux_arr.append(arr[l])
            l += 1
        else:
            aux_arr.append(arr[r])
            r += 1
    while l <= mid:
        aux_arr.append(arr[l])
        l += 1
    while r <= right:
        aux_arr.append(arr[r])
        r += 1

    for i in range(left, right + 1):
        arr[i] = aux_arr[i - left]


def merge_sort_desc(arr, left, right):
    if left >= right:
        return
    mid = left + int((right - left) / 2)
    merge_sort_desc(arr, left, mid)
    merge_sort_desc(arr, mid + 1, right)
    merge_desc(arr, left, mid, right)


if __name__ == "__main__":
    input_arr = [int(ch.strip()) for ch in input().split(",")]
    merge_sort_desc(input_arr, 0, len(input_arr) - 1)
    print(input_arr)
```

- C++ Implementation

```cpp
void merge_desc(std::vector<int> &arr, size_t left, size_t mid, size_t right) {
    std::vector<int> aux_arr;
    size_t l = left, r = mid + 1;
    while (l <= mid && r <= right) {
        if (arr[l] > arr[r]) {
            aux_arr.push_back(arr[l]);
            l++;
        } else {
            aux_arr.push_back(arr[r]);
            r++;
        }
    }

    while (l <= mid) {
        aux_arr.push_back(arr[l++]);
    }

    while (r <= right) {
        aux_arr.push_back(arr[r++]);
    }

    for (size_t i = 0; i < aux_arr.size(); i++) {
        arr[left + i] = aux_arr[i];
    }
}

void merge_sort_desc(std::vector<int> &arr, size_t left, size_t right) {
    if (left >= right) {
        return;
    }
    size_t mid = left + (right - left) / 2;
    merge_sort_desc(arr, left, mid);
    merge_sort_desc(arr, mid + 1, right);
    merge_desc(arr, left, mid, right);
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    merge_sort_desc(arr, 0, arr.size() - 1);

    print_vector(arr);

    return 0;
}
```

## Time and Space Complexity

### Time Complexity

- $O(nlog(n))$

    - **Reason:** At each step, we divide the whole array, for that $log(n)$. We assume
        $n$ steps are taken to get sorted array, for each division so overall time 
        complexity will be $nlog(n)$.

### Space Complexity

- $O(n)$

    - **Reason:** We are using a temporary array to store elements in sorted order.

---
## Related Pages

- 

---
## References

1. [[Cpp_helper_snippets]]
