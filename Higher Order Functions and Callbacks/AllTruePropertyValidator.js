function truthCheck(collection, pre) {
  const result = collection.every((item) => item[pre]);
  return result;
}

console.log(
  truthCheck(
    [
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
      { name: "Quincy", role: "Founder", isBot: false },
    ],
    "isBot",
  ),
);
