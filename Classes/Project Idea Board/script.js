const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    if (newStatus && typeof newStatus === "object") {
      this.status = newStatus;
    }
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    if (projectIdea instanceof ProjectIdea) {
      this.ideas.push(projectIdea);
    }
  }

  unpin(projectIdea) {
    this.ideas = this.ideas.filter(
      (idea) => idea !== projectIdea && idea.title !== projectIdea.title,
    );
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;

    this.ideas.forEach((idea) => {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    });

    return result;
  }
}

// const repeatingStr = (str) => {
//   if (str === "") return "";
//   return repeatingStr(str.slice(1)) + str[0];
// };

// console.log(repeatingStr("Hello, World!")); // Output: !dlroW ,olleH

// const checkEvenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// console.log(checkEvenOrOdd(87)); // Output: Odd

// const reverseString = (str) => {
//   const result = str.split("").reverse("").join("");
//   return result;
// };

// console.log(reverseString("Hello World!")); // Output: !dlroW ,olleH
