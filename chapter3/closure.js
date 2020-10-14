// answer to a closure level question.
function f (n) {
  let local = n;
  return function () {
    let level2 = 3;
    return () => local + level2; // a closure
  }
}

let level1 = f(2);
let level2 = level1();
let level3 = level2();

console.log(level3);



// multiplier example
function multiplier (factor) {
  return number => number * factor;
}

let triple = multiplier(6);

console.log(triple(3));