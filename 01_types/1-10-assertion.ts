{
	/**
	 *  Type assertion 좋은게 아니다.
	 */

	// 불가피하게 쓸경우가 있다.

	function findNumbers(): string[] | undefined {
		return;
	}

	const numbers = findNumbers();
	// numbers.push("as"); // 위와같이 함수를 구현할 경우 undefined일 경우 push를 사용할 수 없기때문에 컴파일러 ㄷ단에서 에러를 발생시킨다.
	if (numbers) {
		// 만약 numbers라는 객체가 있다면 이 객체는 string[]타입임을 확신하고push api를 사용할 수 있다.
		numbers.push("as");
	}
	numbers!.push("as"); // 똑같은 의미로 numbers가 무조건 무조건 push api를 사용할 수 있다고 생각한다면 타입 어셜션을 사용하여(!) 해당 로직을 구현할 수 있다.
	// 하지만 코드를 작성하다보면 제대로 돌아가지 못하는 경우도 있기 때문에 웬만해서는 쓰지 않는것이 좋다.
}
