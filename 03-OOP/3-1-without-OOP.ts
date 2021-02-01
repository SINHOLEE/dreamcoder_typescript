{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	const BEANS_GRAMM_PER_SHOT: number = 7; // 커피 1샷을 만드는데 필요한 콩은 7그람이다라고 정의
	let coffeeBeansGramm: number = 0;
	// 전달된 shots만큼 추가해서 커피를 만들거다.
	function makeCooffee(shots: number): CoffeeCup {
		if (coffeeBeansGramm < shots * BEANS_GRAMM_PER_SHOT) {
			throw new Error("남아있는 커피가 모잘라요!");
		}
		// 사용한 만큼 커피를 줄인다.
		coffeeBeansGramm -= shots * BEANS_GRAMM_PER_SHOT;

		return {
			shots,
			hasMilk: false,
		};
	}
	// z커피콩이 모자르면 에러를 뿜으므로 커피를 충전해본다.
	coffeeBeansGramm += 3 * BEANS_GRAMM_PER_SHOT;
	const coffee = makeCooffee(2);
	console.log(coffee);
	// 필요한 상수와 데이터 들이 전역에서 움직인다.  문제많음
}
