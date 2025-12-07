function mergeAlternately(word1: string, word2: string): string {
  const result: string[] = [];
  const min = Math.min(word1.length, word2.length);

  for (let i = 0; i < min; i++) {
    result.push(word1[i], word2[i]);
  }

  result.push(...word1.slice(min), ...word2.slice(min));

  return result.join("");
}

function testMergeAlternately(word1: string, word2: string, expected: string) {
  const result = mergeAlternately(word1, word2);

  console.log({ word1, word2, result, expected });

  console.assert(
    result === expected,
    `Expected "${expected}", but got "${result}"`
  );
}

testMergeAlternately("abc", "pqr", "apbqcr");
testMergeAlternately("ab", "pqrs", "apbqrs");
testMergeAlternately("abcd", "pq", "apbqcd");
