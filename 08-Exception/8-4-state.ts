{
	type Result = "success" | "fail";
	type Reason = "offline" | "serverDown" | "timeout";
	function createRandomState(): Result {
		return Math.random() < 0.5 ? "success" : "fail";
	}

	function createRandomNetworkErrorState(): Reason {
		return Math.random() < 1 / 3
			? "offline"
			: Math.random() < 0.5
			? "serverDown"
			: "timeout";
	}

	function testCreateRandomFuncIsEqualRandom() {
		let n = 0;
		const dic = { offline: 0, serverDown: 0, timeout: 0 };
		while (n < 10000000) {
			dic[createRandomNetworkErrorState()]++;
			n++;
		}
		console.log(dic);
	}
	type SuccessState = {
		result: "success";
	};
	type NetworkErrorState = {
		result: "fail";
		reason: Reason;
	};

	type ResultState = SuccessState | NetworkErrorState;

	class NetworkClient {
		tryConnect(): ResultState {
			const randomState = createRandomState();

			if (randomState === "success") {
				return {
					result: randomState,
				};
			}

			return {
				result: "fail",
				reason: createRandomNetworkErrorState(),
			};
		}
	}

	class UserService {
		// DI Dependency Injection
		constructor(private client: NetworkClient) {}

		login() {
			// let result : ResultState;
			try {
				const result = this.client.tryConnect();
				if (result.result === "success") {
					// login logic
					console.log("Do login...");
				} else {
					console.log(`Got an error: reason->  ${result.reason}`);
				}
			} catch (error) {
				console.log(error);
			} finally {
			}
		}
	}

	const userService = new UserService(new NetworkClient());

	// userService.login();
	class App {
		constructor(private userService: UserService) {}

		// 어플리케이션이 실행하면 자동으로 로그인이 되도록 디자인 한다.
		run() {
			this.userService.login();
		}
	}

	const app = new App(userService);
	app.run();
}
