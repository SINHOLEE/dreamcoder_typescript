const x = {};
const y = {};

// console.log(x);
// console.log(y);

// const arr = [];
// console.log(arr);
// console.log(arr.__proto__.__proto__ === x.__proto__);

function CoffeeMachine(beans) {
	this.beans = beans;
	// Instance member level
	this.instanceMethod = function () {
		console.log(`인스턴스 메서드 호출! ${this}`);
	};
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
	console.log(`making coffee ${shots}and call this:${this.beans}`);
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
	this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const lm = new LatteMachine('연유우유');
console.log(lm);
lm.makeCoffee(12);
