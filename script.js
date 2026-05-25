document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.link-card');

    // Animasi Muncul Bergantian (Staggered Fade In)
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {
            card.style.transition = "all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 150 * (index + 1));
    });
});
