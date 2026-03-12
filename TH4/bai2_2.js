// ─── DỮ LIỆU SẢN PHẨM ───────────────────────────────────────────────────────
// Dùng key số khớp với value của <option> trong HTML

var sanPhamData = {
  '1': { ten: 'Áo thun',       gia: 150000 },
  '2': { ten: 'Quần jeans',    gia: 350000 },
  '3': { ten: 'Giày sneaker',  gia: 750000 },
  '4': { ten: 'Mũ lưỡi trai', gia:  90000 },
  '5': { ten: 'Túi xách',      gia: 420000 }
};

// ─── TIỆN ÍCH: HIỆN / ẨN LỖI ────────────────────────────────────────────────

function showError(fieldId, message) {
  document.getElementById('error-' + fieldId).textContent = message;
  document.getElementById('error-' + fieldId).style.color = 'red';

  var el = document.getElementById(fieldId);
  if (el && el.tagName !== 'TEXTAREA') {
    el.style.borderColor = 'red';
  }
}

function clearError(fieldId) {
  document.getElementById('error-' + fieldId).textContent = '';

  var el = document.getElementById(fieldId);
  if (el && el.tagName !== 'TEXTAREA') {
    el.style.borderColor = 'green';
  }
}

// ─── TÍNH TỔNG TIỀN TỰ ĐỘNG ──────────────────────────────────────────────────

function tinhTongTien() {
  var key      = document.getElementById('sanPham').value;
  var soLuong  = Number(document.getElementById('soLuong').value);
  var gia      = 0;

  if (key !== '' && sanPhamData[key]) {
    gia = sanPhamData[key].gia;
  }

  var tong = gia * (soLuong > 0 ? soLuong : 0);
  document.getElementById('tongTien').textContent = tong.toLocaleString('vi-VN') + ' ₫';
}

document.getElementById('sanPham').addEventListener('change', tinhTongTien);
document.getElementById('soLuong').addEventListener('input', tinhTongTien);

// ─── CÁC HÀM VALIDATE TỪNG TRƯỜNG ───────────────────────────────────────────

function validateSanPham() {
  var value = document.getElementById('sanPham').value;

  if (value === '') {
    showError('sanPham', 'Vui lòng chọn sản phẩm.');
    return false;
  }

  clearError('sanPham');
  return true;
}

function validateSoLuong() {
  var value = document.getElementById('soLuong').value;
  var so = Number(value);

  if (value === '') {
    showError('soLuong', 'Vui lòng nhập số lượng.');
    return false;
  }
  if (!Number.isInteger(so) || so < 1 || so > 99) {
    showError('soLuong', 'Số lượng phải là số nguyên từ 1 đến 99.');
    return false;
  }

  clearError('soLuong');
  return true;
}

function validateNgayGiao() {
  var value = document.getElementById('ngayGiao').value;

  if (value === '') {
    showError('ngayGiao', 'Vui lòng chọn ngày giao hàng.');
    return false;
  }

  var ngayChon = new Date(value);
  var homNay   = new Date();
  homNay.setHours(0, 0, 0, 0);

  var max30Ngay = new Date();
  max30Ngay.setDate(max30Ngay.getDate() + 30);
  max30Ngay.setHours(0, 0, 0, 0);

  if (ngayChon < homNay) {
    showError('ngayGiao', 'Ngày giao không được là ngày trong quá khứ.');
    return false;
  }
  if (ngayChon > max30Ngay) {
    showError('ngayGiao', 'Ngày giao không được quá 30 ngày kể từ hôm nay.');
    return false;
  }

  clearError('ngayGiao');
  return true;
}

function validateDiaChi() {
  var value = document.getElementById('diaChi').value.trim();

  if (value === '') {
    showError('diaChi', 'Địa chỉ giao hàng không được để trống.');
    return false;
  }
  if (value.length < 10) {
    showError('diaChi', 'Địa chỉ phải có ít nhất 10 ký tự.');
    return false;
  }

  clearError('diaChi');
  return true;
}

