function predictPartyVictory(senate: string): string {
  const r: number[] = [];
  const d: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      r.push(i);
    } else {
      d.push(i);
    }
  }

  let n = senate.length;

  while (r.length && d.length) {
    if (r.shift() < d.shift()) {
      r.push(n++);
    } else {
      d.push(n++);
    }
  }

  return r.length ? "Radiant" : "Dire";
}
