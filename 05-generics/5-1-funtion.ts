{
	// 타입별로 checkNotNull 함수를 만드는 것은 중복을 야기한다.
	function checkNotNullNumber(arg: number | null): number {
		// 널이 아닌 경우에만 숫자를 전달해줌
		if (arg == null) {
			throw new Error("not valid number");
		}
		return arg;
	}
	function checkNotNullString(arg: string | null): string {
		// 널이 아닌 경우에만 숫자를 전달해줌
		if (arg == null) {
			throw new Error("not valid string");
		}
		return arg;
	}

	// 이렇게 할 경우 타입정보가 사라지므로 체크를 하는 의미가 없어진다.
	function checkNotNullAny(arg: any | null): any {
		// 널이 아닌 경우에만 숫자를 전달해줌
		if (arg == null) {
			throw new Error("not valid Any");
		}
		return arg;
	}

	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error(`not valid `);
		}
		return arg;
	}

	const num = checkNotNull<number>(123);
	const bol: boolean = checkNotNull(true);
}
