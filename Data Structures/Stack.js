const initStack = () => {
  return {
    collection: [],
  };
};

const push = (stack, element) => {
  stack.collection.push(element);
};

const pop = (stack) => {
  return stack.collection.pop();
};

const peek = (stack) => {
  return stack.collection[stack.collection.length - 1];
};

const isEmpty = (stack) => {
  if (stack.collection.length === 0) {
    return true;
  } else {
    return false;
  }
};

const clear = (stack) => {
  stack.collection.length = 0;
};
