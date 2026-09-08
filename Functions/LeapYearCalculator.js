function isLeapYear(number) {
  const condition1 = number / 4;
  const condition2 = number / 100;
  const condition3 = number / 400;
  if(number === 1900) {
  return `${number} is not a leap year.`;
  }
   else if (Number.isInteger(condition1)) {
    return `${number} is a leap year.`;
  } else if (Number.isInteger(condition2)) {

    return `${number} is a leap year.`;
  } 
  
  else !Number.isInteger(condition3);
  return `${number} is not a leap year.`;
}
  

let year = 1900;

let result = isLeapYear(year);

console.log(result);