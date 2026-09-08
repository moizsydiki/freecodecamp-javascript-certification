const now = new Date();
const month = now.getMonth();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const options = {
  weekday: "short", // long can use instead of short
  year: "numeric",
  month: "short", // long can use instead of short
  day: "numeric",
};

console.log(now.toLocaleDateString("en-US", options));
