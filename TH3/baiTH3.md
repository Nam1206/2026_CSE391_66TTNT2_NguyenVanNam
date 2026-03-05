
## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console?
- hello from Javascript! từ main.js
- Live reload enabled - từ extension Live server
> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?
- khi trình duyệt tải trang, gặp thẻ `<script src="main.js">` tự động thực thi file main.js. Lệnh console.log() chạy in ra thông báo trong Devtools console

---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)
- JavaScript chạy cả trên trình duyệt và server
> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: xác định nội dung văn bản, hình ảnh, tiêu đề và các liên kết sẽ nằm ở đâu
> - CSS: giúp trang web đẹp hơn bằng các quy định màu sắc, font chữ, bố cục và các hiệu ứng khác
> - JavaScript: tạo ra các tương tác động như nhấn nút hiện menu, kiểm tra dữ liệu form hoặc cập nhật nội dung mà không cần tải lại trang

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
> - Kết quả `typeof age` là gì?
- number
> - Kết quả `typeof name` là gì?
- string
> - Kết quả `typeof isStudent` là gì?
- boolean
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: kiểu dữ liệu số dùng tính toán toán học
>   - `string` là: kiểu dữ liệu chuỗi kí tự ( văn bản), đc đặt trong ngoặc kép hoặc đơn
>   - `boolean` là: kiểu dữ liệu logic chỉ nhận 1 trong 2 giá trị duy nhất true hoặc false

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin?
- Xin chào, mình là Nam, năm nay mình 20 tuổi
> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?
- quên dấu ';' chương trình vẫn chạy bình thường
- quên dấu '+' : trình duyệt báo lỗi cú Uncaught syntaxError: missing, dòng log không hiện 
---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?
- chỉ cần gõ lệnh như 1+1 vào console và nhấn enter là máy tính thực thi 
> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?

---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: giỏi
> b) Nếu `score = 6`, em dự đoán console sẽ in: trung bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: giỏi
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: trung bình

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?
- khi giá trị biến score >=8
> - Khi nào chương trình in `"Yếu"`?
- khi giá trị biến score <5
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):
- Lệnh if giống như biển báo đầu tiên: nếu có điều kiện đúng thì đi luôn theo hướng biển đó 
- Lệnh else if là các biển báo phụ tiếp theo: chỉ đi theo biển này nếu biển đầu tiên không phù 
- Lệnh else là lối đi cuối cùng: lựa chọn cuối cùng khi không thỏa mán bất kì điều kiện nào phía 

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: tên gọi gợi nhớ dùng để gọi hàm thực thi công việc khi cần
>   - Tham số (parameters): các biến đại diện nằm trong ngoặc đơn dùng để nhận dữ liệu dầu vào từ bên ngoài truyền vào hàm
>   - Thân hàm (body): chứa các câu lệnh thực hiện logic hoặc tính toán cụ thể
>   - Giá trị trả về (return): kết quả sau khi xử lí 
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?
- tái sử dụng: chỉ cần viết code tính 1 lần
- code gọn gàng, dễ nhìn, dễ chỉnh sửa

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
- tìm thẻ `<p>` có id là status
> - Sự kiện `"click"` xảy ra khi nào?
- sự kiện xảy ra khi người dùng nhấn chuột vào phần tử
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?
- nội dung văn bản của thẻ `<p id="status">` sẽ thay đổi từ " chưa có tương tác" thành "Xin chào! Đây là nội dung được thay đổi bằng JavaScript."
---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
- có thể đổi sang màu khác (như `lightblue`, `lightpink`)
> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.
- thay đổi font size của trang:
```js
document.body.style.fontSize = "24px";
---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`?
- với `input`: sự kiện xảy ra ngay lập tức mỗi khi giá trị trong ô nhập thay đổi
> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?
- khi xóa hết nội dung ô input, dòng `greeting` hiển thị : `Xin chào, !`

---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
>  Khi một trang web tải xong, trình duyệt sẽ tạo ra một cấu trúc dạng cây biểu diễn tài liệu HTML. Mỗi phần của tài liệu là một nút trong cây

> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
> `statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";` dòng này truy cập vào thuộc tính textContent của đối tượng statusE1 và gán cho nó 1 giá trị văn bản 

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
-->`begin.`
2. Sau khi nhấn “Chào”.
--> `chao.png`
3. Sau khi đổi nền sang màu đỏ.
--> `nen.png`
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.
--> `ten.png`

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?
--> `Cả hai đoạn code đều có cùng một mục đích: Lắng nghe hành động của người dùng (sự kiện click) và thay đổi nội dung hiển thị trên trang web (thao tác DOM). Kết quả cuối cùng người dùng nhìn thấy là hoàn toàn như nhau.`

> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
--> `document.getElementById `: phải chỉ định rõ ràng cách tìm phần tử (theo ID, theo Class, hay theo Tag)
--> `$("#id") `: Sử dụng chung một cú pháp "bọc" trong dấu $()
-->` addEventListener` : yêu cầu viết tên sự kiện (như 'click') và một hàm thực thi
--> `.on` : có thể xử lý được cả những phần tử chưa tồn tại (được thêm vào sau bằng JS)

> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. Đơn giản hóa lập trình JavaScript: Giúp thực hiện các tác vụ phổ biến như thao tác DOM (thay đổi nội dung/giao diện), xử lý sự kiện (click, hover), và tạo hiệu ứng hoạt hình (animations) bằng những dòng code ngắn gọn hơn nhiều so với JavaScript thuần.
>   2. Tự động giải quyết các vấn đề khác biệt về kỹ thuật giữa các trình duyệt khác nhau và làm cho việc gửi/nhận dữ liệu từ máy chủ trở nên dễ dàng và ổn định

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
--> jquery và cách js có thể tìm chính xác phần tử cần xử lí
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)? --> `đổi theme`
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu  [ ] Tạm ổn  [x] Khá rõ
>    - If/else \& hàm:       [ ] Chưa hiểu  [ ] Tạm ổn  [x] Khá rõ
>    - DOM \& sự kiện:       [ ] Chưa hiểu  [x] Tạm ổn  [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```

