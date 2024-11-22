import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5EGEqXwXprUbzU-rZ5z8UBiCsCxqhDLM",
    authDomain: "dapoerunna.firebaseapp.com",
    projectId: "dapoerunna",
    storageBucket: "dapoerunna.firebasestorage.app",
    messagingSenderId: "461158469972",
    appId: "1:461158469972:web:21239b5dd80329506c38c1",
    measurementId: "G-XY8DY1F2BT"
  };

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Mendapatkan referensi ke lokasi data trafik di Firebase
const trafficRef = database.ref('trafficCount');

// Ambil jumlah trafik yang sudah ada
trafficRef.get().then((snapshot) => {
    let currentTraffic = snapshot.val() || 0;

    // Tambahkan 1 kunjungan
    currentTraffic++;

    // Simpan data trafik kembali ke Firebase
    trafficRef.set(currentTraffic);

    // Tampilkan trafik pada elemen di halaman
    document.getElementById('trafficCounter').innerText = `Current Traffic: ${currentTraffic}`;
});