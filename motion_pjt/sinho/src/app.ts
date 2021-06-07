class Modal {}

class Header {
	private template: string;
	private $parent: Element;
	private $el: Element;
	constructor(parent: Element, private data: string[]) {
		this.$parent = parent;
		this.template = this.genareateTemplate();
		this.$el = this.genarateEl();
		this.addClickListener();
	}
	genarateEl = () => {
		const $el = document.createElement('div');
		$el.className = 'main_header';
		$el.innerHTML = this.template;
		return $el;
	};
	addClickListener = () => {
		const btnWrapper = this.$el.querySelector('.main__header__button__wrapper');
		btnWrapper?.addEventListener('click', (e) => {
			console.log(e.target);
		});
		console.log(btnWrapper);
	};
	onClick = () => {};
	render = () => {
		this.$parent.appendChild(this.$el);
	};
	genareateTemplate = () => {
		return `
    <div class="main__header__title">MOTION</div>
    <div class="main__header__button__wrapper">
${this.data.map((item) => `<button id=${item}>${item}</button>`).join('')}
  </div>
  `;
	};
}
console.log('hello word');
class App {
	constructor(private $el: Element) {}
	createHeader = () => {
		const header = new Header(this.$el, ['image', 'video', 'note', 'task']);
		header.render();
	};
	render = () => {
		const main = document.createElement('div');
		main.className = 'main';
		this.createHeader();
	};
}
const app = new App(document.querySelector('#app') as Element);
app.render();
