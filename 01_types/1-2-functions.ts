{
	// 인자와 리턴값의 타입을 정하지 않았기때문에 복잡한 함수일 경우 결과값을 보장할 수 없다.
	// function jsAdd(num1, num2) {
	// 	return num1 + num2;
	// }
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}
	console.log(add(1, 2));
	console.log(add(1, 3));
	// console.log(add(1, "a"));

	function fetchNum(id: number): Promise<number> {
		return new Promise((resolve, reject) => {
			if (id === 1) {
				resolve(100);
			} else {
				reject(new Error("에러메시지!"));
			}
		});
	}

	fetchNum(1).then(console.log);
	// fetchNum(2).then(console.log).catch(console.log);

	// 타입스크립트에서 ?

	function printName(firstName: string, lastName: string) {
		console.log(firstName);
		console.log(lastName);
	}

	printName("stive", "jobs");
	// printName('stive') // 두개 인자를 정의했기때문에 두개의 인자를 다 써야한다.
	// 이때 optional parameter를 사용할 수 있다.
	function printName2(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName);
	}

	printName2("sinho"); // 문제없다.
	printName2("sinho", "lee");

	// Default parameter
	// optional paramater는 함수에 인자를 넣지 않는경우 undefined이 나오겠지만
	// Default parameter는 정해진 값을 사용한다.
	function printMessage(message: string = "hello") {
		console.log(message);
	}

	printMessage();

	// Rest parameter : 인자개수에 상관없이 받을 수 있다.
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((prev: number, curr: number) => prev + curr, 0);
	}

	console.log(addNumbers(1, 2, 3));
	console.log(addNumbers(1, 2, 3, 4));
	// console.log(addNumbers(1, 2, 3, 'a')); // 숫자타입이 아니면 에러를 반환한다.
	console.log(addNumbers(1, 2, 3, 4, 5));
}
