{
	// 타입스크립트가 꼭 필요한 이유중 하나
	/**
	 * 내가 타입을 정의할 수 있다.
	 */
	type Text = string;
	let name: Text;

	name = "sinho";

	type Student = {
		name: string;
		age: number;
	};

	const student: Student = {name: "sinho", age: 123};
	// const student2: Student = {animal: "sinho", age: 123}; // animal같이 다른 타입을 쓸 수 없다.

	/**
	 * string literal types
	 * 어디에 쓰는 물건인고.
	 */
	type Name = "name";
	let sinho: Name = "name"; // 신호라는 변수 안에 Name타입인 값만 넣을 수 있고, ""를 작성하면 힌트로 "name"이 나타난다.
	type onlyTrue = true;
	// const isSome: onlyTrue = false // 다른 불리언값은 할당할 수 없다.
	const isSome: onlyTrue = true;
}
