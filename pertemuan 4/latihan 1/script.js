const form = document.getElementById("firstForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const namaDepanInput = document.getElementById("nama_depan");
  const namaBelakangInput = document.getElementById("nama_belakang");

  const namaDepan = namaDepanInput.value;
  const namaBelakang = namaBelakangInput.value;

  const namaLengkap = namaDepan + " " + namaBelakang;

  console.log("Nama Lengkap : " + namaLengkap);
});
