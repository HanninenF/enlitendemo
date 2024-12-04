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
	hobby: "läsa böcker",
};

foo(o);

let arr: User[] = [
	{
		name: "Stina",
		age: 78,
		hobby: "läsa böcker",
	},
	{
		name: "Mio",
		hobby: "läsa böcker",
	},
];

console.log(arr[0]);
