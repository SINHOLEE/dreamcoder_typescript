{
	// a or b
	interface Either {
		left: () => number;
		right: () => number;
	}
	class SimpleEither implements Either {
		constructor(private leftValue: number, private rightValue: number) {}
		left(): number {
			return this.leftValue;
		}
		right(): number {
			return this.rightValue;
		}
	}

	const either = new SimpleEither(1, 2);
	console.log(either.left());
	console.log(either.right());
	// 현재 문제점 : leftValue와 rightValue의 타입을 유연하게 사용하고 싶지만 현재는 number로 고정되어있다. 이럴때 사용하는것이 generic이다.
	interface EitherWithGeneric<L, R> {
		left: () => L;
		right: () => R;
	}
	class SimpleEitherWithGeneric<L, R> implements EitherWithGeneric<L, R> {
		constructor(private leftValue: L, private rightValue: R) {}
		left(): L {
			return this.leftValue;
		}
		right(): R {
			return this.rightValue;
		}
	}

	const eitherWithGeneric1 = new SimpleEitherWithGeneric(1, 2);
	console.log(eitherWithGeneric1.left());
	console.log(eitherWithGeneric1.right());

	const eitherWithGeneric2 = new SimpleEitherWithGeneric("singh", {
		name: "sinh",
		friends: [1, 2, 3],
	});
	console.log(eitherWithGeneric2.left());
	console.log(eitherWithGeneric2.right());
}
