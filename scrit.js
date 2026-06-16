function toggleMenu() {
    document
        .getElementById("sidebar")
        .classList
        .toggle("activo");
}

document.querySelectorAll(".menu a")
.forEach(link => {
    link.addEventListener("click", () => {
        document
            .getElementById("sidebar")
            .classList
            .remove("activo");
    });
});