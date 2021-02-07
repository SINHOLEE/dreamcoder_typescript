// 내가생각한 에러 핸들링
// {
// 	class NetworkClient {
// 		tryConnect() {
// 			throw new Error("no Network");
// 		}
// 	}

// 	class UserService {
// 		// DI Dependency Injection
// 		constructor(private client: NetworkClient) {}

// 		login() {
// 			try {
// 				this.client.tryConnect();
// 			} catch (error) {
// 				console.log("there is an errer about Network");
// 			}
// 			// login logic
// 		}
// 	}

// 	const userService = new UserService(new NetworkClient());

// 	userService.login();
// }

{
	class TimeoutError extends Error {}
	class OffLineError extends Error {}
	class NetworkClient {
		tryConnect() {
			throw new OffLineError("no Network");
		}
	}

	class UserService {
		// DI Dependency Injection
		constructor(private client: NetworkClient) {}

		login() {
			try {
				this.client.tryConnect();
			} catch (error) {
				// 여기서 error 타입은 any이기 때문에 타입의 정보를 잃는다.
				// 그러므로 아래와 같이 에러타입에 따라 분기를 나누려 해도 먹지 않는다.
				// 이러한 문제를 해결하기 위해 에러 스테이터스를 사용한다.
				console.log("--------------", error instanceof Error);
				if (error instanceof OffLineError) {
					console.log("this is offline error");
				} else {
					console.error(error);
					console.log("there is an errer about Network");
				}
			}
			// login logic
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
