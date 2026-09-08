function convertHTML(str) {
  const map = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/[<>&'"]/g, (char) => map[char]);
}

console.log(convertHTML('Stuff in "quotation marks"'));
