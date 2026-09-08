const sentence = "What if we try a super-long word such as otorhinolaryngology";

function findLongestWordLength(str) {
  const splitStr = str.split(" ");

  let maxLength = 0;

  for (const word of splitStr) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength(sentence));
