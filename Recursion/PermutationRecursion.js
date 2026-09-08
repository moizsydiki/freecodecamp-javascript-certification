const permuteString = (str, prefix = "", result = []) => {
  if (str.length === 0) {
    result.push(prefix);
    return result;
  }

  const seen = new Set();
  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];

    if (seen.has(currChar)) {
      continue;
    }
    seen.add(currChar);

    const remainingStr = str.slice(0, i) + str.slice(i + 1);

    permuteString(remainingStr, prefix + currChar, result);
  }
  return result;
};
