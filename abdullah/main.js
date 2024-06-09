const navContent = document.querySelector(".nav__menu");
const toggleButton = document.getElementById("menu__icon")
const closeBtn = document.querySelector(".close-btn")
const navLinks = document.querySelector(".nav__menu ul li ")




toggleButton.addEventListener("click", () => {
    navContent.classList.add("nav-show")
})

closeBtn.addEventListener("click", () => {
    navContent.classList.remove("nav-show")
})