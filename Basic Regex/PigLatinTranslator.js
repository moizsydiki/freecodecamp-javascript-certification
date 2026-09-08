function translatePigLatin(str) {
  const vowels = /^[aeiou]/i;
  const consonants = /^[^aeiou]+/i;
  if (vowels.test(str)) {
    return str + "way";
  }

  if (consonants.test(str)) {
    return str.replace(/^([^aeiou]+)(.*)$/i, "$2$1ay");
  }

  return str + "ay";
}
