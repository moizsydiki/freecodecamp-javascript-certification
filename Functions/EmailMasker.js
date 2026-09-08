// ** start of script.js **

function maskEmail(email) {
  const index = email.indexOf("@");
  const sliced = email.slice(1, index - 1);
  const stars = "*".repeat(sliced.length)
  const replaced = email.replace(sliced, stars);
    return replaced
}

const email = "freecodecamp@example.com";

console.log(maskEmail(email));

// ** end of script.js **