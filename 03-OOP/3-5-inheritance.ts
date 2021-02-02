{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};
	// 추상화 용도
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	// class CaffeLatteMachine implements CoffeeMaker {
	// 	private static BEANS_GRAMM_PER_SHOT: number = 7;
	// 	private coffeeBeans: number = 0;

	// 	private constructor(coffeeBeans: number) {
	// 		this.coffeeBeans = coffeeBeans;
	// 	}

	// 	static makeMachine(coffeeBeans: number): CaffeLatteMachine {
	// 		if (coffeeBeans < 0) {
	// 			throw new Error("value for beans should be greater than 0");
	// 		}

	// 		return new CaffeLatteMachine(coffeeBeans);
	// 	}
	// 	fillCoffeeBeans(coffeeBeans: number) {
	// 		if (coffeeBeans < 0) {
	// 			throw new Error("value for beans should be greater than 0");
	// 		}
	// 		this.coffeeBeans += coffeeBeans;
	// 	}
	// 	clean() {
	// 		console.log("cleaning the machine...");
	// 	}
	// 	// 커피를 갈고, 갈았으면 재고를 줄여준다.
	// 	private grindBeans(shots: number) {
	// 		console.log(`grinding beans for ${shots}`);
	// 		if (this.coffeeBeans < shots * CaffeLatteMachine.BEANS_GRAMM_PER_SHOT) {
	// 			throw new Error("남아있는 커피가 모잘라요!");
	// 		}
	// 		this.coffeeBeans -= shots * CaffeLatteMachine.BEANS_GRAMM_PER_SHOT;
	// 	}
	// 	private preheat(): void {
	// 		console.log("hrating up...");
	// 	}

	// 	private extract(shots: number): CoffeeCup {
	// 		console.log(`pulling ${shots} shots`);
	// 		return {shots, hasMilk: false};
	// 	}

	// 	makeCoffee(shots: number): CoffeeCup {
	// 		this.grindBeans(shots);
	// 		this.preheat();
	// 		const coffee = this.extract(shots);
	// 		return {
	// 			...coffee,
	// 			hasMilk: true,
	// 		};
	// 	}
	// }
	// 이렇게 만들 수 있지만 중복된 코드가 너무 많다. 이렇때 상속을 이용하여 중복을 줄일 수 있다.

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

	// 카페라떼 머신을 만들고 싶다!

	const basicMachine = new CoffeeMachine(22);
	const latteMachine = new CaffeLatteMachineInheritaned(22, "123123123aa");
	console.log(basicMachine.makeCoffee(2));
	console.log("==================================");
	console.log(latteMachine.makeCoffee(2));
	console.log(latteMachine);
}
