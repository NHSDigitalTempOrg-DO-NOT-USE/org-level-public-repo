import { multiplyBy5 } from "../coveredCode.js";

describe("multiplyBy5", () => {
  it("multiplies numbers by 5", () => {
    const numberToMultiply = 2;
    const expectedNumber = 10;

    const actualNumber = multiplyBy5(numberToMultiply);

    expect(actualNumber).toEqual(expectedNumber);
  });
});
