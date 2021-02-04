{
	interface Stack {
		readonly size: number;
		push: (item: string) => void;
		pop: () => Item;
		printPostOrder: () => void;
		printPreOrder: () => void;
	}

	class Item {
		value: string;
		next: Item | null;
		constructor(value: string, next: Item | null = null) {
			this.value = value;
			this.next = next;
		}
	}

	class StackImp implements Stack {
		head: Item | null;
		size: number;
		constructor() {
			this.head = null;
			this.size = 0;
		}

		pop() {
			if (this.head) {
				const popedItem = this.head;
				const nextHead = this.head.next;
				popedItem.next = null;
				this.head = nextHead;
				this.size -= 1;
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
			}
			this.size += 1;
		}
		printPostOrder() {
			if (!this.head) {
				return;
			}
			this.printItemPostOrder(this.head);
		}

		printPreOrder() {
			if (!this.head) {
				return;
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
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack);
	stack.printPostOrder();
	console.log(stack.pop());
	console.log(stack.size);
}
