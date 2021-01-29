{
	/**
	 * 타입추론
	 * 언제쓰면 안좋은지 확인하자.
	 *
	 */
	let text = "asd";
	// text = 1; // Type 'number' is not assignable to type 'string'.ts(2322) 타입이 임의로 정의되었기 때문에 컴파일 에러가 나타난다.

	function add(x: number, y: number) {
		return x + y;
	}
	const result = add(1, 3); // return 값을 명시적으로 지정하지 않았지만 리턴값이 숫자이므로 자동적으로 타입을 추론한다.
	// 하지만 최대한 타입을 명시하는게 좋다.

	// void는 생략해도 좋다.
}
