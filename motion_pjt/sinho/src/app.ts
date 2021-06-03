console.log('hello word');
class App<T> {
	private data: T[];
	private parent: Element;
	private template: string | Element;
	constructor(parent: Element, data: T[] = []) {
		this.data = data;
		this.parent = parent;
		this.template = this.genarateTemplate();
	}
	genarateTemplate = () => {
		return '';
	};
	render = () => {
		console.log(this.parent, 123);
		this.parent.innerHTML = `
    <div class='main'>
    
    </div>
    `;
	};
}
// const app = new App(document.querySelector('#app') as Element);
// app.render();
