var currentIndex = 0;
showSlides(currentIndex);

function plusSlides(n) {
    currentIndex += n * 3;
    showSlides(currentIndex);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        currentIndex = 0;
    } else if (n < 0) {
        currentIndex = slides.length - 3;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = currentIndex; i < currentIndex + 3; i++) {
        slides[i].style.display = "block";
    }
}

// function openModal(element) {
//     const modal = document.getElementById('myModal');
//     const modalCaption = document.getElementById('modalCaption');
//     const caption = element.parentElement.getAttribute('data-caption');

//     modal.style.display = 'block';
//     modalCaption.textContent = caption;
// }
function openModal(element) {
    const modal = document.getElementById('myModal');
    const modalCaption = document.getElementById('modalCaption');
    const caption = element.parentElement.getAttribute('data-caption');

    modal.style.display = 'block';
    modalCaption.textContent = caption;

    // Tambahkan penyesuaian posisi modal di tengah
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';

    // setTimeout(function () {
    //     plusSlides(1);
    // });
}

// Sembunyikan modal pada awalnya
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myModal').style.display = 'none';
});

// Tambahkan event listener menggunakan event delegation
document.getElementById('slides-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('image-container')) {
        openModal(event.target);
    }
});

// Hentikan perulangan otomatis pada load pertama
clearInterval(slideInterval);


