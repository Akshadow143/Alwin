// Boot animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.2s ease";
        document.body.style.opacity = "1";
    }, 200);
});

// Random glitch pulse
const glitch = document.querySelector(".glitch");

setInterval(() => {
    glitch.classList.add("active");

    setTimeout(() => {
        glitch.classList.remove("active");
    }, 180);

}, 4000);

// Neon button ripple
document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
