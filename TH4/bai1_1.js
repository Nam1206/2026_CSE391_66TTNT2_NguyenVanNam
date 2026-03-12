let students = [];

function xepLoai(diem) {
  if (diem >= 8.5) return 'Giỏi';
  if (diem >= 7.0) return 'Khá';
  if (diem >= 5.0) return 'Trung bình';
  return 'Yếu';
}

function renderTable() {
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  if (students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" class="empty-message">Chưa có dữ liệu</td></tr>';
    return;
  }

  for (let i = 0; i < students.length; i++) {
    let tr = document.createElement('tr');

    if (students[i].diem < 5) {
      tr.setAttribute('bgcolor', 'yellow');
    }

    tr.innerHTML =
      '<td>' + (i + 1) + '</td>' +
      '<td>' + students[i].hoTen + '</td>' +
      '<td>' + students[i].diem + '</td>' +
      '<td>' + xepLoai(students[i].diem) + '</td>' +
      '<td><button data-index="' + i + '">Xóa</button></td>';

    tbody.appendChild(tr);
  }

  // Dòng thống kê
  let tong = students.length;
  let tongDiem = 0;
  for (let i = 0; i < students.length; i++) {
    tongDiem = tongDiem + students[i].diem;
  }
  let trungBinh = tongDiem / tong;

  let tr = document.createElement('tr');
  tr.innerHTML = '<td colspan="5">Tổng: ' + tong + ' sinh viên | Điểm trung bình: ' + trungBinh.toFixed(2) + '</td>';
  tbody.appendChild(tr);
}

function themSinhVien() {
  let hoTen = document.getElementById('hoTen').value.trim();
  let diem  = document.getElementById('diem').value;

  // Kiểm tra họ tên
  if (hoTen === '') {
    alert('Họ tên không được để trống!');
    return;
  }

  // Kiểm tra điểm
  if (diem === '' || diem < 0 || diem > 10) {
    alert('Điểm không hợp lệ! Vui lòng nhập số từ 0 đến 10.');
    return;
  }

  // Thêm vào mảng
  students.push({ hoTen: hoTen, diem: Number(diem) });

  // Xóa ô nhập, đưa con trỏ về ô họ tên
  document.getElementById('hoTen').value = '';
  document.getElementById('diem').value  = '';
  document.getElementById('hoTen').focus();

  renderTable();
}

// Nhấn Enter ở ô Điểm để thêm
document.getElementById('diem').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    themSinhVien();
  }
});

// Xử lý nút Xóa bằng Event Delegation
document.getElementById('tbody').addEventListener('click', function(e) {
  if (e.target.tagName !== 'BUTTON') return;

  let index = e.target.getAttribute('data-index');
  students.splice(index, 1);
  renderTable();
});