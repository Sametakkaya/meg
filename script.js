// Animasyonlar ve etkileşimler için JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
    });
});

 document.addEventListener("DOMContentLoaded", function () {
        var myCarousel = new bootstrap.Carousel(document.getElementById("productCarousel"), {
            interval: 5000, // 5 saniyede bir geçiş
            pause: "hover", // Üzerine gelince durdur
            wrap: true // Sonsuz döngü
        });
    });