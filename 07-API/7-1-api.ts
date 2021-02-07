const array = new Array<string>("1", "2", "3");
console.log(array);

array.push("1", "2");
console.log(array);
const a = "ssss";
// const newArray = array.concat(...["s", "vv"], ...["g"]);
const newArray = array.concat("s", "vv", "g");
console.log(newArray);

// type Cat = {
// 	isCat: boolean;
// };
// type Dog = {
// 	isDog: boolean;
// };

class Animal {}

class Cat extends Animal {
	isCat: boolean = true;
	isDog: boolean = false;
}
class Dog extends Animal {
	isDog: boolean = true;
	isCat: boolean = false;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat {
	const hasIsCat = (animal as Cat).isCat !== undefined;
	const isCat = (animal as Cat).isCat;
	return hasIsCat && isCat;
}

const isAllCat = animals.every<Cat>(isCat);

console.log({ isAllCat });
