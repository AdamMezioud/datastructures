function getEvenNumbers(array) {
  const evenNumbers = [];
  for (const element of array) {
    if (element % 2 === 0) {
      evenNumbers.push(element);
    }
  }
  return evenNumbers;
}

function getPeopleOver30(people) {
  const peopleOver30 = [];
  for (const person of people) {
    if (person.age > 30) {
      peopleOver30.push(person);
    }
  }
  return peopleOver30;
}

{
  constructor();
  this.items = [];
}

push(item);
this.items.push(item);

pop();
return this.items.pop();

peek();
return this.items[this.items.length - 1];

isEmpty();
return this.items.length === 0;

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function removeVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const newString = [];
  for (const char of string) {
    if (!vowels.includes(char)) {
      newString.push(char);
    }
  }
  return newString.join("");
}

function getUniqueElements(array1, array2) {
  const uniqueElements = new Set();
  for (const element of array1) {
    uniqueElements.add(element);
  }
  for (const element of array2) {
    uniqueElements.add(element);
  }
  return Array.from(uniqueElements);
}
const array = [1, 2, 3, 4, 5];
const evenNumbers = getEvenNumbers(array);

console.log(evenNumbers); // [2, 4]
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Carol", age: 27 },
];
const peopleOver30 = getPeopleOver30(people);

console.log(peopleOver30); // [{ name: "Bob", age: 35 }]
