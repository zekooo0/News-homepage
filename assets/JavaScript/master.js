let links = document.querySelector(".links");
function openTheMenu() {
  links.style.display = "flex";
  document.querySelector(".landing").style.opacity = 0.5;
}
function closeTheMenu() {
  links.style.display = "none";
  document.querySelector(".landing").style.opacity = 1;
}
