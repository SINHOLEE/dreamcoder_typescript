{
	interface Employee {
		// 월급을 지급 해야한다?
		pay(): void;
	}

	class FullTimeEmployee implements Employee {
		pay() {
			console.log("full time !!");
		}
		workFullTime() {}
	}
	class PartTimeEmployee implements Employee {
		pay() {
			console.log("part time !!");
		}
		workPartTime() {}
	}

	// 한 직원에 임금을 지불하고, 그 직원을 반환한다.
	// 이때 반환된 employee는 각자 가지고 있는 workFullTime, workParttime 메소드를 잃는다
	// 즉 세부적인 타입의 정보를 잃고 추상적인 타입의 정보만 남는다 이는 좋지 못한 코드이다.
	function payBad(employee: Employee): Employee {
		employee.pay();
		return employee;
	}

	//대박 T는 Employee를 확장한 타입만 받을 수 있다.
	function pay<T extends Employee>(employee: T): T {
		employee.pay(); // 어떻게 쓰냐!!

		return employee;
	}

	const sinho = new FullTimeEmployee();
	const ellie = new PartTimeEmployee();
	sinho.workFullTime();
	ellie.workPartTime();

	const sinhoAfterPay = pay(sinho);
	sinhoAfterPay.workFullTime();
	const ellieAfterPay = payBad(ellie);
	// ellieAfterPay.workPartTime(); // 세부타입의 정보가 사라짐

	const obj = {
		name: "sinho",
		age: 12,
	};
	const obj2 = {
		animal: "dog",
	};
	type person = {
		name: string;
		age: number;
	};

	type animal = {
		animal: string;
	};

	// 타입이 보장되면서...? 값을 반환하는 함수를 제네릭을 이용하여 만들어보자...
	// function getValue<T extends person | animal>(object: T, key: string): string | number {
	// 	return object[key];
	// constrain
	function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
		return obj[key];
	}
	console.log(getValue(obj, "name"));
	console.log(getValue(obj, "age"));
	// console.log(getValue(obj, "animal")); // obj에 animal인 keyㅏ 없기때문에 컴파일 에러를 반환한다.
	console.log(getValue(obj2, "animal"));
}
