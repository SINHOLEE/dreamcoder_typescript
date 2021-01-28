{
	/**
	 * 상수를 만들때, const로 사용한다.
	 */
	// javascript
	const MAX_NUM = 6;
	const MAX_STUDENT_PER_CLASS = 10;
	const MON = 0;
	const TUE = 1;
	const WEN = 2;

	// enum 대용
	const DAYS_ENUM = Object.freeze({MONDAY: 0, TUESDAY: 1, WENSDAY: 2});
	const dayOfToday = DAYS_ENUM.MONDAY;

	// typescript
	enum Days {
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Satarday,
		Sunday,
	}
	console.log(Days.Monday); // 0부터 인덱스로 접근할 수 있게 반환한다.
	enum Days2 {
		Monday = "mon",
		Tuesday = "tue",
	}
	console.log(Days2.Tuesday);

	// 이넘으로 할당한 변수에 어떤 숫자를 다시 할당할 수 있다.
	// 이넘을 쓰면 타입보장을 받지 못한다.
	// 이넘대신 유니언타입을 사용한다.

	type DaysOfWeek = "Monday" | "Tuesday" | "wednesday";
	let dayofweek: DaysOfWeek = "Monday";
	console.log({dayofweek});
	// dayofweek = "1" // 에러
	// dayofweek = 1 // 에러
	dayofweek = "Tuesday"; // ok
	console.log({dayofweek});

	// 그럼 언제써야할까?
	// 모바일 클라이언트에 연결해서 사용할때만큼은 필요하다. 즉 웹 생태계에서는 거의 필요 없다고 생각한다.
}
