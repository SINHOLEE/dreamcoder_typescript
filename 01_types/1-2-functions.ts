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
	fetchNum(2).then(console.log).catch(console.log);
}
