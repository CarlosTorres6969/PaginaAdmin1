// js/scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const upButton = document.createElement("button");
    upButton.textContent = "↑ Volver arriba";
    upButton.style.position = "fixed";
    upButton.style.bottom = "20px";
    upButton.style.right = "20px";
    upButton.style.display = "none";
  
    document.body.appendChild(upButton);
  
    window.addEventListener("scroll", () => {
      upButton.style.display = window.scrollY > 200 ? "block" : "none";
    });
  
    upButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  