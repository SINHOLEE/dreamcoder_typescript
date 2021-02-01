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
			if (coffeeBeans < 0) {
				throw new Error("value for beans should be greater than 0");
			}

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
	const maker = CoffeeMaker.makeMachine(32);
	const cofffee = maker.makeCooffee(2);

	class User {
		firstName: string;
		lastName: string;
		fullName: string;
		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
			// 생성자 함수에서 할당한 값에서 의존하고 있는 변수가 있다면, 그 변수(firstName 혹은 lastName0)가 변경되더라도 의존하고 있는(fullName)은 변경되지 않는다.
			// 이때 필요한 것이 getter 함수 이다.
			this.fullName = `${this.firstName} ${this.lastName}`;
		}
	}

	console.log("------------------- class User--------------");
	const user = new User("sinho", "lee");
	console.log(user);
	user.firstName = "qqq";
	console.log(user);

	class UserWithGetter {
		firstName: string;
		lastName: string;
		// 함수형으로 보이지만 멤버변수처럼 사용할 수 있다.
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}
		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
	}

	console.log("------------------- class UserWithGetter--------------");
	const user2 = new UserWithGetter("sinho", "lee");
	console.log(user2.fullName);
	user2.firstName = "qqq";
	console.log(user2.fullName);

	class UserWithGetterAndPrivate {
		private firstName: string;
		private lastName: string;
		// 함수형으로 보이지만 멤버변수처럼 사용할 수 있다.
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}
		constructor(firstName: string, lastName: string) {
			this.firstName = firstName;
			this.lastName = lastName;
		}
	}
	console.log("------------------- class UserWithGetterAndPrivate--------------");
	const user3 = new UserWithGetterAndPrivate("sinho", "lee");
	console.log(user3.fullName);
	// user3.firstName = "qqq";  // private로 설정했기 때문에 수정할 수 없다,
	console.log(user3.fullName);

	class UserWithGetterAndPrivateEasycut {
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}
		// 생성자 함수에 접근제어자 prefix를 붙이면 코드량을 줄일 수 있다.
		constructor(private firstName: string, private lastName: string) {}
	}

	console.log("------------------- class UserWithGetterAndPrivateEasycut--------------");
	const user4 = new UserWithGetterAndPrivateEasycut("sinho", "lee");
	console.log(user4.fullName);

	class UserWithGetterAndSetter {
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}

		// 숨기고 싶은 멤버변수를 설정하고, 이를 호출할 수 있는 getter를 설정하여 은닉할 수 있다.
		private internalAge = 28;
		get age(): number {
			return this.internalAge;
		}
		set age(num: number) {
			if (num < 0) {
				throw new Error("num should be greater than zero");
			}
			this.internalAge = num;
		}
		// 생성자 함수에 접근제어자 prefix를 붙이면 코드량을 줄일 수 있다.
		constructor(private firstName: string, private lastName: string) {}
	}
	console.log("------------------- class UserWithGetterAndSetter--------------");
	const user5 = new UserWithGetterAndSetter("sinho", "lee");
	console.log(user5.fullName);
	console.log(user5);
	console.log(user5.age);
	user5.age = 10;
	console.log(user5.age);
}
