const fullNameInput       = document.getElementById("full-name");
const emailInput          = document.getElementById("email");
const orderNoInput        = document.getElementById("order-no");
const productCodeInput    = document.getElementById("product-code");
const quantityInput       = document.getElementById("quantity");
const complaintsGroup     = document.getElementById("complaints-group");
const complaintDescInput  = document.getElementById("complaint-description");
const solutionsGroup      = document.getElementById("solutions-group");
const solutionDescInput   = document.getElementById("solution-description");
const form                = document.getElementById("form");
const messageBox          = document.getElementById("message-box");
 
// Specific checkbox and radio for "other" — needed for conditional validation
const otherCheckbox       = document.querySelector('#complaints-group input[value="other"]');
const otherRadio          = document.querySelector('#solutions-group input[value="other"]');

function highlightField(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}

function validateForm() {
  const checkedBoxes  = document.querySelectorAll('#complaints-group input[type="checkbox"]:checked');
  const selectedRadio = document.querySelector('#solutions-group input[type="radio"]:checked');
 
  return {
    "full-name"            : fullNameInput.value.trim() !== "",
    "email"                : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim()),
    "order-no"             : /^2024\d{6}$/.test(orderNoInput.value.trim()),
    "product-code"         : /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCodeInput.value.trim()),
    "quantity"             : /^\d+$/.test(quantityInput.value.trim()) && parseInt(quantityInput.value.trim(), 10) > 0,
    "complaints-group"     : checkedBoxes.length > 0,
    "complaint-description": otherCheckbox.checked ? complaintDescInput.value.trim().length >= 20 : true,
    "solutions-group"      : selectedRadio !== null,
    "solution-description" : otherRadio.checked ? solutionDescInput.value.trim().length >= 20 : true,
  };
}


function isValid(validationObj) {
  return Object.values(validationObj).every((value) => value === true);
}


const fieldMap = {
  "full-name"            : fullNameInput,
  "email"                : emailInput,
  "order-no"             : orderNoInput,
  "product-code"         : productCodeInput,
  "quantity"             : quantityInput,
  "complaints-group"     : complaintsGroup,
  "complaint-description": complaintDescInput,
  "solutions-group"      : solutionsGroup,
  "solution-description" : solutionDescInput,
};


[fullNameInput, emailInput, orderNoInput, productCodeInput, quantityInput].forEach((input) => {
  input.addEventListener("change", () => {
    const results = validateForm();
    highlightField(input, results[input.id]);
  });
});


complaintDescInput.addEventListener("change", () => {
  const results = validateForm();
  highlightField(complaintDescInput, results["complaint-description"]);
});


solutionDescInput.addEventListener("change", () => {
  const results = validateForm();
  highlightField(solutionDescInput, results["solution-description"]);
});


document.querySelectorAll('#complaints-group input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const results = validateForm();
    highlightField(complaintsGroup,    results["complaints-group"]);
    highlightField(complaintDescInput, results["complaint-description"]);
  });
});


document.querySelectorAll('#solutions-group input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const results = validateForm();
    highlightField(solutionsGroup,    results["solutions-group"]);
    highlightField(solutionDescInput, results["solution-description"]);
  });
});


form.addEventListener("submit", (e) => {
  e.preventDefault();
 
  const results = validateForm();
 
  if (isValid(results)) {
    Object.keys(results).forEach((key) => highlightField(fieldMap[key], true));
    messageBox.textContent = "✅ Form submitted successfully!";
    messageBox.style.color = "green";
    console.log("Form is valid — ready to submit.");
  } else {
    Object.entries(results).forEach(([key, valid]) => {
      if (!valid) highlightField(fieldMap[key], false);
    });
    messageBox.textContent = "❌ Please fix the highlighted fields before submitting.";
    messageBox.style.color = "red";
  }
});
