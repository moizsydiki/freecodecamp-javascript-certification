function confirmEnding(str1, str2){
  if( str1.lastIndexOf(str2) === str1.length -str2.length) {
    return true
  } else  {
    return false
  }
}

console.log(confirmEnding("He has to give me a new name", "name"))