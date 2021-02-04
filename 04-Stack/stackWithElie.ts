{
	interface Stack {
		readonly size: number;
		push(value: string): void;
		pop(): string;
	}

	// 데이터 레퍼는 불변성을 유지하는게 좋다. readonly로 하자
	type StackNode = {
		readonly value: string;
		// next: StackNode|undefined; 최신버전의 타입스크립트는 옵셔널로 작성한다.
		readonly next?: StackNode;
	};

	class StackImp implements Stack {
		// 와우..
		private _size: number = 0;
		private head?: StackNode; // head가 undefined일 수 도 있기 때문에 옵셔널하게 관리한다.
		get size() {
			return this._size;
		}
		push(value: string) {
			const node: StackNode = { value, next: this.head };
			this.head = node;
			this._size++;
		}
		pop() {
			// null == undefined 이기 때문에 아래와 같이 쓴다.
			// 만약 this.head === undefined를 쓴다면 this.head가 null일때는 통과가 되버리고 만다.
			// null !== undefined이지만 동치 연산자를 사용하면 같다고 나타나므로 동치 연산을 이용한 널체크가 더 안전하다.
			if (this.head == null) {
				throw new Error("Stack is Empty");
			}
			const node: StackNode = this.head;
			this.head = node.next;
			this._size--;
			return node.value;
		}
	}

	const stack = new StackImp();
	console.log(stack);
	stack.push("1");
	console.log(stack);
	stack.push("2");
	console.log(stack);
	stack.push("3");
	console.log("====", stack);
	console.log(stack.pop());
	console.log("====", stack);
}
