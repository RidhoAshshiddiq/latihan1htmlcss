function validateForm() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('error-message');

    // Reset pesan kesalahan
    errorMessage.textContent = '';

    // Validasi email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Email tidak valid';
        return;
    }

    // Validasi pesan (minimal satu karakter)
    if (message.trim() === '') {
        errorMessage.textContent = 'Pesan tidak boleh kosong';
        return;
    }

    // Namun, dalam contoh ini,  hanya menunjukkan pesan sukses.
    alert('Formulir berhasil dikirim!');
}
