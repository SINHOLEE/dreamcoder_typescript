// Java : Exception
// ts : Error

// const arr = new Array(1000000000000000);

type Position = {
	x: number;
	y: number;
};
const position: Position = {
	x: 0,
	y: 0,
};

type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction): void {
	switch (direction) {
		case "up":
			position.y += 1;
			break;
		case "down":
			position.y -= 1;
			break;
		case "left":
			position.x -= 1;
			break;
		// case "right":
		// 	position.x += 1;
		// 	break;

		default:
			/**
			 * 에러트릭!
			 * 만약 스위치문에서 컴파일단의 에러를 미리 파악하고 싶다면,
			 * default 파트에 아래와 같이 invalid 변수를 선언하고 컴파일 에러가 발생하지 않도록
			 * 코딩하면 된다.
			 */
			const invalid: never = direction;
			throw new Error(`unKnown direction: ${invalid}`);
	}
}
