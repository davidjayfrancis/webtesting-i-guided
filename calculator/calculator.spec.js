const { add } = require("./calculator.js");

describe("sum function", () => {
  it("sums two integers", () => {
    const expected = 3;
    const actual = add(1, 2);
    expect(actual).toBe(expected);
  });
});

describe("sum function", () => {
  it("sums two integers", () => {
    const expected = 7;
    const actual = add(-10, 2, 15);
    expect(actual).toBe(expected);
  });
});

// test away!
