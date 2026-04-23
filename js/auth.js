let siswa = [];

function saveSiswa() {
  let data = document.getElementById("bulkSiswa").value.split("\n");
  siswa = data;
  alert("Data siswa tersimpan");
}

function tambahPoin() {
  let nama = document.getElementById("nama").value;
  let poin = document.getElementById("poin").value;
  let alasan = document.getElementById("alasan").value;

  console.log(nama, poin, alasan);
  alert("Poin berhasil ditambahkan");
}

function downloadCSV() {
  let csv = "Nama,Poin\n";
  siswa.forEach(s => {
    csv += s + ",0\n";
  });

  let blob = new Blob([csv], { type: 'text/csv' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = "rekap.csv";
  a.click();
}
