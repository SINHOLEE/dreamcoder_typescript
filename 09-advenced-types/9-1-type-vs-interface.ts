{
	// 구현사항에 촛점을 둬서 type과 interface를 비교햐보자
	// interface

	type PositionType = {
		x: number;
		y: number;
	};
	interface PositionInterface {
		x: number;
		y: number;
	}

	// 위의 둘은 뭐가 다를까?

	// object와 클래스를 type과 interface를 상속해서 구현할 수 있다.  심지어 상속을 통한 확장도 가능하다. 그렇다면 둘이 뭐가 다른거지?

	const obj1: PositionType = { x: 1, y: 2 };
	const obj2: PositionInterface = { x: 1, y: 2 };

	class Pos1 implements PositionType {
		x: number;
		y: number;
	}
	class Pos2 implements PositionInterface {
		x: number;
		y: number;
	}

	interface ZPosistionInterface extends PositionInterface {
		z: number;
	}

	type ZPosistionType = PositionType & { z: number };

	// 인터페이스만 머지가 가능하다.
	interface TeacherInterface {
		name: string;
		age: number;
	}

	interface TeacherInterface {
		coach: () => void;
	}

	class TeacherInterfaceImp implements TeacherInterface {
		name: string;
		age: number;
		coach() {
			console.log("알려주기!!");
		}
	}

	// 반면 type은 오직 하나의 type만 존재할 수 있다.
	type TeacherType = {
		name: string;
		age: number;
	};
	// errer : Duplicate identifier 'TeacherType'.ts(2300)
	// type TeacherType = {
	// 	coach: () => void;
	// };

	class TeacherTypeImp implements TeacherType {
		name: string;
		age: number;
		coach() {
			console.log("알려주기!!");
		}
	}
    // 즉 불변성의 성격을 가지고 있는 type을 주로 사용하고, imterface는 추상화를 위한 의미 그대로의 interface로만 사용하는 것이 좋다.?
    // interface: object와 object가 interface를 통해 정해진 규격으로 의사소통을 하기 위해 만들어짐 목적에 맞게 사용합시다. 
    // 그렇기 때문에 정해진 규격을 구현하기 위해 필요한 것이 interface이다.
    // type: 어떠한 데이터를 담기 위해 필요한 경우 타입을 사용한다.


    // tpye aliases는 computed properties를 사용할 수 있다.
    type Person = {
        name: string
        age: number
    }

    type Name = Person['name'] // 오?! 쪼갤 수 있어?!

    interface PersonInterface {
        name: string
        age: number
    }

    // type은 고유의 타입을 만들 수 있다. 예를들어
    type myNumber = number;
    type Direction = 'left' | 'right';

    // interface는 절대 만들 수 없다.

    // 인터페이스는 직접 할당이 안되므로... computed properties를 사용할 수 없다...?인가 잘 모르겠다!
    // interface NameInterface = PersonInterface['name']
    
}
