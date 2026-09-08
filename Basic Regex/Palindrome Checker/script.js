const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

const checkPalindrome = () => {
  const originalText = textInput.value;

  if (originalText.trim() === "") {
    alert("Please input a value");
    return;
  }

  const cleanedText = originalText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    result.textContent = `${originalText} is a Palindrome`;
  } else {
    result.textContent = `${originalText} is not a Palindrome`;
  }
};

checkBtn.addEventListener("click", () => checkPalindrome());
