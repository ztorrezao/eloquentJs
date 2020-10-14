function min(x, y) {
  if (x < y || y === undefined) {
    return x;
  } else {
    return y
  }
}

console.log(min(90, 32));