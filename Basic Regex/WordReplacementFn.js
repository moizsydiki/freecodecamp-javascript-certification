const myReplace = (str, removed, added) => {
  if (removed[0] === removed[0].toUpperCase()) {
    added = added[0].toUpperCase() + added.slice(1).toLowerCase();
  } else {
    added = added.toLowerCase();
  }

  return str.replace(removed, added);
};

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
