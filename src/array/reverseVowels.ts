function reverseVowels(s: string): string {
  const result = Array.from(s);
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const isVowel = (char: string) => vowels.has(char.toLowerCase());

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const isLeftVowel = isVowel(s[left]!);
    const isRightVowel = isVowel(s[right]!);

    if (isLeftVowel && isRightVowel) {
      result[left] = s[right]!;
      result[right] = s[left]!;

      left++;
      right--;
      continue;
    }

    if (isLeftVowel) {
      right--;
      continue;
    }

    if (isRightVowel) {
      left++;
      continue;
    }

    left++;
    right--;
  }

  return result.join("");
}
