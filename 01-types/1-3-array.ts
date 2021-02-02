{
	// Array

	const fruits: string[] = ["apple", "banana"];
	const fruitsWithGeneric: Array<string> = ["apple", "banana"];

	// 차이점 : readonly를 사용하려면 제네릭으로 생성한 타입은 지원하지 않는다.
	function printArray(fruits: readonly string[]) {
		const a = fruits.map((fruit) => ({
			fruit,
		}));
		console.log(fruits);
		console.log(a);
	}
	printArray(fruits);
	printArray(fruitsWithGeneric); // 하지만 함수를 호출할 떄 제네릭으로 생성한 배열을 인자로 사용할 수는 있다.

	// function printArray2(fruits: readonly array<string>) {
	// 	const a = fruits.map((fruit) => ({
	// 		fruit,
	// 	}));
	// 	console.log(fruits);
	// 	console.log(a);
	// }
	// printArray2(fruits);
	// printArray2(fruitsWithGeneric);

	// tuple
	// 서로다른 타입의 데이터를 담을 수 있다.
	// 튜플사용을 권장하지 않는다.
	// 왜? 인덱스로 접근하는 방식은 가독성을 깨기때문에
	// 차라리 class, interface, type alias 사용하는것이 좋다.
	let student: [string, number];

	student = ["sinho", 12];
	console.log(student[0]);
	console.log(student[1]);

	// object distructoring
	const [name, age] = student;
	console.log(name);
	console.log(age);

	// 튜플을 사용하는 경우 ex) react useState
	// 동적으로 묶어서 사용하고싶을때만 튜플을 쓰고 그 외에는 대안을 사용하도록한다.
}
