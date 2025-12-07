function closeStringsSlow(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const set1 = new Set(Array.from(word1));
  const set2 = new Set(Array.from(word2));

  for (const c of set1) {
    if (!set2.has(c)) return false;
  }

  const map1 = new Map<string, number>();

  for (const c of word1) {
    const count = map1.get(c);
    map1.set(c, (count || 0) + 1);
  }

  const map2 = new Map<string, number>();

  for (const c of word2) {
    const count = map2.get(c);
    map2.set(c, (count || 0) + 1);
  }

  const occurrences1 = Array.from(map1.values()).sort();
  const occurrences2 = Array.from(map2.values()).sort();

  return JSON.stringify(occurrences1) === JSON.stringify(occurrences2);
}

// red flags:
// - different set of letters
// - different length
// - different number of occurrences

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  let occurrences1 = occurrences(word1),
    occurrences2 = occurrences(word2);

  for (let i = 0; i < 26; i++) {
    if (occurrences1[i] !== 0 && occurrences2[i] === 0) {
      return false;
    }

    if (occurrences1[i] === 0 && occurrences2[i] !== 0) {
      return false;
    }
  }

  occurrences1 = occurrences1.sort((a, b) => a - b);
  occurrences2 = occurrences2.sort((a, b) => a - b);

  for (let i = 0; i < 26; i++) {
    if (occurrences1[i] !== occurrences2[i]) {
      return false;
    }
  }

  return true;
}

function occurrences(word: string): number[] {
  const occurrences: number[] = new Array(26).fill(0);

  for (const c of word) {
    const index = c.charCodeAt(0) - "a".charCodeAt(0);
    occurrences[index]++;
  }

  return occurrences;
}
