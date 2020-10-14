function countBs(text) {
  let counts = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "B") {
      counts++;
    }
  }

  return counts;
}

function countChar(text, char) {
  let counts = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      counts++;
    }
  }

  return counts;
}

console.log("count Bs, Burbulha: ", countBs("Burbulha"));
console.log("count Chars, Alibaba: ", countChar("Alibaba", "A"));