function validateGhiChu() {
  var value = document.getElementById('ghiChu').value;

  if (value.length > 200) {
    showError('ghiChu', 'Ghi chú không được vượt quá 200 ký tự.');
    return false;
  }

  document.getElementById('error-ghiChu').textContent = '';
  return true;
}

function validateThanhToan() {
  var radios = document.getElementsByName('thanhToan');
  var daChon = false;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      daChon = true;
      break;
    }
  }

  if (!daChon) {
    showError('thanhToan', 'Vui lòng chọn phương thức thanh toán.');
    return false;
  }

  document.getElementById('error-thanhToan').textContent = '';
  return true;
}

// ─── ĐẾM KÝ TỰ REALTIME CHO GHI CHÚ ─────────────────────────────────────────

document.getElementById('ghiChu').addEventListener('input', function() {
  var dem  = this.value.length;
  var span = document.getElementById('demKyTu');
  span.textContent = dem + '/200';

  if (dem > 200) {
    span.style.color = 'red';
    showError('ghiChu', 'Ghi chú không được vượt quá 200 ký tự.');
  } else {
    span.style.color = 'black';
    document.getElementById('error-ghiChu').textContent = '';
  }
});

// ─── VALIDATE KHI BLUR ───────────────────────────────────────────────────────

document.getElementById('sanPham').addEventListener('blur', validateSanPham);
document.getElementById('soLuong').addEventListener('blur', validateSoLuong);
document.getElementById('ngayGiao').addEventListener('blur', validateNgayGiao);
document.getElementById('diaChi').addEventListener('blur', validateDiaChi);

// ─── XÓA LỖI KHI NHẬP LẠI ───────────────────────────────────────────────────

document.getElementById('soLuong').addEventListener('input', function() { clearError('soLuong'); });
document.getElementById('diaChi').addEventListener('input', function() { clearError('diaChi'); });
document.getElementById('ngayGiao').addEventListener('input', function() { clearError('ngayGiao'); });

// ─── LẤY GIÁ TRỊ RADIO ĐANG CHỌN ────────────────────────────────────────────

function getThanhToan() {
  var radios = document.getElementsByName('thanhToan');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return '';
}

// ─── SUBMIT: VALIDATE & HIỆN DIV XÁC NHẬN ───────────────────────────────────

document.getElementById('form-dathang').addEventListener('submit', function(e) {
  e.preventDefault();

  var hopLe = validateSanPham()
            & validateSoLuong()
            & validateNgayGiao()
            & validateDiaChi()
            & validateGhiChu()
            & validateThanhToan();

  if (!hopLe) return;

  // Lấy thông tin để hiển thị tóm tắt
  var key      = document.getElementById('sanPham').value;
  var soLuong  = document.getElementById('soLuong').value;
  var ngayGiao = document.getElementById('ngayGiao').value;
  var diaChi   = document.getElementById('diaChi').value.trim();
  var tenSP    = sanPhamData[key].ten;
  var tong     = (sanPhamData[key].gia * Number(soLuong)).toLocaleString('vi-VN') + ' ₫';

  document.getElementById('xn-sanPham').textContent  = tenSP;
  document.getElementById('xn-soLuong').textContent  = soLuong;
  document.getElementById('xn-tongTien').textContent = tong;
  document.getElementById('xn-ngayGiao').textContent = ngayGiao;
  document.getElementById('xn-diaChi').textContent   = diaChi;
  document.getElementById('xn-thanhToan').textContent = getThanhToan();

  document.getElementById('form-dathang').style.display = 'none';
  document.getElementById('div-xacnhan').style.display  = 'block';
});

// ─── NÚT XÁC NHẬN ────────────────────────────────────────────────────────────

document.getElementById('btn-xacnhan').addEventListener('click', function() {
  document.getElementById('div-xacnhan').style.display = 'none';
  document.getElementById('thanh-cong').style.display  = 'block';
});

// ─── NÚT HỦY ─────────────────────────────────────────────────────────────────

document.getElementById('btn-huy').addEventListener('click', function() {
  document.getElementById('div-xacnhan').style.display  = 'none';
  document.getElementById('form-dathang').style.display = 'block';
});