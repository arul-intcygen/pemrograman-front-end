const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  // Mencegah refresh halaman
  event.preventDefault();

  // 1. Ambil semua nilai input
  const namaDepan = document.getElementById("nama_depan").value;
  const namaBelakang = document.getElementById("nama_belakang").value;
  const nilaiInput = document.getElementById("nilai_angka").value;

  const nilaiAngka = parseInt(nilaiInput, 10);
  const nilaiHuruf = tentukanNilaiHuruf(nilaiAngka);

  // 3. Tampilkan output di console sesuai format permintaan
  console.log("======================================");
  console.log("Nama Lengkap : " + namaDepan + " " + namaBelakang);
  console.log("Nilai Angka  : " + nilaiAngka);
  console.log("Nilai Huruf  : " + nilaiHuruf);
  console.log("======================================");
});

function tentukanNilaiHuruf(nilai) {
  if (nilai < 0 || nilai > 100) {
    return "Nilai tidak valid";
  }

  if (nilai >= 85) {
    return "A";
  } else if (nilai >= 80) {
    return "A-";
  } else if (nilai >= 75) {
    return "B+";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 65) {
    return "B-";
  } else if (nilai >= 60) {
    return "C+";
  } else if (nilai >= 55) {
    return "C";
  } else if (nilai >= 40) {
    return "D";
  } else {
    return "E";
  }
}
