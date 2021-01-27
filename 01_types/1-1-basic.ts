{
	// 모듈을 작성하지 않는다면 글로벌스코프로 잡힌다.

	// 변수선언 키워드 const let
	// let VS var
	// var는 왜 쓰면 안될까 다시 보자.

	// let 재할당 가능
	let name = "sinho";
	name = "mini";

	//types
	// primitive : number, string, boolean, symbol, null, undefined, bigint

	// undefined : 값이 있는지 없는지 확실히 모르는 상태

	let age: number | undefined;
	const arr1: number[] = [1, 2, 3, 4, 5];
	const arr2: number[] = [0, 2, 3, 4, 5];

	// undefined를 return type에 설정하지 않으면 컴파일 에러가 발생
	// function findOne(arr: number[]): number{
	function findOne(arr: number[]): number | undefined {
		return arr.find((item) => item === 1);
	}
	console.log(findOne(arr1));
	console.log(findOne(arr2));
	// null : 값이 비어있다는게 확실한 상태 가능한 쓰지 말자.

	//unknown : 어떤 타입도 쓸 수 있는 타입 안쓰는것이 최고선이다.
	let notSure: unknown = 0;
	notSure = "1";
	notSure = [];
	notSure = true;

	// any 어떤 변수든 담을 수 있다. unKnown이랑 뭐가 다르지?
	// 가능한 쓰지 않는것이 좋다.
	let anyThing: any = 0;
	anyThing = "1";
	anyThing = [];
	anyThing = true;

	// void 보이드일경우 생략가능하지만 회사마다의 스타일 가이드를 따르자.
	function print(): void {
		console.log("hh");
		return;
	}

	let unUsable: void = undefined; // 언디파인 말고는 못쓴다. 이런식으로 쓰지 않는게 좋다.

	// never
	function throwError(message: string): never {
		// message를 서버에 보내서 로그를 남기고
		throw new Error(message);
		// 리턴되지 않을겅우 네버를 쓴다.
		// case1 에러상황
		// case2 무한루프
		while (true) {}
	}

	// object -> primitive 타입을 제외한 모든 타입의 데이터도 담을 수 있다 -> 최대한 쓰지 말자.
	let obj: object;
}
