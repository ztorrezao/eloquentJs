
function zeroPad(number) {
  let string = String(number);
  while (string.length < 4) {
    string = '0' + string;
  }
  return string;
}

function farmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows)} Cows`)
  console.log(`${zeroPad(chickens)} Chickens`)
  console.log(`${zeroPad(pigs)} Pigs`)
}

farmInventory(9, 12, 190);