const spinalCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])|[\s_]+/g, (match, lower, upper) => {
      return lower ? `${lower}-${upper.toLowerCase()}` : "-";
    })
    .toLowerCase();
};

console.log(spinalCase("The_Andy_Griffith_Show"));
