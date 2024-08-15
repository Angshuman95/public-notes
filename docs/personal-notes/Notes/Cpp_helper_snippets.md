---
id: Cpp_helper_snippets
aliases: []
tags:
  - ds-algo/lang-basic/cpp
date: "2024-07-29"
status: PROG
time: 16:31
title: Cpp_helper_snippets
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

## Class to Redirect Input and Output to files

```cpp
#include <fstream>

class IORedirector {
private:
    std::unique_ptr<std::streambuf> m_cin_buffer;
    std::unique_ptr<std::streambuf> m_cout_buffer;
    std::ifstream m_in;
    std::ofstream m_out;

public:
    IORedirector(const std::string& input_file, const std::string& output_file) {
        if (!input_file.empty()) {
            m_in.open(input_file);
            if (m_in.is_open()) {
                m_cin_buffer.reset(std::cin.rdbuf(m_in.rdbuf()));
            }
        }

        if (!output_file.empty()) {
            m_out.open(output_file);
            if (m_out.is_open()) {
                m_cout_buffer.reset(std::cout.rdbuf(m_out.rdbuf()));
            }
        }
    }

    ~IORedirector() {
        if (m_cin_buffer) std::cin.rdbuf(m_cin_buffer.release());
        if (m_cout_buffer) std::cout.rdbuf(m_cout_buffer.release());
    }
};

// Usage
int main() {
    IORedirector io_red("input.txt", "output.txt");

    // code goes here ...

    return 0;
}
```

## Makefile

```makefile
CXX = clang++
CXXFLAGS = -std=c++17 -g -Wall -Wextra -pedantic
TARGET = main
SRCS = main.cpp helper.cpp
OBJS = $(SRCS:.cpp=.o)

.PHONY: all clean

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $@ $^

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -rf $(OBJS) $(TARGET) *.dSYM *.out

run: $(TARGET)
	./$(TARGET)
```

### Usage of Makefile

- To build the project use `make`.

- To build and run (or run if already built) use `make run`.

- To clean the project use `make clean`.


---
## Related Pages

- 

---
## References

1. 
