function toggleNav() {
  var navBox = document.getElementById("navBox");
  var toggleButton = document.getElementById("toggleButton");
  if (navBox.style.display === "none" || navBox.style.display === "") {
    navBox.style.display = "block";
    toggleButton.textContent = "Evolución de las Consolas -"; 
  } else {
    navBox.style.display = "none";
    toggleButton.textContent = "Evolución de las Consolas +"; 
  }
}
