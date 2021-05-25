{
	const obj = {
		name: "ellie",
	};

	// name을 출력하려면 두가지 방법이 있다.
	console.log(obj.name);
	console.log(obj["name"]); // object에 index를 접근하듯이 호출할 수 있다.

	// 타입도 인덱스를 기반으로 결정할 수 있다.?

	type Gender = "male" | "female"; // 미리 하위 타입을 선언할 수 도 있다.

	type Animal = {
		name: string;
		age: number;
		gender: Gender;
		legsType: 4 | 2 | "many";
		optional?: string;
	};

	type Name = Animal["name"]; // index로 접근하듯이 선언할 수 있다.
	type LegsType = Animal["legsType"]; // 상위 타입에서 하위타입을 불러올 수 도 있다.

	type Keys = keyof Animal; // 와 Animal에 속해있는 properties를 할당할 수 있다...

}
