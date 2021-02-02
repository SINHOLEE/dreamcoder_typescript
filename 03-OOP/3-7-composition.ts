{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};
	// 추상화 용도
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			if (coffeeBeans < 0) {
				throw new Error("value for beans should be greater than 0");
			}

			return new CoffeeMachine(coffeeBeans);
		}
		fillCoffeeBeans(coffeeBeans: number) {
			if (coffeeBeans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += coffeeBeans;
		}
		clean() {
			console.log("cleaning the machine...");
		}
		// 커피를 갈고, 갈았으면 재고를 줄여준다.
		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("남아있는 커피가 모잘라요!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}
		private preheat(): void {
			console.log("hrating up...");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`pulling ${shots} shots`);
			return {shots, hasMilk: false};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class CaffeLatteMachineInheritaned extends CoffeeMachine {
		constructor(coffeeBeans: number, public readonly serialNumber: string) {
			super(coffeeBeans);
		}

		private steamMilk() {
			console.log("Steaming milk...");
		}
		// 오버라이드를 어떻게 하나?
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		getSugar() {
			console.log("getting some sugar");
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.getSugar();
			return {
				...coffee,
				hasSugar: true,
			};
		}
	}

	// 스윗카페라테머신을 만들어보자! 믹스인!!!!!?!
	class SweetCafeeLatteMaker extends CoffeeMachine {}

	const machines: CoffeeMaker[] = [
		new CoffeeMachine(12),
		new CaffeLatteMachineInheritaned(12, "sss"),
		new SweetCoffeeMaker(222),
	];

	machines.forEach((machine) => {
		console.log("-----------------");
		machine.makeCoffee(1);
	});
	// 컴포지션을 논하기 전에 상속의 단점을 먼저 짚고 들어간다.
	// 문제점 1) 상속의 깊이가 깊어질수록 관계가 복잡해질 수 있다.
	// 문제점 2) 상속은 수직적으로 내려가기때문에 결합도가 높아진다... 의존성이 높다? -> 즉 부모클래스의 변화가 자식클래스에 영향을 끼친다.
	// 문제점 3) 새로운 기능의 추가시 힘들다.
	// 타입스크립트의 문제) 2단계 이상의 부모클래스를 상속할 수 없다.
	//  컴포지션을 이용해도 커플링 높다!! -> 인터페이스를 이용해서 커플링을 낮출 수 있다.

	// 4.17 부터 다시 듣자
}
