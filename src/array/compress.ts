function compress(chars: string[]): number {
  let read = 0;
  let write = 0;
  let count = 0;

  for (let i = 0; i <= chars.length; i++) {
    // console.log({ i, read, write, count, chars });

    if (chars[i] === chars[read]) {
      count++;
      continue;
    }

    chars[write++] = chars[read]!;
    read = i;

    if (count <= 1) {
      count = 1;
      continue;
    }

    let countAsString = Array.from(count.toString());
    chars.splice(write, countAsString.length, ...countAsString);
    write += countAsString.length;
    count = 1;
  }

  return write;
}

function testCompress(input: string[], output: string[]) {
  const resultLen = compress(input);
  const result = input.slice(0, resultLen);

  console.assert(
    JSON.stringify(result) === JSON.stringify(output),
    `Expected "${output}", but got "${result}"`
  );
}

testCompress(["a"], ["a"]);
testCompress(["a", "a"], ["a", "2"]);
testCompress(["a", "a", "a"], ["a", "3"]);
testCompress(["a", "a", "a", "b"], ["a", "3", "b"]);
testCompress(["a", "a", "a", "b", "b"], ["a", "3", "b", "2"]);
testCompress(
  ["a", "a", "a", "b", "b", "c", "c", "c", "c"],
  ["a", "3", "b", "2", "c", "4"]
);
testCompress(
  [
    "a",
    "a",
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "c",
    "c",
    "c",
    "c",
  ],
  ["a", "3", "b", "1", "0", "c", "4"]
);

testCompress(
  [
    "a",
    "a",
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "c",
    "c",
    "c",
    "c",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    "e",
    "e",
  ],
  ["a", "3", "b", "1", "0", "c", "4", "d", "1", "6", "e", "2"]
);
