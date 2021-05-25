{
	// 기존에 선언된 타입을 이용하면서 다른 형태로 변환할 수 있는 것

	type Video = {
		title: string;
		author: string;
		// 2. 또는 새로운 프로퍼티가 추가되곤 한다.
		description: string;
	};

	// 1. 개발하다가 옵셔널한 타입이 필요할 경우 새로 정의하곤 했다.
	type videoOptional = {
		title?: string;
		author?: string;
		// 2.1 description이 추가되었으므로 옵셔녈한 타입도 추가해야한다..ㅠ
		description?: string;
	};

	// 3 readonly 타입이 필요할경우?
	type VideoReadonly = {
		readonly title: string;
		readonly author: string;
		// 2. 또는 새로운 프로퍼티가 추가되곤 한다.
		readonly description: string;
	};

	// 4. 위와 같이 변경사항이 있을때마다 새로운 타입을 선언하다보면 코드가 지저분해지고 스파게티 코드가 될것이다. 이를 해결할 수 있는것이 바로 map type이다

	type Optional<T> = {
		[P in keyof T]?: T[P]; // for ... in
	};

	// map type을 이용하면 재사용성이 높아진다
	type VideoOptional = Optional<Video>;

	const videoOptional: VideoOptional = {
		title: "123",
		author: "12",
		description: "123",
	};

	type Animal = {
		name: string;
		age: number;
	};

	const animal: Optional<Animal> = {
		name: "123",
	};

	type ReadOlny<T> = {
		readonly [P in keyof T]: T[P];
	};

	const video: ReadOlny<Video> = {
		description: "a",
		author: "112",
		title: "asd",
	};

	type Nullable<T> = {
		[P in keyof T]: T[P] | null;
	};
}
