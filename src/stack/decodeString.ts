function decodeString(s: string): string {
  const kStack: number[] = [];
  const resultStack: string[] = [];
  let formingK: string[] = [];

  for (const c of s) {
    if (c === "[") {
      kStack.push(Number(formingK.join("")));
      resultStack.push("");
      formingK = [];
      continue;
    }

    if (c === "]") {
      const k = kStack.pop() || 1;
      const sToK = resultStack.pop() || "";
      const prevS = resultStack.pop() || "";
      resultStack.push(prevS + sToK.repeat(k));
      continue;
    }

    if (isNaN(Number(c))) {
      const lastS = resultStack.pop() || "";
      resultStack.push(lastS + c);
      continue;
    }

    formingK.push(c);
  }

  return resultStack.join("");
}
