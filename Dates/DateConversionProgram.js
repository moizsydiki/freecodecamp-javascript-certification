const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const result = date.toLocaleDateString("en-US");
  return `Formatted Date (MM/DD/YYYY): ${result}`;
}

function formatDateLong(date) {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const result = date.toLocaleDateString("en-US", options);

  return `Formatted Date (Month Day, Year): ${result}`;
}

const formateDate = formatDateLong(currentDate);
console.log(formateDate);
