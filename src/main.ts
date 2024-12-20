import foo from "./func";
import User from "./user";

// let x = 12;

// Gamla från JS: number, string, boolean...
// Nya med TS: any

// console.log(x);

// thing : datatyp

const o: User = {
  name: "Niklas",
  age: 47,
  hobbies: ["läsa böcker", "dammsuga"],
};

foo(o);

let arr: User[] = [
  {
    name: "Stina",
    age: 78,
    hobbies: ["läsa böcker", "äta mat"],
  },
  {
    name: "Mio",
    age: 45,
    hobbies: ["läsa böcker", "spela spel", "janne"],
  },
];

console.log(arr[0], arr[1]);

const oldestUser = (x: User[]) => {
  let age: number[] = [0];
  x.forEach((user, index) => {
    age[index] = user.age;
  });
  console.log(`age=${age}`);
  const maxNumbers = Math.max(...age);
  return maxNumbers;
};

/* ⭐ Skapa en funktion averageAge i enlitendemo. Funktionen tar emot arrayen med användare och returnerar en siffra: medelåldern på alla användare i arrayen. */

const averageAge = (x: User[]) => {
  let sumAges: number = 0;
  x.forEach((user) => {
    sumAges += user.age;
  });
  return sumAges / 2;
};

console.log(`average age= ${averageAge(arr)}`);

/* const averageNumberOfHobbies = (x: User[]) => {
  let sumHobbies: string[] = [""];
  x.forEach((user) => {
    sumHobbies.push(user.hobbies[]);
  });
  const numberOfElements = sumHobbies.length;
  return numberOfElements;
}; */

const oAge = oldestUser(arr);
/* const newNumber = averageAge(arr); */
/* const numberOfHobbies = averageNumberOfHobbies(arr);
console.log(`numberOfHobbies are=${numberOfHobbies}`); */
/* console.log(`newNumber is ${newNumber},
\noAge is ${oAge}`); */

/* const averageAge = (x: User[]) => {
	let sumAge: number = 0;
	x.forEach((user) => {
	  sumAge += user.age;
	});
	/* const sumAge = (x + y) / 2; 
  
	return sumAge / 2;
  }; */

/* Skapa en funktion oldestUseri enlitendemo. Funktionen tar emot arrayen med användare och returnerar en siffra: den högsta åldern av alla användare.

Alla användara ska ha en eller flera hobbies. Skapa en funktion averageNumberOfHobbies. Funktionen tar emot en array av användare och returnerar en siffra: medelantalet hobbies per användare.
 */

const averageNumberOfHobbies = (x: User[]) => {
  let totalHobbies: number = 0;
  x.forEach((user) => {
    totalHobbies += user.hobbies.length;
  });
  return totalHobbies / x.length;
};

console.log(
  `medelantalet hobbies per användare= ${averageNumberOfHobbies(arr)}`
);
