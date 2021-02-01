{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// 접근제어자
	// public
	// private : 외부에서 절대 볼 수 없고 접근도 불가능함
	// protected : 자식클래스만 접근가능
	class CoffeeMaker {
		// BEANS_GRAMM_PER_SHOT: number = 7; // 멤버변수로 애 변수를 할당하면 인스턴스를 만들때마다 생성하여 메모리 낭비를 하게 된다.
		// 클래스 하나가 만들어지면 변하지 않고...(final?)클래스끼리 똑같은 경우 static을 이용해 선언한다.
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		// static를 제거하면 멤버함수로 선언되어 인스턴스가 없으면 실행할 수 없다.
		// static method에서 인스턴스를 생성하도록 코드를 작성하는 이유는
		// 개발자가 멍청하게 생성하지 못하도록 제한하기 위해 만든것이다.
		// 그렇기 때문에 생성자를 private로 가려서 인스턴스를 new 를통해 만드는 것을 막고
		// 해당 클래스 메서드를 통해서면 인스턴스를 생성하도록 한다.
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}
		// setter
		// valid check
		fillCoffeeBeans(coffeeBeans: number) {
			if (coffeeBeans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
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
}
