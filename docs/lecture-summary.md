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