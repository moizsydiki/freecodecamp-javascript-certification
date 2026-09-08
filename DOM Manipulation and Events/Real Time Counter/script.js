const textarea = document.getElementById("text-input");
const countDisplay = document.getElementById("char-count");
const currentCount = document.getElementById("current-count");

textarea.addEventListener("input", () => {
  if (textarea.value.length > 50) {
    textarea.value = textarea.value.substring(0, 50);
  }
  const currentLength = textarea.value.length;
  currentCount.textContent = currentLength;

  if (currentLength >= 50) {
    countDisplay.classList.add("limit-reached");
  } else {
    countDisplay.classList.remove("limit-reached");
  }
});
