
let saldo = 0;

function tambahSaldo() {
  let jumlah = parseInt(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
  if (!isNaN(jumlah) && jumlah > 0) {
    saldo += jumlah;
    updateSaldoDisplay();
    alert("Saldo berhasil ditambahkan. Saldo baru: " + saldo);
  } else {
    alert("Input tidak valid. Saldo tidak berubah. Silakan coba lagi.");
  }
}

function kurangiSaldo() {
  let jumlah = parseInt(prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
  if (!isNaN(jumlah) && jumlah > 0) {
    if (jumlah <= saldo) {
      saldo -= jumlah;
      updateSaldoDisplay();
      alert("Saldo berhasil dikurangi. Saldo baru: " + saldo);
    } else {
      alert("Saldo tidak mencukupi untuk melakukan pengurangan.");
    }
  } else {
    alert("Input tidak valid. Saldo tidak berubah. Silakan coba lagi.");
  }
}

function updateSaldoDisplay() {
  let saldoDisplayElement = document.getElementById("saldoDisplay");
  saldoDisplayElement.textContent = saldo; 
}

updateSaldoDisplay();

document.getElementById("tambahSaldo()").onclick = tambahSaldo;
document.getElementById("kurangiSaldo()").onclick = kurangiSaldo;
