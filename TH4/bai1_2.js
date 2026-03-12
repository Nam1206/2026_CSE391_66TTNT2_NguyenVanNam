let students = [];          // mảng gốc, không bao giờ bị thay đổi khi lọc/sắp xếp
let filteredStudents = [];  // mảng sau khi áp dụng bộ lọc + tìm kiếm + sắp xếp

// Trạng thái sắp xếp cột Điểm
let sortChieu = ''; 

// ─── HÀM XẾP LOẠI ────────────────────────────────────────────────────────────
function xepLoai(diem) {
  if (diem >= 8.5) return 'Giỏi';
  if (diem >= 7.0) return 'Khá';
  if (diem >= 5.0) return 'Trung bình';
  return 'Yếu';
}

// ─── ÁP DỤNG BỘ LỌC ──────────────────────────────────────────────────────────
// Hàm này được gọi mỗi khi có thay đổi: tìm kiếm, lọc, hoặc sắp xếp
function applyFilters() {
  let keyword  = document.getElementById('timKiem').value.trim().toLowerCase();
  let locLoai  = document.getElementById('locXepLoai').value;

  // Bước 1: Lọc từ mảng gốc students
  filteredStudents = students.filter(function(sv) {
    // Kiểm tra tên có chứa từ khóa không (không phân biệt hoa thường)
    let khopTen  = sv.hoTen.toLowerCase().includes(keyword);

    // Kiểm tra xếp loại có khớp với bộ lọc không
    let khopLoai = (locLoai === 'Tất cả') || (xepLoai(sv.diem) === locLoai);

    return khopTen && khopLoai;
  });

  // Bước 2: Sắp xếp filteredStudents theo cột Điểm
  if (sortChieu === 'tang') {
    filteredStudents.sort(function(a, b) { return a.diem - b.diem; });
  } else if (sortChieu === 'giam') {
    filteredStudents.sort(function(a, b) { return b.diem - a.diem; });
  }

  renderTable();
}

// ─── VẼ BẢNG ─────────────────────────────────────────────────────────────────
function renderTable() {
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  if (filteredStudents.length === 0) {
    // Phân biệt 2 trường hợp: chưa có dữ liệu vs tìm không thấy
    if (students.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="empty-message">Chưa có dữ liệu</td></tr>';
    } else {
      tbody.innerHTML = '<tr><td colspan="5">Không có kết quả</td></tr>';
    }
    return;
  }

  for (let i = 0; i < filteredStudents.length; i++) {
    let sv = filteredStudents[i];
    let tr = document.createElement('tr');

    if (sv.diem < 5) {
      tr.setAttribute('bgcolor', 'yellow');
    }

    // Lưu index trong mảng GỐC vào data-index để xóa đúng phần tử
    let indexGoc = students.indexOf(sv);

    tr.innerHTML =
      '<td>' + (i + 1) + '</td>' +
      '<td>' + sv.hoTen + '</td>' +
      '<td>' + sv.diem + '</td>' +
      '<td>' + xepLoai(sv.diem) + '</td>' +
      '<td><button data-index="' + indexGoc + '">Xóa</button></td>';

    tbody.appendChild(tr);
  }

  // Dòng thống kê (tính trên filteredStudents)
  let tong = filteredStudents.length;
  let tongDiem = 0;
  for (let i = 0; i < filteredStudents.length; i++) {
    tongDiem = tongDiem + filteredStudents[i].diem;
  }
  let trungBinh = tongDiem / tong;

  let tr = document.createElement('tr');
  tr.innerHTML = '<td colspan="5">Hiển thị: ' + tong + ' sinh viên | Điểm trung bình: ' + trungBinh.toFixed(2) + '</td>';
  tbody.appendChild(tr);
}

// ─── THÊM SINH VIÊN ───────────────────────────────────────────────────────────
function themSinhVien() {
  let hoTen = document.getElementById('hoTen').value.trim();
  let diem  = document.getElementById('diem').value;

  if (hoTen === '') {
    alert('Họ tên không được để trống!');
    return;
  }

  if (diem === '' || diem < 0 || diem > 10) {
    alert('Điểm không hợp lệ! Vui lòng nhập số từ 0 đến 10.');
    return;
  }

  students.push({ hoTen: hoTen, diem: Number(diem) });

  document.getElementById('hoTen').value = '';
  document.getElementById('diem').value  = '';
  document.getElementById('hoTen').focus();

  applyFilters();  // gọi applyFilters thay vì renderTable trực tiếp
}

// ─── SẮP XẾP THEO CỘT ĐIỂM ───────────────────────────────────────────────────
document.getElementById('thDiem').addEventListener('click', function() {
  // Đổi chiều sắp xếp: chưa có → tăng → giảm → tăng ...
  if (sortChieu === '' || sortChieu === 'giam') {
    sortChieu = 'tang';
    this.textContent = 'Điểm ▲';
  } else {
    sortChieu = 'giam';
    this.textContent = 'Điểm ▼';
  }

  applyFilters();
});

// ─── TÌM KIẾM REALTIME ───────────────────────────────────────────────────────
document.getElementById('timKiem').addEventListener('input', function() {
  applyFilters();
});

// ─── LỌC THEO XẾP LOẠI ───────────────────────────────────────────────────────
document.getElementById('locXepLoai').addEventListener('change', function() {
  applyFilters();
});

// ─── XÓA SINH VIÊN (Event Delegation) ────────────────────────────────────────
document.getElementById('tbody').addEventListener('click', function(e) {
  if (e.target.tagName !== 'BUTTON') return;

  let index = e.target.getAttribute('data-index');
  students.splice(index, 1);
  applyFilters();  // gọi applyFilters để cập nhật lại sau khi xóa
});

// ─── NHẤN ENTER Ở Ô ĐIỂM ─────────────────────────────────────────────────────
document.getElementById('diem').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    themSinhVien();
  }
});

// Khởi tạo lần đầu
applyFilters();