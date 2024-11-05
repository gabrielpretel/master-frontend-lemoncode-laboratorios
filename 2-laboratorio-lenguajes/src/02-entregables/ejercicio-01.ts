console.log("************** DELIVERABLE 01 *********************");

interface Character {
  name: string;
  house: string;
}
export const characters: Character[] = [
  { name: "Rhaenyra Targaryen", house: "Targaryen" },
  { name: "Alicent Hightower", house: "Hightower" },
  { name: "Corlys Velaryon", house: "Velaryon" },
];

// HEAD
console.log("************** HEAD *********************");

const head = <H>(array: H[]): H | string => {
  const [firstElement] = array;
  return firstElement ?? "No first element to return.";
};

console.log(head(["hello", "good morning", "good bye"]));
console.log(head([1, 2, 3]));
console.log(head(characters));

// TAIL
console.log("************** TAIL *********************");

const tail = <H>(array: H[]): H[] | string => {
  const [, ...other] = array;
  return other?.length > 0 ? other : "No elements to return after the first.";
};

console.log(tail(["hello", "good morning", "good bye"]));
console.log(tail([1, 2, 3]));
console.log(tail(characters));

// INIT
console.log("************** INIT *********************");

const init = <H>(array: H[]): H[] | string => {
  const noLastElement = array.slice(0, array.length - 1);
  return noLastElement.length > 0
    ? noLastElement
    : "No elements to return without the last.";
};

console.log(init(["hello", "good morning", "good bye"]));
console.log(init([1, 2, 3]));
console.log(init(characters));

// LAST
console.log("************** LAST *********************");

const last = <H>(array: H[]): H | string => {
  const [lastElement] = array.slice(-1);
  return lastElement ?? "No last element to return.";
};

console.log(last(["hello", "good morning", "good bye"]));
console.log(last([1, 2, 3]));
console.log(last(characters));
