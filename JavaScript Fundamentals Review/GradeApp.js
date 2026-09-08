function getAverage(avg) {
  let sum = 0;

  for (let i = 0; i < avg.length; i++) {
    sum += avg[i];
  }

  const average = sum / avg.length;

  return average;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score <= 59) {
    return "F";
  }
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scoreArr, score) {
  const grades = getGrade(score);
  const passed = hasPassingGrade(score);
  const classAverage = getAverage(scoreArr);

  if (passed) {
    return `Class average: ${classAverage}. Your grade: ${grades}. You passed the course.`;
  } else {
    return `Class average: ${classAverage}. Your grade: ${grades}. You failed the course.`;
  }
}

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 60));
