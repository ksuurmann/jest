const { TestScheduler } = require("jest");
const checkTheEnding = require("./checkTheEnding.js");
const ending = require("./checkTheEnding.js");

describe("checkTheEnding", () => {
  it("checks if str1 ends with str2", () => {
    expect(checkTheEnding("welcome", "ome")).toBe(true);
  });
});


describe("checkTheEnding", () => {
  it("checks there are no empty strings", () => {
    expect(checkTheEnding("", "")).toBe("both strings are required");
  });
});