// UTIL FN 2
export const validateInput = (...input) => {
  return input.every((el) => typeof el === "number" && !isNaN(el));
};
