# motion

고민할것

- Draggable 구현할것인가? 웹 api를 사용할것인가?
- 순서 알고리즘은 어떤것을 사용할것인가? 

기능

- 추상화된 기능
  - 버튼을 누르면 form modal이 나타난다.
  - Form modal은 취소와 확인버튼이 있다.
- 각 버튼에 의해 만들어진 리스트 아이템은 정렬되어있다.
- 각 만들어진 아이템은 삭제가 가능하다.
- task의 경우 checkbox를 변경할 수 있다.
- 

5/27

현재 닥친 문제

- 랜더라는 함수를 가지고 있는 클래스를 만들고 인스턴스를 생성하여 의존성 주입할지, 아니면 그냥 랜더함수를 가지고 있는 클래스를 구현할지 고민이 된다.
- 예를들어 app 클래스에서 render를 실행하면 header와 item-list 컴포넌트를 랜더링 할텐데, 이 두 객체를 직접 render함수 안에서 생성하여 사용할건지, 아니면 main에서 생성하여 의존성 주입할건지....
- 객체지향의 사실과 오해에서 설명한 역할 책임 협력관점에서 설계하도록 생각해보자.
- 2021.06.05 - 반응형 뷰 설계했다.
- `Header component`에서 버튼을 눌렀을 때, 동일한 레벨에 있는 `modal` 객체의 `show`, `hidden` 동작을 어떻게 주입해서 조작할 수 있을까?
  - 첫번째 방법: `header` 컴포넌트와 `modal` 컴포넌트를 독립적으로 생성하고, 두 컴포넌트를 감싸는 부모컴포넌트의 `state`에 `isModalVisiable` 플레그 변수를 두어서 선언적으로 관리한다 -> `virtual dom`을 관리하는 방식의 아이디어를 차용하는 방식이지만, 리랜더링에 대한 `diff` 알고리즘이 없다면 무조건 새로 그리게 되므로 성능상 이슈 발생
  - 두번째 방법: 첫번째 방법과 마찬가지로 두 컴포넌트를 일단 생성하고, `dom element`를 `queryselect`하여 돔 조작-> 과연 이게 객체지향관점에서 유효한 방식인가? 정의한 객체간의 메시지로만 관리한다는 측면에서 객체지향의 관점을 지키지 못한다고 생각