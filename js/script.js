// Ini Javascript

function displayMessage() {
  const nama = document.getElementById("nama").value;
  const tanggalLahir = document.getElementById("tanggal_lahir").value;
  const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  const currentTime = new Date().toString();

  const dataList = [`Current time: ${currentTime}`, `Nama: ${nama}`, `Tanggal Lahir: ${tanggalLahir}`, `Jenis Kelamin: ${jenisKelamin}`, `Pesan: ${pesan}`];

  const displayList = document.getElementById("displayList");

  const listItem = document.createElement("li");

  dataList.forEach((data) => {
    const dataItem = document.createElement("p");
    dataItem.textContent = data;
    listItem.appendChild(dataItem);
  });

  displayList.appendChild(listItem);

  document.getElementById("messageForm").reset();
}
