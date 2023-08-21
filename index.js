// Bài 1
var nhapDiemChuan = document.getElementById("nhap-diem").value;
var nhapSo1 = document.getElementById("so-1").value;
var nhapSo2 = document.getElementById("so-2").value;
var nhapSo3 = document.getElementById("so-3").value;

// khu vuc
var khuSo1 = document.getElementById("khu1").value;
var khuSo2 = document.getElementById("khu2").value;
var khuSo3 = document.getElementById("khu3").value;

//đối tượng
var object1 = document.getElementById("doiTuong1").value;
var object2 = document.getElementById("doiTuong2").value;
var object3 = document.getElementById("doiTuong3").value;
//
var tongDiemMon = 0;
function ketQua() {
  var tongDiemMon = nhapSo1 + nhapSo2 + nhapSo3;
  console.log("♣ ~ ketQua ~ tongDiemMon:", tongDiemMon);
}

//Bài 2

function tienDien() {
  var soDien = document.getElementById("soKW").value * 1;
  var tongKW = 0;
  var bac1 = 500;
  var bac2 = 650;
  var bac3 = 850;
  var bac4 = 1100;
  var bac5 = 1300;
  if (soDien < 0) {
    console.log("nhập sai");
  } else if (soDien <= 50) {
    tongKW = soDien * bac1;
  } else if (soDien <= 100) {
    tongKW = 50 * bac1 + (soDien - 50) * bac2;
  } else if (soDien <= 200) {
    tongKW = 50 * bac1 + 50 * bac2 + (soDien - 100) * bac3;
  } else if (soDien <= 350) {
    tongKW = 50 * bac1 + 50 * bac2 + 100 * bac3 + (soDien - 150) * bac4;
  } else {
    tongKW =
      50 * bac1 + 50 * bac2 + 100 * bac3 + 150 * bac4 + (soDien - 350) * bac5;
  }
  document.getElementById("tien-kw").innerHTML = tongKW.toLocaleString();
}
