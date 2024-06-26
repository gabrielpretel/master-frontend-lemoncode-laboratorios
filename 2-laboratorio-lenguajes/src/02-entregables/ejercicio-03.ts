console.log("************** DELIVERABLE 03 *********************");
const houseOfTheDragon = {
  title: "House of the Dragon",
  mainHouse: "Targaryen",
  dragonCount: 17,
  location: "Westeros",
};

console.log("************** CLONE *********************");

function clone<T>(source: T): T {
  const clonedObject = { ...source };

  return clonedObject;
}

console.log(clone(houseOfTheDragon));

console.log("************** MERGE *********************");

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const mergedObject = {
    ...target,
    ...source,
  };

  return mergedObject;
}

console.log(merge(a, b));
