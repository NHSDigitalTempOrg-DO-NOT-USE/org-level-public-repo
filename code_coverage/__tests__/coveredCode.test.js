import { multiplyBy10, multiplyBy5 } from "../coveredCode.js";

describe("multiplyBy5", () => {
  it("multiplies numbers by 5", () => {
    const numberToMultiply = 2;
    const expectedNumber = 10;

    const actualNumber = multiplyBy5(numberToMultiply);

    expect(actualNumber).toEqual(expectedNumber);
  });
});
describe("multiplyBy10", () => {
  it("multiplies numbers by 10", () => {
    const numberToMultiply = 2;
    const expectedNumber = 20;

    const actualNumber = multiplyBy10(numberToMultiply);

    expect(actualNumber).toEqual(expectedNumber);
  });
});
