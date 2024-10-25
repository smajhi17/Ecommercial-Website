document.getElementById('animateBtn').addEventListener('click', function() {
    gsap.to("#box", { duration: 1, x: 300, rotation: 360, scale: 1.5 });
});
