function validateNumber(input) {
  if (typeof input !== "number") {
    throw new Error("Expected a number but received:" + typeof input);
  }
  return input;
}

try {
  console.log("starting to process input");

  console.log(validateNumber("a"));
} catch (err) {
  console.error("Error Occured:", err.message);
}
