# TypeScript (Template)

# 🚀 목표

1. 타입스크립트를 전반적으로 이해 하고 자신감있게 코딩 할 수 있다.
2. 이전 프로젝트 X, Y, Z를 타입스크립트로 변환해 본다. 
3. 타입스크립트를 이용해서 프로젝트 하나 만들어 본다. (아이디어: ...) 
4. 실전 프로젝트에서 타입으로 인한 리소스 손실이 없도록 한다.
5. 

# ✨ 공부 할 것

- 더 공부 해야 하는 내용들
    - [ ]  왜 var를 사용하면 안될까?
    - [ ]  promise에서 reject와 error 처리방법 아직 확실하게 정립되지 않음
    - [ ]  js class에서 제공하는 get, set과 메소드로 구현하는 getter setter과 다른점은 무엇이 있을까?
    - [ ]  js class에서 final은 그냥 static으로 구현하면 될까?

- 관심 토픽들
    - [ ]  types vs interface
    - [ ]  enum은 언제써야 하는지?
    - [ ]  

# 🔖 리소스

- 유용한 사이트들
    - 

# 📒 강의 계획

[Study Plan](https://www.notion.so/fa90c207842a4dc6a2615d8b8c2f47bc)

# 📝 강의 노트

## **강의 내용 정리**

- 기본 타입

    ## 20210127 한줄정리

    - `unknown`, `any`, `object` 타입은 최대한 안쓰는 식으로 하자... basic 정리 [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-1-basic.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-1-basic.ts)
    - Optional parameter, Default parameter, Rest parameter 차이를 안다. [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-2-functions.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-2-functions.ts)
    - `readonly` 를 사용할때는 `Array<T>`처럼 제네릭을 쓰지 않는다.  또한 튜플 사용을 권장하지 않는다. [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-3-array.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-3-array.ts)
    - `union type`: 타입의 조합형태 → ex) successState, failState / 'up' 'down' [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-5-union.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-5-union.ts)
    - `discriminated` : 유니온 타입을 효과적으로 사용하는 방법 [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-6-discriminated.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/01_types/1-6-discriminated.ts)
        - 의문1: promise에서 reject와 error 처리방법 모르겠음

    ## 20210128 한줄정리

    - `enum type` 은 타입을 보장 받지 못하므로 `union type` 을 사용하는 것이 안전하다.

    ## 20210131 한줄정리

    - type-02 practices → 스스로 약한 점 1) type 지정하는데 있어서 조금 버벅거렸다. 2) throw error 관리가 부족하다.
    - OOP → 관련있는 데이터를 한데 묶어 관리하는 패러다임
    - OOP를 이해하는데 있어 필요한 상반된 개념 → 절차지향 패러다임
        - 단점 1. 신규 프로젝트에투입하기 위해선 전체 어플리케이션이 어떻게 동작하는지 알아야한다.
        - 단점 2. 하나를 변경할 때 사이드 이펙트가 발생할 경우가 많다.
        - 단점 3. 한눈에 이해하기 힘들다. → 유지보수성, 확장성이 낮다.
    - 객체지향의 4원칙
        - 캡슐화: 서로 연관있는 데이터와 함수를 한곳에 묶어 관리하는 개념. 한 객체의 상태를 직접 조작하는게 아닌, 어떤 행위를 함으로써 상태를 변경시키도록 한다. 예를들어, 고양이의 상태는 직접 `배불러해!`, `기뻐해!` 할 수 없고, `밥을 먹인다()` 혹은 `놀아준다()` 와 같은 행위로 고양이의 상태를 변경할 수 있는 것 처럼 데이터를 관리하는 방법이다.
        - 추상화: 외부에서는 내부의 코드가 얼마나 복잡하든 상관없이 `interface` 를 이용하여 해당 인스턴스를 조작하고 관리할 수 있도록 하는 개념이다.
        - 상속: 하나의 추상화된 클래스를 재사용하여 새로운 클래스를 만드는 개념.  부모클래스와 자식클래스는 `as is` 관계라고 말한다.
        - 다형성: ?? 설명이 약간 추상적이네 잘 모르겠다. 예제를 기반으로 공부해보자.

    ## 20210202 한줄정리

    - 멤버변수와 클래스 변수: `static` 키워드를 이용하여 할당한다. 클래스 메소드, 클래스 변수는 클래스단에서 공유하는 데이터로 인스턴스를 생성할때마다 재 할당하여 메모리를 낭비하지 않는다. [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/03-OOP/3-2-class.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/03-OOP/3-2-class.ts)
    - 접근제어자별 정리 [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/03-OOP/3-3-encapsulation.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/03-OOP/3-3-encapsulation.ts)
        - `public` : 기본 접근제어자, 어느 레벨에서도 접근 가능하다.
        - `private` : 자기 자신만이 접근 가능하다. 캡슐화 은닉화를 위해 사용하는 접근제어자.
        - `protected` : 상속관계에서 부모클래스의 변수, 메소드에 접근 가능하다.
    - js class 에서는 `get` , `set` 을 이용해  정보를 은닉하고 유효성 체크를 할 수 있다.
    - 추상화 방법 2가지
        - 접근제어자를 이용하여 추상화를 구현할 수 있다.
        - `interface` 를 이용하여 추상화를 구현할 수 있다.
            - 인터페이스를 이용한 추상화로 구현체마다의 제약조건을 다르게 하여 유연하면서 안정된 코딩이 가능해진다.
            - 예시 → 아마추어 바리스타와 프로 바리스타의 동일한 메소드 호출, 다른 결과 [https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/03-OOP/3-4-abstraction.ts](https://github.com/SINHOLEE/dreamcoder_typescript/blob/main/03-OOP/3-4-abstraction.ts)

      

     

- 고급타입

## MOTION Project

- **나의 프로젝트 계획**
    - **프로젝트 기능들**
        - 
        - 
    - **구현 계획**
        1. 첫번째
        2. 두번째
        3. 세번째
    - **어려웠던 부분/ 완성하지 못한 기능들**
        - 
        - 

- **실전 챌린지**
    - **배운점들**
        -

[노션 노트정리 링크](https://www.notion.so/TypeScript-Template-1ea671bb9c2e43e8bfebf3cdf5594ca6)