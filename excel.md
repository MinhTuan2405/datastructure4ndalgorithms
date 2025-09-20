
## 📊 Nhóm hàm toán học – số học

| Hàm           | Cú pháp                | Ví dụ                  | Kết quả |
| ------------- | ---------------------- | ---------------------- | ------- |
| **SUM**       | `=SUM(A1:A5)`          | Nếu A1\:A5 = 1,2,3,4,5 | 15      |
| **AVERAGE**   | `=AVERAGE(A1:A5)`      |                        | 3       |
| **ROUND**     | `=ROUND(12.345,2)`     |                        | 12.35   |
| **ROUNDUP**   | `=ROUNDUP(12.341,2)`   |                        | 12.35   |
| **ROUNDDOWN** | `=ROUNDDOWN(12.349,2)` |                        | 12.34   |
| **INT**       | `=INT(12.9)`           |                        | 12      |
| **MOD**       | `=MOD(10,3)`           |                        | 1       |
| **POWER**     | `=POWER(2,3)`          |                        | 8       |
| **SQRT**      | `=SQRT(25)`            |                        | 5       |
| **ABS**       | `=ABS(-7)`             |                        | 7       |

---

## 🔎 Nhóm hàm logic

| Hàm     | Cú pháp                    | Ví dụ       | Kết quả |
| ------- | -------------------------- | ----------- | ------- |
| **IF**  | `=IF(A1>=5,"Đạt","Trượt")` | A1=7        | Đạt     |
| **AND** | `=AND(A1>0,B1>0)`          | A1=2, B1=-1 | FALSE   |
| **OR**  | `=OR(A1>0,B1>0)`           | A1=2, B1=-1 | TRUE    |
| **NOT** | `=NOT(A1>5)`               | A1=3        | TRUE    |

---

## 🔤 Nhóm hàm xử lý chuỗi

| Hàm                      | Cú pháp                        | Ví dụ | Kết quả    |
| ------------------------ | ------------------------------ | ----- | ---------- |
| **LEFT**                 | `=LEFT("Excel",2)`             |       | "Ex"       |
| **RIGHT**                | `=RIGHT("Excel",3)`            |       | "cel"      |
| **MID**                  | `=MID("Excel",2,3)`            |       | "xce"      |
| **LEN**                  | `=LEN("Excel")`                |       | 5          |
| **TRIM**                 | `=TRIM("  Xin chào  ")`        |       | "Xin chào" |
| **CONCATENATE / CONCAT** | `=CONCAT("Xin"," ","Chào")`    |       | "Xin Chào" |
| **UPPER**                | `=UPPER("excel")`              |       | "EXCEL"    |
| **LOWER**                | `=LOWER("EXCEL")`              |       | "excel"    |
| **PROPER**               | `=PROPER("xin chào")`          |       | "Xin Chào" |
| **SEARCH**               | `=SEARCH("c","Excel")`         |       | 3          |
| **FIND**                 | `=FIND("c","Excel")`           |       | 3          |
| **REPLACE**              | `=REPLACE("Excel",2,3,"YYY")`  |       | "EYYYl"    |
| **SUBSTITUTE**           | `=SUBSTITUTE("a-b-c","-","_")` |       | "a\_b\_c"  |

---

## 📅 Nhóm hàm ngày giờ

| Hàm       | Cú pháp            | Ví dụ                             | Kết quả                         |
| --------- | ------------------ | --------------------------------- | ------------------------------- |
| **TODAY** | `=TODAY()`         | (giả sử ngày hiện tại 19/09/2025) | 19/09/2025                      |
| **NOW**   | `=NOW()`           |                                   | 19/09/2025 10:30 (giờ hiện tại) |
| **DATE**  | `=DATE(2025,9,19)` |                                   | 19/09/2025                      |

---

