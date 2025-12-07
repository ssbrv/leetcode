function gcdOfStrings(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length);

  for (let len = minLength; len >= 1; len--) {
    if (str1.length % len !== 0 || str2.length % len !== 0) {
      continue;
    }

    const candidate = str1.slice(0, len);
    const repetitions1 = str1.length / len;
    const repetitions2 = str2.length / len;

    if (
      candidate.repeat(repetitions1) === str1 &&
      candidate.repeat(repetitions2) === str2
    ) {
      return candidate;
    }
  }

  return "";
}

function test(str1: string, str2: string, expected: string) {
  const result = gcdOfStrings(str1, str2);

  console.log({ str1, str2, result, expected });

  console.assert(
    result === expected,
    `Expected "${expected}", but got "${result}"`
  );
}

test("ABCABC", "ABC", "ABC");
test("ABABAB", "ABAB", "AB");
test("LEET", "CODE", "");
