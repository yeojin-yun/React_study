# React_study
## udemy_app_01
> 배운내용 : 함수 컴포넌트, 동적 값 사용, 이미지 import, props, 파일 분리, useState 등

### 컴포넌트
- React에서 모든 건 컴포넌트임. 컴포넌트의 조합이 UI를 구성하고 있음 (플러터의 위젯과 비슷한 듯)
- 그러나 JSX 문법은 브라우저에서 읽지 못하기 때문에 별도의 render 작업이 필요함 -> 그 작업을 `index.jsx`에서 해줌
- `index.jsx`에서 App이라는 컴포넌트를 불러오는데 이 또한 컴포넌트이며, export와 import를 해야 쓸 수 있음
```JavaScript
///index.jsx -> import
import App from "./App";

///App.jsx -> export
export default function App() {
  return (
   ...
  );
}
```
- export하는 모양새가 function() 형태이기 때문에 **함수 컴포넌트**라고 함 (함수 컴포넌트 이전에는 클래스 형태로 export되어 클래스 컴포넌트라고 했음)

### 커스텀 컴포넌트
- `App.jsx` 파일에서 아래  형태가 바로 custom components
```JavaScript
///index.jsx -> import
import App from "./App";

///App.jsx -> export
export default function App() {
  return (
   ...
  );
}
```
- 이미 내장된 HTML 요소들 (div, p 등)을 사용하는 게 아니라 사용자가 이름을 명명하고 정의해서 사용함
- 커스텀 컴포넌트의 조건 2가지
    1. 함수의 제목이 대문자일 것 : 그래야 내장 요소인 HTML 태그들과 구별이 가능
    2. 함수에서 렌더링 가능한 값이 반환될 것 : `return ();`처럼 `()`로 묶어서 표현함. 중첩된 태그일 경우 구별이 안되기 때문
    ```JavaScript
    export default function App() {
      return (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
       </div>
      );
    }
    ```
### 동적 값 사용하기
- 동적 값을 사용할 때는 `{}`에 넣어서 사용해야 함
```JavaScript
function Header() {
  const description = coreConceptsDescripts[getRandomInt(2)];
  return (<header className="App-header">
    <img src={mainImage} alt="coreImage" />
    <h1>React Essential</h1>
    <p>
        //✅
      {description} React concepts you will need for almost any app you are going to build!
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>);
}
```
### 이미지 사용하기
- 이미지를 `<img src="src/assets/components.png" alt="coreImage" />` 이런식으로 지정하면 배포 과정에서 사라질 수도, 무시될 수도 있음
- import를 해서 이미지를 불러오는 방법을 사용
    - `import mainImage from './assets/components.png';`
- 이제부터 mainImage는 경로를 가르키는 변수가 된 것
- 사용할 때는 `{}`로 넣어서 사용하면 됨 
    - `<img src = {mainImage} alt="mainImage">`
### 파일 분리하기
- 커스텀 컴포넌트를 만드는 건 좋으나, 그걸 전부 App.jsx에 만들게 되면 App.jsx에 모든 게 집중되고, 코드량이 많아짐
- 보통은 커스텀 컴포넌트들은 쪼개서 파일에서 관리함
- src/components라는 폴더를 만들고 거기에서 따로 관리하게 됨. 여기서 또 하위 폴더로 나눠도 됨

