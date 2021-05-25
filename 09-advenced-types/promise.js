const raiseRejectPromise = (state) => {
	return new Promise((resolve, reject) => {
		if (state) {
			setTimeout(() => resolve({data: 123, status: 200}), 2000);
		} else {
			setTimeout(() => reject(new Error("got error")), 1000);
		}
	});
};

const a = raiseRejectPromise()
	.then((response) => console.log(response.data))
	.catch(console.log);
const b = raiseRejectPromise(1)
	.then((response) => console.log(response.data))
	.catch(console.log);

console.log(a);
console.log(b);
