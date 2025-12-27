function cekNilai() {
    let nama = document.getElementById("nama").value;
    let nilai = parseInt(document.getElementById("nilai").value);
    let grade = "";
    let status = "";

    if (nilai >= 85 && nilai <= 100) {
        grade = "A";
        status = "Lulus";
    } else if (nilai >= 70) {
        grade = "B";
        status = "Lulus";
    } else if (nilai >= 60) {
        grade = "C";
        status = "Lulus";
    } else if (nilai >= 40) {
        grade = "D";
        status = "Tidak Lulus";
    } else {
        grade = "E";
        status = "Tidak Lulus";
    }

    document.getElementById("hasil").innerHTML =
        "Nama: " + nama + "<br>" +
        "Nilai: " + nilai + "<br>" +
        "Grade: " + grade + "<br>" +
        "Status: " + status;
}

