function removeStars(s: string): string {
  const result = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
}
