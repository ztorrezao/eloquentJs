let journal = []

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];

  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;

    table[index] += 1;
  }

  return table;
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
}


addEntry(["work", "dance", "pizza", "running", "television"], false);
addEntry(["work", "touched tree", "pizza", "running", "television"], true);
addEntry(["swim", "fight", "write", "play video-game", "television"], true);

console.log("Running events correlation: ", phi(tableFor("running", journal)));