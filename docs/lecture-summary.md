### React 시작

- react -> js에서 많이 쓰는 라이브러리
- react -> spa 일부 변경에 일부만 변경할 수 있게 함.
    - vue, angular 등등이 있음.
- react native 프레임워크를 이용해 ios, android에 네이티브 애플리케이션을 만들 수 있다. 

- npm, npx
    - npm : 패키지 매니저 -> js package들을 설치, 삭제, 업데이트를 도와줌.
    - npx : 패키지 익스큐터 -> js package를 설치 없이 실행할 수 있도록 도와줌.
react -> js에서 많이 쓰는 라이브러리라고 함. 


### 중요 커맨드

- npm start : 개발모드로 앱 실행 변경 사항을 브라우저에서 바로 볼 수 있음.
- npm test : 유닛 테스트
- npm run build : 배포하기위한 빌드 패키지가 만들어짐 3개의 파일만 만들어짐.
- npm install 로 종속성 설치



### 폴더 구조관련

- readme -> 정보들
- package.json 종속성 정리 -> pom.xml, build.gradle이랑 비슷한 친구
- node_modules : 모든 종속성이 다운되는 폴더
- react initialize: index.html -> root div를 가지고 있음, index.js : app 컴포넌트를 로드함, app.js 앱 컴포넌트 코드
    - 앱 컴포넌트 실제 화면에 나오는 것들 있는 것.


### 리액트 컴포넌트가 필요한 이유

- 웹 앱은 복잡함. (메뉴, 로그인, 헤더, 푸터,  등등)
- 리액트 앱을 통해 모듈화를 하는거임. (메뉴 컴포넌트, 로그인 컴포넌트 등등)
- 처음 로드되는 컴포넌트 : 앱 컴포넌트
- 컴포넌트 부분
    - view(jsx or js)
    - logic(js)
    - styling(css)
    - state(internal data store)
    - props(Pass Data)
- 컴포넌트 이름 첫글자 대문자.
- 각 js 파일들을 모듈이라고 함. 그 안에 여러 컴포넌트들이 있음.
- 언제 함수, 클래스 컴포넌트를 사용?
    - 각 컴포넌트에 State라는게 있음.
    - State는 특정 컴포넌트에 대한 데이터나 정보
    - 리액트 초기에 클래스 컴포넌트에만 State가 있었지만 이후에 Hooks이라는 개념이 생겨서 함수 컴포넌트에도 State를 가질 수 있음.
    - 16.8 버전 이후로 지원하니 강의에서는 클래스 컴포넌트 말고 함수 컴포넌트에 집중!!!

### JSX(Java Script XML)
- 대부분 리액트 프로젝트는 jsx로 화면 보여줌
- html보다 엄격
    - 닫는 태그 필수
    - 최상위 태그는 하나만
    - 가장 최신 버전의 표준을 필요로함.
    - Babel을 통해 옛날 브라우저에도 호환이될 수 있도록 지원함. 또한 Jsx 를 js로 변환해줌. 그래서 Jsx도 가능.
    - ()를 통해 더 편하게 jsx 작성할 수 있도록 도움 return ( 태그들 )
    - <></> 이런걸 빈 태그라고 함.
    - css 사용하고 싶으면 class 가 아닌 className으로 사용

### Js 모범사례
- 각 컴포넌트에는 각 파일만 들어가게 진행


### js css style 관련 입력시 유의점 
- const로 진행할 시 요소 입력할 때 -로 구분하면 안됨. camelCase로 진행
- 반면 css 파일 따로 분리하여 진행할 때는 - 넣고 진행 그리고 value에는 "" 제거하고 진행 세미콜론도 넣어야함.


### State 정보
- 리액트 내장 객체 -> 컴포넌트의 데이터 or 정보를 저장
- 구버전 리액트에서는 클래스에서만 state가 있음.
- 그러나 hooks 가 16.8에 들어왔고 함수형 컴포넌트에도 useState라는 훅을 사용하면 함수에도 사용할 수 있다.
    - useState는 2개를 반환
        - 1. 현재 state
        - 2. state를 업데이트하는 함수


### react background에서 무슨 일?
- 우리가 state 업데이트 하면 react가 view를 업데이트함.
- 어떻게 html 요소를 업데이트?
    - dom으로 표현되기 때문에 요소를 업데이트하려면 dom을 업데이트해야한다.
    - 예전에는 이 방식대로 함

- 리액트는 다른 방식으로 동작함.
    - virtual Dom 이라는 게 있음. 가상으로 만든 ui 표현 -> 메모리에 보관한다.
    - virtual Dom이 업데이트되면 리액트가 변경 사항 파악해서 html 페이지에 동기화를 시킴.
    - 과정 설명
        - 1. 리액트가 v1 virtual Dom을 로딩한다.
        - 2. 버튼을 누른다.
        - 3. 버튼을 누를때 state 업데이트 디면 리액트는 해당 컴포넌트를 다시 렌더링하고 두 번째 버전의 virtual Dom을 만든다.
        - 4. v1, v2 를 비교하고 변경점을 반영한다.
    - 요약하면, 직접 dom을 업데이트하고 있는게 아니다.

### 리액트 props

- 하나의 컴포넌트 여러개의 프로퍼티 가질 수 있음.
- 이 값은 다른 컴포넌트와 공유할 수 잇음.


### 리액트 라우터 돔

- import {BrowserRouter, Routes, Route,useNavigate, useParams, Link} from 'react-router-dom' // 다른 페이지로 이동하기 위한 import
- react 에서 route 사용해서 url에 따라 보여질 컴포넌트 지정 
- :~ 파라미터로 받음, useParams 를 통해 받음.
-  a 태그를 사용하지 않고 react router dom의 link를 통해 옮기면 네트워크 활동이 없다. 즉, 새로고침 없이 활동한 것이다. 