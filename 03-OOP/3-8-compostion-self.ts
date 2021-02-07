{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface MilkSteamer {
		makeMilkCoffee(coffee: CoffeeCup): CoffeeCup;
	}
	interface SugarExtract {
		makeSuggarCoffee(coffee: CoffeeCup): CoffeeCup;
	}

	class EmptyMilkSteamer implements MilkSteamer {
		makeMilkCoffee(cup: CoffeeCup): CoffeeCup {
			return {
				...cup,
			};
		}
	}
	class CheapMilkSteamer implements MilkSteamer {
		private steamMilk() {
			console.log("Steaming milk...");
		}

		makeMilkCoffee(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();

			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	class FancyMilkSteamer implements MilkSteamer {
		private steamMilk() {
			console.log("Steaming Fancy milk...");
		}
		private addMagicFlavor() {
			console.log("add magic flavor");
		}

		makeMilkCoffee(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			this.addMagicFlavor();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}
	class sugarFromJar implements SugarExtract {
		private getSugar() {
			console.log("~~~getting sugar from jar");
		}
		makeSuggarCoffee(cup: CoffeeCup): CoffeeCup {
			this.getSugar();
			return { ...cup, hasSugar: true };
		}
	}
	class EmptySugar implements SugarExtract {
		makeSuggarCoffee(cup: CoffeeCup): CoffeeCup {
			return { ...cup };
		}
	}
	class sugarFromCandy implements SugarExtract {
		private getSugar() {
			console.log("!!!getting sugar from Candy");
		}
		makeSuggarCoffee(cup: CoffeeCup): CoffeeCup {
			this.getSugar();
			return { ...cup, hasSugar: true };
		}
	}

	// 조합 할 수 있다!!
	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		constructor(
			coffeeBeans: number,
			private milkSteamer: MilkSteamer,
			private sugarExtract: SugarExtract
		) {
			this.coffeeBeans = coffeeBeans;
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
			return { shots, hasMilk: false };
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			const cup = this.extract(shots);

			const milkCoffee = this.milkSteamer.makeMilkCoffee(cup);
			const sugarCoffee = this.sugarExtract.makeSuggarCoffee(milkCoffee);
			return sugarCoffee;
		}
	}

	const milkCoffeeMaker = new CoffeeMachine(
		23,
		new CheapMilkSteamer(),
		new EmptySugar()
	);
	const coffee = milkCoffeeMaker.makeCoffee(2);
	console.log("만들고 난 후");
	console.log(coffee);
	console.log("-----------------------------");
	const fancyMilkAndCandyCafeLatte = new CoffeeMachine(
		22,
		new FancyMilkSteamer(),
		new sugarFromCandy()
	);
	const coffee2 = fancyMilkAndCandyCafeLatte.makeCoffee(2);
	console.log("만들고 난 후");
	console.log(coffee2);
}
