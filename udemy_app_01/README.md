

# Udemy_app_01
> 함수 컴포넌트, Props, State, JSX, 동적 출력 등

### 컴포넌트
- React에서 모든 건 컴포넌트임. 컴포넌트의 조합이 UI를 구성하고 있음 (플러터의 위젯과 비슷한 듯)

- 그러나 JSX 문법(자바스크립트에서 쓰는 html문법)은 브라우저에서 읽지 못하기 때문에 별도의 render 작업이 필요함 -> 그 작업을 `index.jsx`에서 해줌

- `index.jsx`에서 App이라는 컴포넌트를 불러오는데 이 또한 컴포넌트이며, export와 import를 해야 쓸 수 있음

```javascript
///index.jsx -> import

import App from "./App";
///App.jsx -> export

export default function App() {
  return (...);
}
```

- export하는 모양새가 function() 형태이기 때문에 **함수 컴포넌트**라고 함 (함수 컴포넌트 이전에는 클래스 형태로 export되어 클래스 컴포넌트라고 했음)
---
### 커스텀 컴포넌트

- `App.jsx` 파일에서 아래  형태가 바로 custom components

```javascript
///index.jsx -> import
import App from "./App";
  
///App.jsx -> export
export default function App() {
  return (...);
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
---
### 동적 값 사용하기
- 동적 값(값이 바뀜)을 사용할 때는 `{}`에 넣어서 사용해야 함
```javascript
function Header() {
const description = coreConceptsDescripts[getRandomInt(2)];

  return (
    <header className="App-header">
    // ✅ 동적값으로 이미지 경로 설정
    <img src={mainImage} alt="coreImage" />
    <h1>React Essential</h1>
    // ✅ 동적값 출력
    <p>{description} React concepts you will need for almost any app you are going to build!
    </p>
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
    </header>
  );
}
```
---
### 이미지 사용하기
- 이미지를 `<img src="src/assets/components.png" alt="coreImage" />` 이런식으로 지정하면 배포 과정에서 사라질 수도, 무시될 수도 있음
- 이럴 때는 import를 해서 이미지를 불러오는 방법을 사용
    - `import mainImage from './assets/components.png';`

- 이제부터 mainImage는 경로를 가르키는 변수가 된 것

- 사용할 때는 `{}`로 넣어서 사용하면 됨

- `<img src = {mainImage} alt="mainImage">`
---
### 파일 분리하기

- 커스텀 컴포넌트를 만드는 건 좋으나, 그걸 전부 App.jsx에 만들게 되면 App.jsx에 모든 게 집중되고, 코드량이 많아짐

- 보통은 커스텀 컴포넌트들은 쪼개서 파일에서 관리함

- src/components라는 폴더를 만들고 거기에서 따로 관리하게 됨. 여기서 또 하위 폴더로 나눠도 됨
---
### props
- 부모 컴포넌트에서 자식 컴포넌트로 전달하는 properties 
- 그 데이터를 사용할 순 있으나 변경할 순 없음
- 단순하게 말하면 컴포넌트를 재사용할 수 있게 해주는 속성임 (함수의 파라미터 같은 역할)
- HTML의 `<div id='id'></div>`에서 id라는 걸 커스텀으로 설정하고 사용하는 것과 같음. id를 설정하고 쓰는 것과 동일
- 아래 두 가지 방법 모두 가능
1. props으로 모든 값 받아서 쓰기
    ```javascript
    interface CoreConceptsProps {
      image: string;
      title: string;
      description: string;
    }
    
    function CoreConcepts(props: CoreConceptsProps) {
      return (
        <li>
          <img src = {props.image} alt={props.title} />
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </li>
      );
    }
    ```
2. 구조 분해해서 쓰기
    ```javascript
    interface CoreConceptsProps {
        image: string;
        title: string;
        description: string;
      }
      
    export default function CoreConcepts({title, image, description}: CoreConceptsProps) {
        return (
          <li>
            <img src = {image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        );
      }
    ```
---
### props in typescript
- javascript와 다르게 typescript는 props을 사용할 때 interface를 사용함
```typescript
interface CoreConceptsProps {
  image: string;
  title: string;
  description: string;
}

function CoreConcepts(props: CoreConceptsProps) {
  return (
    <li>
      <img src = {props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
```
---
### props - children
- react에서 기본적으로 제공하는 요소
- children이라는 props를 별도로 만들지 않아도 커스텀 컴포넌트의 열림과 닫힘 태그 사이에 어떤 내용이든 받음
    - `<CustomComponent>children</CustomComponent>`
- 그 요소가 단일이던 여러개 요소이든 상관없음! 다 받음
- 사전 정의되지 않은 요소(들)을 편하게 사용가능
- 사용하기
```javascript
 //부모 컴포넌트
//App.tsx
<section id="examples">
  <h2>Examples</h2>
  <menu>
    //Components라는 사전 정의되지 않은 요소를 넘김
    <TabButton>Components</TabButton>
  </menu>
</section>


//자식 컴포넌트
//TabButoon.tsx
interface TabButtonProps {
    children: React.ReactNode;
}
///컴포넌트 정의 부분에서는 children이라는 요소로 묶어서 사용할 수 있음
export default function TabButton({ children }: TabButtonProps) {
    return (<li><button>{children}</button></li>);
}   
```
---
### 이벤트 전달하기
> 리액트에서 버튼 클릭과 같은 이벤트가 있을 때는 어떻게 하면 될까?
- 함수를 사용하면 됨.
- 자바스크립트에서는 함수 안에 함수를 중첩할 수 있기 때문에 컴포넌트 안에서 함수를 정의할 수도 있음
```javascript
interface TabButtonProps {
    children: React.ReactNode;
}
export default function TabButton({ children }: TabButtonProps) {
    function handleClick() {
        console.log('button click');
    }
    return (
    <li>
            //버튼의 onClick에 함수를 할당할 때는 ()을 쓰면 안됨
            //-> 이 코드가 실행될 때 함수가 실행돼기 때문에
            //()를 안써야 이 버튼이 눌렸을 때 자바스크립트가 알아서 저 함수 실행을 스케쥴링 함
        <button onClick={handleClick}>{children}</button>
    </li>
    );
}
```
- 이 때 주의할 점은 정의한 함수를 `{}` 안에 넣은 후 실행하면 안된다는 점임.
- ()를 넣게 되면 코드를 읽는 과정에 함수가 실행되지만, `{함수명}`로 정의하면 버튼이 눌렸을 때로 리액트가 실행을 스케쥴링하게 됨
- 또 여기서는 button이라는 html 요소에 기본적으로 내장되어 있는 onClick 이벤트를 사용했음
---
### 인자가 있는 이벤트 전달하기
> 만약에 인자가 있는 이벤트를 전달해야 할 때는?
- 이벤트를 실행하기 위해서는 실행해서는 안된다고 했는데, 만약 함수 내로 전달해야 하는 인자가 있을 때는 다른 함수로 감싸주어야 함
```javascript
<TabButton onSelect={(() => handleClick('Components'))}>Components</TabButton>
<TabButton onSelect={(() => handleClick('JSX'))}>JSX</TabButton>
<TabButton onSelect={(() => handleClick('Props'))}>Props</TabButton>
<TabButton onSelect={(() => handleClick('State'))}>State</TabButton>
```
---
### State
> 상태 변화를 화면에 반영하기 위해서는?
- 리액트 앱의 경우 한 번 render 된 후로는 화면이 그려지지 않음
- 그러므로 버튼이 눌린 후, UI에 어떤 변경을 원할 때는 react에게 이를 알려줘야 함
- 그 역할을 하는게 바로 useState라는 리액트 훅임
- useState를 통해 업데이트가 필요한 변수 이를 업데이트 해줄 함수를 제공받게 됨

**<사용법>**
1. useState import
```javascript
import { useState } from 'react';
```
2. 호출하기
- 리액트 컴포넌트 함수 내부 또는 다른 리액트 훅 안에서 호출되어야 함
- 함수의 최상위에서 호출되어야 함
- 다른 코드 안에 중첩되거나 for, if 문 안에서 정의되어서도 안됨
```javascript
function App() {
  const [ selectedTopic, setSeletedTopic ] = useState('please button click');
  
  function handleClick(selectedButton: string) {
    ...
  }
  return (
    ...
  );
}

export default App;
```
3. useState의 값 받기
- `useState(초기값)` :현재 State의 초기값 설정
- `[ selectedTopic, setSeletedTopic ]` : 총 2개의 값이 배열로 return 됨
    - `selectedTopic` : 현재의 값
    - `setSeletedTopic` : 값을 업데이트 할 함수
4. 값 사용
- 2번째로 받은 함수를 통해 값을 업데이트할 수 있고, 그 값은 `selectedTopic`로 쓸 수 있음
```javascript
function handleClick(selectedButton: Topic) {
  setSeletedTopic(selectedButton);
}
```
---
### 동적 스타일링
> 조건에 따라 다른 스타일링을 적용하고 싶을 때는?
- 특정 조건을 받는 props을 설정
    - `isSelected`라는 Boolean 값을 가지고 특정 스타일링을 부여
    - 이 때 button이 기본적으로 가지고 있는 ClassName을 활용
```javascript
interface TabButtonProps {
    children: React.ReactNode;
    onSelect?: () => void;
    isSelected: Boolean; //✅ 추가
}
export default function TabButton({ children, onSelect, isSelected }: TabButtonProps) {
    console.log(`children : ${children}`);
    return (
    <li>
        <button className = {isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
    );
}
```
- 사용할 때는 이렇게 하면 됨
```javascript
<TabButton isSelected={selectedTopic === 'components'} onSelect={(() => handleClick('components'))}>Components</TabButton>

<TabButton isSelected={selectedTopic === 'jsx'} onSelect={(() => handleClick('jsx'))}>JSX</TabButton>

<TabButton isSelected={selectedTopic === 'props'} onSelect={(() => handleClick('props'))}>Props</TabButton>

<TabButton isSelected={selectedTopic === 'state'} onSelect={(() => handleClick('state'))}>State</TabButton>
```
---
### List 동적으로 출력하기
> List로 이루어진 데이터의 경우, 좀 더 효율적으로 불러오는 방법이 있음

**문제의식**
- 기존에 List 데이터를 불러오는 방법은 CORE_CONCEPTS의 요소가 4개가 아닌 경우에는 에러가 발생할 가능성이 있고, 같은 데이터를 4번이나 읽어들여야 함
```javascript
<ul>
  <CoreConcepts {...CORE_CONCEPTS[0]}/>
  <CoreConcepts {...CORE_CONCEPTS[1]}/>
  <CoreConcepts {...CORE_CONCEPTS[2]}/>
  <CoreConcepts {...CORE_CONCEPTS[3]}/>
</ul>
```
**List 동적 출력**
- List에 따라 알아서 UI가 구성되게 할 수 있음
- ⭐️ 이 때는 key 값이 반드시 필요
```javascript
{CORE_CONCEPTS.map((concepItem) => <CoreConcepts key={concepItem.title} {...concepItem}/>)}
```
---
### 데이터 가져다쓰기 in typescript
- List 타입의 데이터를 UI에 뿌리려고 했더니, typescript의 경우에는 특별한 처리가 필요했음
- type에 엄격하기 때문에 정의되지 않은 것들을 그냥 사용이 불가능 하다고 보면 될 듯

**<사용법>**
1.  아래처럼 데이터를 미리 interface로 만들고 export
```typescript
interface Example {
  title: string;
  description: string;
  code: string;
}

export interface Examples {
  components: Example;
  jsx: Example;
  props: Example;
  state: Example;
}

export const EXAMPLES: Examples = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};

```
2. 쓰고자 하는 곳에서 import
- 이 때 kepof를 이용해 Examples interface의 key 값들만 사용하겠다고 선언해야 함 
```typescript
import { EXAMPLES, Examples } from './example';

type Topic = keyof Examples;
```
- 이 값을 useState에 넣으려고 할 때 `<>` 안에 타입을 명시해줘야 함
- 이제 저 키 값이 아닌 값이 초기값으로 들어가면 에러가 남
```typescript
const [selectedTopic, setSeletedTopic] = useState<Topic>('components');
```
- 만약 그 이외에 값을 쓰고자 한다면 아래처럼 선언해줘야 함
```typescript
const [selectedTopic, setSeletedTopic] = useState<Topic | ''>('');
//아래처럼도 가능
const [selectedTopic, setSeletedTopic] = useState<Topic | null>(null);
```