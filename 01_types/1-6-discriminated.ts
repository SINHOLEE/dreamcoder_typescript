{
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

	// 핵심!! 공통된 property를 기준으로 분기할 수 있도록 하는 방법
	type LoginState = SuccessState | FailState;

	function login(id: string, password: string): LoginState {
		if (id === "myid" && password === "mypassword") {
			return {
				result: "success",
				response: {
					body: "your Info",
					statusCode: 200,
				},
			};
		}
		return {
			result: "fail",
			response: {
				reason: "비번틀림",
				statusCode: 401,
			},
		};
	}
	function printLoginState(state: LoginState): void {
		// 좋지 않은 방법
		if (state.result === "success") {
			console.log("good " + state.response.body);
		} else {
			console.log("bad ", state.response.reason);
		}
	}

	printLoginState(login("myid", "mypassword"));
	printLoginState(login("myid", "mypasswor"));
}
