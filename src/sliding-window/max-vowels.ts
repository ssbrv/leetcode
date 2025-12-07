function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  let currentCount = 0;

  for (const c of s.slice(0, k)) {
    if (vowels.has(c)) {
      currentCount++;
    }
  }

  let maxCount = currentCount;

  for (let i = k; i < s.length; i++) {
    const left = vowels.has(s[i - k] || "");
    const right = vowels.has(s[i] || "");

    if (left === right) {
      continue;
    }

    if (left) {
      currentCount--;
      continue;
    }

    currentCount++;

    if (currentCount > maxCount) {
      maxCount = currentCount;
    }
  }

  return maxCount;
}
