function increase(id) {
  const input = document.getElementById(id);
  input.value = parseInt(input.value) + 1;
}

function decrease(id) {
  const input = document.getElementById(id);
  if (input.value > 0) input.value = parseInt(input.value) - 1;
}

// 🔹 Công thức từng món
const recipes = {
  miIdomi: {
    name: "Mì Idomi",
    ingredients: { "Mì Idomi": 2, "Trứng": 1 }
  },
  miTrung: {
    name: "Mì Trứng",
    ingredients: { "Mì": 1.5, "Trứng": 1 }
  },
    miSiucaybo: {
    name: "Mì Siu Cay Bò",
    ingredients: { "Mì siu cay": 1, "Bò": 1 }
  }

  
};

// 🔹 Hàm tính nguyên liệu cần dùng
function xuatNguyenLieu() {
  const tongDung = {}; // tổng nguyên liệu cần dùng

  // Gộp nguyên liệu từ các món đã chọn
  for (const key in recipes) {
    const input = document.getElementById(key);
    const slMon = parseFloat(input.value);
    if (slMon > 0) {
      const mon = recipes[key];
      for (const ngl in mon.ingredients) {
        const slDung = mon.ingredients[ngl] * slMon;
        tongDung[ngl] = (tongDung[ngl] || 0) + slDung;
      }
    }
  }

  // Hiển thị kết quả
  const table = document.getElementById("bangNguyenLieu");
  table.innerHTML = `<tr><th>Nguyên liệu</th><th>Số lượng cần dùng</th></tr>`;

  for (const ngl in tongDung) {
    const row = `<tr><td>${ngl}</td><td>${tongDung[ngl]}</td></tr>`;
    table.innerHTML += row;
  }

  // Nếu không có món nào được chọn
  if (Object.keys(tongDung).length === 0) {
    table.innerHTML += `<tr><td colspan="2">Chưa chọn món nào</td></tr>`;
  }
}

// 🔹 Bắt phím Enter để gọi hàm
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    xuatNguyenLieu();
  }
});
