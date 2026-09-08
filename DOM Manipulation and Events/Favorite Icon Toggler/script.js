const heartBtn = document.querySelectorAll(".favorite-icon");

function toggleBtn(btn) {
  if (btn.classList.contains("filled")) {
    btn.classList.remove("filled");
    btn.innerHTML = "&#9825;";
  } else {
    btn.classList.add("filled");
    btn.innerHTML = "&#10084;";
  }
}

heartBtn.forEach((btn) => {
  btn.addEventListener("click", () => toggleBtn(btn));
});
