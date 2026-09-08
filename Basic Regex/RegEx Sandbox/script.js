const globalFlag = document.getElementById("g");
const testResult = document.getElementById("result");
const testButton = document.getElementById("test-btn");
const regexPattern = document.getElementById("pattern");
const caseInsensitiveFlag = document.getElementById("i");
const stringToTest = document.getElementById("test-string");

const getFlags = () => {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
};

const testPattern = () => {
  const pattern = regexPattern.value;
  const testString = stringToTest.textContent;
  const flags = getFlags();

  const regex = new RegExp(pattern, flags);
  const matches = testString.match(regex);

  if (matches) {
    testResult.textContent = matches.join(", ");
    stringToTest.innerHTML = testString.replace(
      regex,
      `<span class="highlight" >$&</span>`,
    );
  } else {
    testResult.textContent = "no match";
    stringToTest.textContent = testString;
  }
};

testButton.addEventListener("click", () => testPattern());
