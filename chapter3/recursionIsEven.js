function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0){
    console.log("ERROR: Only positive whole numbers are accepted!");
    return false;
  } 
  else {
    return isEven(n - 2);
  }
}

console.log("Is it even?", isEven(-1));