{
	/**
	 * 타입추론
	 * 언제쓰면 안좋은지 확인하자.
	 *
	 */
	let text = "asd";
	// text = 1; // Type 'number' is not assignable to type 'string'.ts(2322) 타입이 임의로 정의되었기 때문에 컴파일 에러가 나타난다.
}
