{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};
	// 추상화 용도
	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface CommercialCoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
		fillCoffeeBeans(beans: number): void;
		clean(): void;
	}

	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		private constructor(coffeeBeans: number) {
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
	const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
	// 접근제어자를 통해 추상화를 하거나 인터페이스를 통해 추상화를 한다.
	maker.fillCoffeeBeans(2);
	maker.makeCoffee(2);
	// 커피머신은커피메이커와 동일하다.

	const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
	// maker2.fillCoffeeBeans(2) // 인터페이스에 없는 메소드는 사용할 수 없다.
	maker2.makeCoffee(3);

	const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
	maker3.fillCoffeeBeans(2);
	maker3.makeCoffee(3);
	maker3.clean();

	class AmateurUser {
		constructor(private machine: CoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2); // 2샷밖에 없는 커피만드는 능력 하나밖에 없다,
			console.log({coffee});
		}
	}
	class ProBarista {
		// 이때 커피머신을 소유하고 있으므로 has a 관계이다...?
		constructor(private machine: CommercialCoffeeMaker) {}
		makeCoffee() {
			const coffee = this.machine.makeCoffee(2); // 2샷밖에 없는 커피만드는 능력 하나밖에 없다,
			console.log({coffee});
			this.machine.fillCoffeeBeans(30); // 커피를 만들수 있는것 뿐 아니라 커피콩을 채울수도 있고
			this.machine.clean(); // 청소할 수 도 있다.
		}
	}

	// 추상화된 인스턴스를 가지고
	const maker5: CoffeeMachine = CoffeeMachine.makeMachine(42);

	const amateur = new AmateurUser(maker5);
	const proBarista = new ProBarista(maker5);

	console.log();
	amateur.makeCoffee();
	console.log("====================");
	proBarista.makeCoffee();
}
