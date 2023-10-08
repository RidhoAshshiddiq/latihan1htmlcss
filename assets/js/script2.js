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

    // Jika validasi berhasil, Anda dapat mengirim formulir atau melakukan tindakan lain
    // Misalnya, Anda bisa mengirim data ke server dengan menggunakan AJAX.
    // Namun, dalam contoh ini, kita hanya menunjukkan pesan sukses.
    alert('Formulir berhasil dikirim!');
}
