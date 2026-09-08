function isPalindrome(word) {
  const result = word.toLowerCase();
  const reversed = result.split("").reverse().join("");
  return result === reversed;
}

function findPalindromeBreaks(words) {
  if (words.length === 0) {
    return [];
  }

  return words
    .map((word, index) => {
      const normalized = word.toLowerCase();
      const reversed = normalized.split("").reverse().join("");

      return normalized !== reversed ? index : null;
    })
    .filter((index) => index !== null);
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phrases = {};
  const repeatedIndexes = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (phrases[phrase] !== undefined) {
      // Add first occurrence index once
      if (!repeatedIndexes.includes(phrases[phrase])) {
        repeatedIndexes.push(phrases[phrase]);
      }

      // Add current repeated index
      repeatedIndexes.push(i);
    } else {
      phrases[phrase] = i;
    }
  }

  return repeatedIndexes;
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) {
    return [];
  }

  return texts.map((words) => {
    return {
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words),
    };
  });
}
