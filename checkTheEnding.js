
const ending = (string1, string2) => {
  if (string1 === "" || string2 === "") {
    return "both strings are required";
  }
  if ((string1 = string1.endsWith(string2))) {
    return true;
  } else {
    return false;
  }
};

module.exports = ending;