function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let planted = 0;
  let prevIsEmpty = true;

  if (!n) {
    return true;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i]) {
      prevIsEmpty = false;
      continue;
    }

    if (prevIsEmpty && (i + 1 === flowerbed.length || !flowerbed[i + 1])) {
      if (++planted >= n) {
        return true;
      }
      prevIsEmpty = false;
      continue;
    }

    prevIsEmpty = true;
  }

  return false;
}
