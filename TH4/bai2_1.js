// ─── TIỆN ÍCH: HIỆN / ẨN LỖI ────────────────────────────────────────────────

function showError(fieldId, message) {
  document.getElementById('error-' + fieldId).textContent = message;
  document.getElementById('error-' + fieldId).style.color = 'red';
  document.getElementById(fieldId).style.borderColor = 'red';
}

function clearError(fieldId) {
  document.getElementById('error-' + fieldId).textContent = '';
  document.getElementById(fieldId).style.borderColor = 'green';
}

// ─── CÁC HÀM VALIDATE TỪNG TRƯỜNG ───────────────────────────────────────────

function validateHoTen() {
  let value = document.getElementById('hoTen').value.trim();
  let regex = /^[a-zA-ZÀ-ỹ\s]+$/;

  if (value === '') {
    showError('hoTen', 'Họ tên không được để trống.');
    return false;
  }
  if (value.length < 3) {
    showError('hoTen', 'Họ tên phải có ít nhất 3 ký tự.');
    return false;
  }
  if (!regex.test(value)) {
    showError('hoTen', 'Họ tên chỉ được chứa chữ cái và khoảng trắng.');
    return false;
  }

  clearError('hoTen');
  return true;
}

function validateEmail() {
  let value = document.getElementById('email').value.trim();
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (value === '') {
    showError('email', 'Email không được để trống.');
    return false;
  }
  if (!regex.test(value)) {
    showError('email', 'Email không đúng định dạng (vd: name@domain.com).');
    return false;
  }

  clearError('email');
  return true;
}

function validateSdt() {
  let value = document.getElementById('sdt').value.trim();
  let regex = /^0[0-9]{9}$/;

  if (value === '') {
    showError('sdt', 'Số điện thoại không được để trống.');
    return false;
  }
  if (!regex.test(value)) {
    showError('sdt', 'Số điện thoại phải có 10 chữ số và bắt đầu bằng 0.');
    return false;
  }

  clearError('sdt');
  return true;
}

function validateMatKhau() {
  let value = document.getElementById('matKhau').value;
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (value === '') {
    showError('matKhau', 'Mật khẩu không được để trống.');
    return false;
  }
  if (!regex.test(value)) {
    showError('matKhau', 'Mật khẩu ≥ 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số.');
    return false;
  }

  clearError('matKhau');
  return true;
}

function validateXacNhan() {
  let matKhau = document.getElementById('matKhau').value;
  let xacNhan = document.getElementById('xacNhan').value;

  if (xacNhan === '') {
    showError('xacNhan', 'Vui lòng xác nhận mật khẩu.');
    return false;
  }
  if (xacNhan !== matKhau) {
    showError('xacNhan', 'Xác nhận mật khẩu không khớp.');
    return false;
  }

  clearError('xacNhan');
  return true;
}

function validateGioiTinh() {
  let radios = document.getElementsByName('gioiTinh');
  let daChon = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      daChon = true;
      break;
    }
  }

  if (!daChon) {
    showError('gioiTinh', 'Vui lòng chọn giới tính.');
    return false;
  }

  document.getElementById('error-gioiTinh').textContent = '';
  return true;
}

function validateDieuKhoan() {
  let checked = document.getElementById('dieuKhoan').checked;

  if (!checked) {
    showError('dieuKhoan', 'Bạn phải đồng ý với điều khoản sử dụng.');
    return false;
  }

  document.getElementById('error-dieuKhoan').textContent = '';
  return true;
}

// ─── VALIDATE KHI BLUR (rời khỏi trường) ─────────────────────────────────────

document.getElementById('hoTen').addEventListener('blur', validateHoTen);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('sdt').addEventListener('blur', validateSdt);
document.getElementById('matKhau').addEventListener('blur', validateMatKhau);
document.getElementById('xacNhan').addEventListener('blur', validateXacNhan);

// ─── XÓA LỖI KHI BẮT ĐẦU NHẬP LẠI (input event) ────────────────────────────

document.getElementById('hoTen').addEventListener('input', function() { clearError('hoTen'); });
document.getElementById('email').addEventListener('input', function() { clearError('email'); });
document.getElementById('sdt').addEventListener('input', function() { clearError('sdt'); });
document.getElementById('matKhau').addEventListener('input', function() { clearError('matKhau'); });
document.getElementById('xacNhan').addEventListener('input', function() { clearError('xacNhan'); });

// ─── VALIDATE KHI SUBMIT ─────────────────────────────────────────────────────

document.getElementById('form-dangky').addEventListener('submit', function(e) {
  e.preventDefault();  // Ngăn form gửi đi theo mặc định

  // Dùng & (không phải &&) để tất cả hàm đều được gọi, không dừng sớm
  let hopLe = validateHoTen()
            & validateEmail()
            & validateSdt()
            & validateMatKhau()
            & validateXacNhan()
            & validateGioiTinh()
            & validateDieuKhoan();

  if (!hopLe) return;  // Có lỗi → dừng lại

  // Tất cả hợp lệ → ẩn form, hiện thông báo thành công
  let ten = document.getElementById('hoTen').value.trim();
  document.getElementById('form-dangky').style.display = 'none';
  document.getElementById('ten-hienthi').textContent = ten;
  document.getElementById('thanh-cong').style.display = 'block';
});