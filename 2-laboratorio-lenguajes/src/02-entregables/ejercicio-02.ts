console.log("************** DELIVERABLE 02 *********************");

const concat = (a: any[], b: any[]): any[] => [...a, ...b];

console.log(concat([1, 2], [3, 4]));
console.log(concat([1, 2], ["a", "b"]));
console.log(concat(["a", "b", 0], ["c", 1, { name: "Gabriel" }]));

// Nota: Estoy usando any[] por flexibilidad y que al menos asegure que lo que
// recibe y devuelve la función sean arrays

console.log("************** OPTIONAL *********************");

const dynamicConcat = (...args: any[]): any[] =>
  args.reduce((acc, array) => [...acc, ...array], []);

console.log(dynamicConcat([1, 2], [3, 4], ["hello", "goodbye"], []));
