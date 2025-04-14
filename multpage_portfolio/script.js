function toggleMenu() {
  const nav = document.getElementById("menu");
  nav.classList.toggle("show");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// function toggleTheme() {
//   document.body.classList.toggle("light-mode");

//   const toggleBtn = document.querySelector(".theme-toggle");
//   const isLight = document.body.classList.contains("light-mode");

//   toggleBtn.textContent = isLight ? "🌞" : "🌙";
//   localStorage.setItem("theme", isLight ? "light" : "dark");
// }

// // On load
// window.onload = () => {
//   const savedTheme = localStorage.getItem("theme");
//   if (savedTheme === "light") {
//     document.body.classList.add("light-mode");
//     document.querySelector(".theme-toggle").textContent = "🌞";
//   }
// };
