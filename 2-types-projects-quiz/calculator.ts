/**
 * Let's make a calculator 🧮
 */
// 내가 직접 구현한 코드
// function calculate(operator: string, x: number, y: number): number {
// 	if (operator === "add") {
// 		return x + y;
// 	} else if (operator === "substract") {
// 		return x - y;
// 	} else if (operator === "multiply") {
// 		return x * y;
// 	} else if (operator === "divide") {
// 		return Math.floor(x / y);
// 	} else if (operator === "remainder") {
// 		return x % y;
// 	}

// 	return 1;
// }

// 나의 미비점
// 1) 타입을 정의하지않았다.
// 2) 에러 thorw를 하지 않았다.
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(command: string, a: number, b: number): number {
	switch (command) {
		case "add":
			return a + b;
		case "substract":
			return a - b;
		case "multiply":
			return a * b;
		case "divide":
			return a / b;
		case "remainder":
			return a % b;
		default:
			throw new Error("에러!");
	}
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
console.log(calculate("remainde", 5, 2)); // 1
