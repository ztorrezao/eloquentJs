let journal = []

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];

  for (entry of journal) {
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;

    table[index] += 1;
  }

  return table;
}

function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt(
      (n10 + n11) *
      (n00 + n01) *
      (n01 + n11) *
      (n00 + n10));
}


addEntry(["work", "dance", "pizza", "running", "television"], false);
addEntry(["work", "touched tree", "pizza", "running", "television"], true);
addEntry(["swim", "fight", "write", "play video-game", "television"], true);

console.log("Running events correlation: ", phi(tableFor("running", journal)));