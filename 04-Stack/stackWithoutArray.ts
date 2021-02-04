{
	interface Stack {
		push: (item: string) => void;
		pop: () => Item;
		printPostOrder: () => void;
		printPreOrder: () => void;
	}

	class Item {
		value: string;
		prev: Item | null;
		next: Item | null;
		constructor(value: string, next: Item | null = null, prev: Item | null = null) {
			this.value = value;
			this.prev = prev;
			this.next = next;
		}
	}

	class StackImp implements Stack {
		head: Item | null;
		constructor() {
			this.head = null;
		}

		pop() {
			if (this.head) {
				const popedItem = this.head;
				const nextHead = this.head.next;
				if (nextHead?.prev) {
					nextHead.prev = null;
				}
				popedItem.next = null;
				this.head = nextHead;

				return popedItem;
			} else {
				throw new Error("no item to pop");
			}
		}
		push(item: string) {
			if (!this.head) {
				const newItem = new Item(item);
				this.head = newItem;
				// this.tail = newItem;
			} else {
				const current = this.head;
				this.head = new Item(item);
				this.head.next = current;
				current.prev = this.head;
			}
		}
		printPostOrder() {
			if (!this.head) {
				throw new Error("no items");
			}
			this.printItemPostOrder(this.head);
		}

		printPreOrder() {
			if (!this.head) {
				throw new Error("no items");
			}
			this.printItemPreOrder(this.head);
		}
		private printItemPreOrder(item: Item) {
			console.log(item.value);
			if (item.next) {
				this.printItemPreOrder(item.next);
			}
		}
		private printItemPostOrder(item: Item) {
			if (item.next) {
				this.printItemPostOrder(item.next);
			}
			console.log(item.value);
		}
	}

	const stack = new StackImp();
	stack.push("2");
	stack.push("3");
	stack.push("4");
	stack.push("5");
	stack.push("5");
	stack.push("5");
	stack.push("6");
	stack.printPostOrder();
	console.log("=============");
	stack.printPreOrder();

	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack);
	stack.printPostOrder();
	console.log("=============");
	stack.printPreOrder();
}
