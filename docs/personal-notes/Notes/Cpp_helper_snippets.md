---
title: Cpp_helper_snippets
date: 2024-07-29
time: 16:31
status: PROG
aliases: 
tags:
  - ds-algo/lang-basic/cpp
---
# C++ code snippets

## Split a string

```cpp
template <typename T> std::vector<T> split(const std::string &str, char delim) {
    std::vector<T> tokens;
    std::string token;
    std::istringstream iss(str);

    while (std::getline(iss, token, delim)) {
        std::istringstream converter(token);
        T value;
        converter >> value;

        if (!converter.fail()) {
            tokens.push_back(value);
        }
    }

    return tokens;
}

int main() {
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    std::string str;
    std::getline(std::cin, str);

    std::vector<int> arr = split<int>(str, ',');

    return 0;
}
```

## Print a Vector

```cpp
template <typename T> void print_vector(const std::vector<T> &tokens) {
    std::stringstream output;
    output << "[";
    for (size_t i = 0; i < tokens.size(); ++i) {
        if (i != tokens.size() - 1) {
            output << tokens[i] << ", ";
        } else {
            output << tokens[i];
        }
    }
    output << "]";
    std::cout << output.str();
}
```

## Swap two values

```cpp
template <typename T> void swap(T &a, T &b) {
    T temp = a;
    a = b;
    b = temp;
}
```

---
## Related Pages

- 

---
## References

1. 
