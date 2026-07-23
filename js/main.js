// ==========================================================
// FITUR 1: Menu Navigasi Mobile (Event Listener + DOM Toggle)
// ==========================================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', function() {
  // Manipulasi DOM: Mengubah (toggle) kelas CSS 'active'
  navMenu.classList.toggle('active');
});


// ==========================================================
// FITUR 2: Tombol Tampil / Sembunyikan Konten (DOM Display)
// ==========================================================
const toggleBtn = document.getElementById('toggleBtn');
const moreContent = document.getElementById('moreContent');

toggleBtn.addEventListener('click', function() {
  // Cek status tampilan elemen saat ini
  if (moreContent.style.display === 'none' || moreContent.style.display === '') {
    // Manipulasi DOM: Tampilkan konten dan ubah teks tombol
    moreContent.style.display = 'block';
    toggleBtn.innerText = 'Sembunyikan Detail';
  } else {
    // Manipulasi DOM: Sembunyikan konten dan ubah teks tombol
    moreContent.style.display = 'none';
    toggleBtn.innerText = 'Tampilkan Detail';
  }
});


// ==========================================================
// FITUR 3: Validasi Form & Pesan Konfirmasi (Form Submit Event)
// ==========================================================
const myForm = document.getElementById('myForm');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const namaError = document.getElementById('namaError');
const emailError = document.getElementById('emailError');
const confirmMessage = document.getElementById('confirmMessage');

myForm.addEventListener('submit', function(event) {
  // Mencegah browser melakukan reload halaman otomatis
  event.preventDefault();

  let isValid = true;

  // 1. Validasi Input Nama
  if (namaInput.value.trim() === '') {
    namaError.style.display = 'block';
    isValid = false;
  } else {
    namaError.style.display = 'none';
  }

  // 2. Validasi Input Email dengan Regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  // 3. Tampilkan pesan konfirmasi jika form valid
  if (isValid) {
    // Manipulasi DOM: Menampilkan box pesan konfirmasi
    confirmMessage.style.display = 'block';
    
    // Reset isi form
    myForm.reset();
  } else {
    // Sembunyikan pesan konfirmasi jika ada error
    confirmMessage.style.display = 'none';
  }
});