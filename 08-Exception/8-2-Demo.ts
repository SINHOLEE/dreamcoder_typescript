function readFile(file: string): string {
	if (file === `no file`) {
		throw new Error("no file!!!");
	}
	return `file contents ${file}`;
}

function closeFile(file: string) {
	console.log(`close ${file}`);
}

function run() {
	const file = "no file";
	// 정말 그 에러가 발생할 공간에만 try구문을 사용해서 좀 더 작게 쪼개는 것이 좋다.
	try {
		console.log(readFile(file));
	} catch (error) {
		console.log(typeof error);
		return;
	} finally {
		closeFile(file);
	}
}

run();
