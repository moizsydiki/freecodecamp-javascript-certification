function generatePassword(passLength) {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  let result = "";

  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    result += allChars[randomIndex];
  }

  return result;
}

const password = generatePassword(8);

console.log(`Generated password: ${password}`);
