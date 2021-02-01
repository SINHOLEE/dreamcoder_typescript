{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {
		// BEANS_GRAMM_PER_SHOT: number = 7; // 멤버변수로 애 변수를 할당하면 인스턴스를 만들때마다 생성하여 메모리 낭비를 하게 된다.
		// 클래스 하나가 만들어지면 변하지 않고...(final?)클래스끼리 똑같은 경우 static을 이용해 선언한다.
		static BEANS_GRAMM_PER_SHOT: number = 7;
		coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		// static를 제거하면 멤버함수로 선언되어 인스턴스가 없으면 실행할 수 없다.
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}
		refillCoffeeBeans(coffeeBeans: number) {
			this.coffeeBeans += coffeeBeans;
		}

		makeCooffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error("남아있는 커피가 모잘라요!");
			}
			// 사용한 만큼 커피를 줄인다.
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

			return {
				shots,
				hasMilk: false,
			};
		}
	}
	// 전달된 shots만큼 추가해서 커피를 만들거다.
	// z커피콩이 모자르면 에러를 뿜으므로 커피를 충전해본다.
	const coffeeMaker1 = new CoffeeMaker(21);
	const coffeeMaker2 = new CoffeeMaker(14);

	// static method를 이용하여 생성자처럼 쓴 인스턴스 -> singleton 패턴에 이용한다.
	const coffeeMaker3 = CoffeeMaker.makeMachine(42);
	console.log({ coffeeMaker1 });
	console.log({ coffeeMaker2 });
	console.log({ coffeeMaker3 });
	coffeeMaker1.refillCoffeeBeans(7);
	const coffee1 = coffeeMaker1.makeCooffee(2);
	const coffee2 = coffeeMaker1.makeCooffee(2);
	console.log(coffee1);
	console.log(coffee2);

	// 위 프로젝트의 문제점
	// 1) 인스턴스의 coffeeBeans를 직접 설정할 수 있다.
	coffeeMaker1.coffeeBeans += 8;
	// 2) 말도 안되는 값으로 설정할 수 있다 -> 벨리데이션 체크가 안된다.
	coffeeMaker1.coffeeBeans -= 30;
	// 해결방법 -> 접근제어자로 제어한다.
}
