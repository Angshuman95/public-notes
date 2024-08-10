---
title: qpdf_commands
date: 2024-08-02
time: 08:39
status: PROG
aliases: 
tags:
  - system
---
# `qpdf` Commands

To create a new PDF by selecting pages 

1. Keeping the TOC intact - 

```sh
qpdf Data\ Structures\ and\ Algorithms\ in\ Python.pdf --pages . 78-108 -- OOPsWithPython.pdf
```

2. Deleting the TOC entirely

```sh
qpdf --empty --pages Data\ Structures\ and\ Algorithms\ in\ Python.pdf 78-108 -- OOPsWithPython.pdf
```

3. Decrypting a password protected pdf

```sh
qpdf --password=<password> --decrypt <Encrypted.pdf> output.pdf
```



---
## Related Pages

- 

---
## References

1. 
