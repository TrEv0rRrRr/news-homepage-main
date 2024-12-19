const menuIcon = document.querySelector(".header__nav-image"); // Ícono del menú
const menu = document.querySelector(".header__nav-list"); // Menú
const overlay = document.createElement("div"); // Crear el overlay dinámicamente

// Configuración del overlay
overlay.classList.add("overlay");
document.body.appendChild(overlay); // Añadir el overlay al DOM

// Mostrar menú y overlay
menuIcon.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.style.display = "block";
});

// Cerrar menú al hacer clic en el ícono de cierre o el overlay
overlay.addEventListener("click", closeMenu);
menu.querySelector("img").addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("active");
  overlay.style.display = "none";
}
