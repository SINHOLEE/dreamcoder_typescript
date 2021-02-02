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

	// 상속을 하는 부모클래스의 생성자는 private 접근제어자일경우 상속을 할 수 없다.
	// 이를 해결하기 위해 접근제어자를 제거하거나, protected 접근제어자를 이용한다.
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

	// 설탕 추가하는 메이커
	class SweetCoffeeMaker extends CoffeeMachine {
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return {
				...coffee,
				hasSugar: true,
			};
		}
	}
	const basicMachine = new CoffeeMachine(22);
	const latteMachine = new CaffeLatteMachineInheritaned(22, "123123123aa");
	const sweetMachine = new SweetCoffeeMaker(22);
	console.log(basicMachine.makeCoffee(2));
	console.log("==================================");
	console.log(latteMachine.makeCoffee(2));
	console.log(latteMachine);
	console.log("========sweet===========");

	console.log(sweetMachine.makeCoffee(2));

	// 다형성을 이용하면 한가지의 클래스나 인터페이스를 이용하여 여러 구현체를 조작할 수 있다.

	// 인터페이스의 배열타입이라 정의하면, 인터페이스에서 규약한 하나의 api만 호출할 수 있게 된다.
	const machines: CoffeeMaker[] = [
		new CoffeeMachine(12),
		new CaffeLatteMachineInheritaned(12, "sss"),
		new SweetCoffeeMaker(222),
	];

	machines.forEach((machine) => {
		console.log("-----------------");
		machine.makeCoffee(1);
	});
	// 다형성의 장점
	// 한 부모클래스나 한 인터페이스를 통해 다양한 구현체들을 통일성 있게 관리하도록 한다. => 공통된 api를 호출한다
}
