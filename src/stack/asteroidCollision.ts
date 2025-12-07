function asteroidCollision(asteroids: number[]): number[] {
  const result: number[] = [];

  let i = 0;
  while (i < asteroids.length) {
    const a2 = asteroids[i];
    const a1 = result.pop();
    if (a1 === undefined) {
      result.push(a2);
      i++;
      continue;
    }

    if (a1 < 0 || a2 > 0) {
      result.push(a1, a2);
      i++;
      continue;
    }

    const abs = -a2;

    if (a1 > abs) {
      result.push(a1);
      i++;
      continue;
    }

    if (a1 < abs) {
      continue;
    }

    i++;
  }

  return result;
}
