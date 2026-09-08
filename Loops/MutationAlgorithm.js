// function mutation(arr) {
// const lowercaseArr = arr.map((value) => {
//   return value.toLowerCase();
// });
// if (lowercaseArr[0].includes(lowercaseArr[1])) {
//   return true;
// } else {
//   return false;
// }
//   const mainStr = arr[0].toLowerCase().split("");
//   const subStr = arr[1].toLowerCase();

//   for (let i = 0; i < subStr.length; i++) {
//     const char = subStr[i];

//     const index = mainStr.indexOf(char);

//     if (index === -1) {
//       return false;
//     }

//     mainStr.splice(index, 1);
//   }

//   return true;
// }

function mutation(arr) {
  const mainStr = arr[0].toLowerCase();
  const subStr = arr[1].toLowerCase();

  for (let char of subStr) {
    if (!mainStr.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["Mary", "Aarmy"]));
