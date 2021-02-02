{
	/**
	 * Union Types : 또는
	 * 발생할 수 있는 다양한 경우에서 하나만 선택할때 사용
	 */

	type Direction = "left" | "right" | "up" | "down";

	function move(direction: Direction) {
		console.log(direction);
	}

	move("right");
	move("left");
	move("up");
	move("down");

	// function login -> success, fail
	// 스스로 생각해보기

	// 이상한데..
	type Response = "success" | "fail";

	function login(id: string, password: string): Response {
		if (id === "dltlsgh5" && password === "mypassword") {
			return "success";
		}
		return "fail";
	}
	console.log(login("dltlsgh5", "mypassword")); // 로그인 성공
	console.log(login("dltlsgh", "mypassword")); // 로그인 에러

	// 엘리 코드

	type SuccessState = {
		result: "success";
		response: {
			body: string;
			statusCode: 200;
		};
	};

	type FailState = {
		result: "fail";
		response: {
			reason: string;
			statusCode: 401;
		};
	};

	type LoginState = SuccessState | FailState;
	function aliesLogin(id: string, password: string): Promise<LoginState> {
		return new Promise<LoginState>((resolve, reject): void => {
			if (id === "myid" && password === "mypassword") {
				const sucData: SuccessState = {
					result: "success",
					response: {
						body: "your info",
						statusCode: 200,
					},
				};
				resolve(sucData);
			}
			const failData: FailState = {
				result: "fail",
				response: {
					reason: "비번틀림",
					statusCode: 401,
				},
			};
			reject(failData);
		});
	}

	aliesLogin("myid", "mypassword")
		.then((data) => {
			if (!("body" in data.response)) {
				throw new Error("에러나벌인거임!");
			}
			console.log("축하합니다 로그인에 성공했습니다. " + data.response.body);
		})
		.catch(console.error);
	aliesLogin("myid", "myassword")
		.then((data) => {
			if (!("body" in data.response)) {
				throw new Error("에러나벌인거임!");
			}
			console.log("축하합니다 로그인에 성공했습니다. " + data.response.body);
		})
		.catch(console.error);

	function printLoginState(state: LoginState): void {
		// 좋지 않은 방법
		if (state.result === "success") {
			console.log("good " + state.response.body);
		} else {
			console.log("bad ", state.response.reason);
		}
	}
}
