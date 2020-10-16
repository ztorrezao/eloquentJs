function max(...numbers) {
  let result = -Infinity;

  for (number of numbers) {
    if (number > result) result = number;
  }

  return result;
}

console.log(max(2, -3, 3, 11, 11, 5, -10, 10));