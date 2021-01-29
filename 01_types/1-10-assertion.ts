{
	/**
	 *  Type assertion 좋은게 아니다.
	 */

	// 불가피하게 쓸경우가 있다.

	function findNumbers(): string[] | undefined {
		return;
	}

	const numbers = findNumbers();
	numbers!.push("as");
}
