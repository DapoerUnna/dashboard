// Fungsi untuk mendapatkan nilai cookie
function getCookie(name) {
  let value = `; ${document.cookie}`;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Fungsi untuk mengatur cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

// Ambil trafik dari cookie
let traffic = parseInt(getCookie('trafficCount')) || 0;

// Tambahkan 1 setiap kali halaman dimuat
traffic++;

// Simpan trafik ke cookie selama 30 hari
setCookie('trafficCount', traffic, 30);

// Tampilkan jumlah trafik di halaman
document.getElementById('trafficCounter').innerText = `Current Traffic: ${traffic}`;