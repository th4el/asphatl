// Navbar sticky with JS
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var textElements = document.querySelectorAll('.scroll-text');

    textElements.forEach(function(element) {
        if (scrollPosition > 0) {
            element.style.color = 'white'; // Ubah warna menjadi putih saat di-scroll
        } else {
            element.style.color = 'black'; // Kembalikan warna ke hitam jika tidak di-scroll
        }
    });
});

