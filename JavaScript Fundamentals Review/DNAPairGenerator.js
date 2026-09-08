function pairElement(str) {
  return str.split("").map((base) => {
    if (base === "A") return ["A", "T"];
    if (base === "T") return ["T", "A"];
    if (base === "C") return ["C", "G"];
    if (base === "G") return ["G", "C"];
  });
}

console.log(pairElement("TTGAG"));
