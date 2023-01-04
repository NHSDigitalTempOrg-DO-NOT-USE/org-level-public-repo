export const multiplyBy5 = (number_to_multiply) => {
  return number_to_multiply * 5;
};

export const multiplyBy10 = (number_to_multiply) => {
  return number_to_multiply * 10;
};

export const uncoveredMethod = () => {
  return "I AM NOT COVERED BY A TEST";
};
export const methodThatSmells = () => {
  let someDuplicatedVar1 = "THE SAME STRING";
  let someDuplicatedVar2 = "THE SAME STRING";
  let someDuplicatedVar3 = "THE SAME STRING";
  if (false) {
    return someDuplicatedVar1;
  }
  return "I SMELL";
};
