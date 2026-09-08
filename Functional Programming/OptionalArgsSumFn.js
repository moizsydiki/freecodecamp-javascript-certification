const addTogether = () => {
  const [first, second] = arguments;

  if (typeof first !== "number") {
    return undefined;
  }

  if (arguments.length === 2) {
    if (typeof second !== "number") {
      return undefined;
    }

    return first + second;
  }

  return function (third) {
    if (typeof third !== "number") {
      return undefined;
    }

    return first + third;
  };
};
