// UTIL FN 1
// ["500","2","100"] => [500,2,100]
export const parseInput = (...input) => {
    return input.map((str) => Number(str));
  };