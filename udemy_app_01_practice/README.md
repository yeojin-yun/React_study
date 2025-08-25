# Practice
## children prop
- 열림과 닫힘 태그 안에 props 전부 넣을 때
```TypeScript
interface TabButtonProps {
    children: React.ReactNode;
}

export default function TabButton({ children } : TabButtonProps) {
    return (
        <>
        <h2>Title</h2>
        {children}
        </>
    )
}
```

## `...props`
- 태그에 기본 내장되어 있는 요소들을 사용할 때 -> 일일이 선언해서 사용하는 것은 비효율
- `...props`를 쓰면 됨
- interface에 따로 정의가 필요없고 `extends React.HTMLAttributes<HTMLElement>`를 확장하면 됨
- 이렇게 하면 기본 내장되어 있는 onClick, id, className 등등 모든 Attributes를 `...props`로 다 받아오고 해당 요소에 적용됨
```TypeScript
interface TabButtonProps: extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export default function TabButton({ children, props } : TabButtonProps) {
    return (
        <>
        <h2 {...props}>Title</h2>
        {children}
        </>
    )
}
```

## interface
- `TypeScript`에서는 모든 타입을 정의해서 써야 함
- interface를 이용하면 됨

- 예를들어 아래와 같은 데이터가 있을 때
```TypeScript
const EXAMPLES = {
    component : {
        title: 'components',
        description: 'description',
        code: 'function'
    },
    ...
}
```
- 아래처럼 타입을 정해줘야 함
```TypeScript
interface Example {
    title: string;
    description: string;
    code: string;
}

interface Examples {
    component: Example;
    ...
}
```
- 만약 위 데이터를 useState의 값으로 쓰려면 아래처럼 선언해줘야 함
    - 이렇게 하지 않으면 buttonName을 키 값으로 쓸 수 없음
    - 예) `EXAMPLES[buttonName]` 이 불가능 -> 에러 발생
```TypeScript
type Topic = keyof Examples;

export default function TabButton() {
    const [ buttonName, setButtonName] = useState<Topic>('component');
}
```
- 다른 곳에서 동일한 interface를 정의해놓은 것이 있다면, 컴포넌트에서 import해서 사용해도 됨
```TypeScript
export interface CoreConceptType {
  image: string;
  title: string;
  description: string;
};


///다른 Props의 타입으로 사용
import { CoreConceptType, CORE_CONCEPTS } from '../coreconcepts_data';

export default function CoreConcept({
  title,
  image,
  description,
}: CoreConceptType) {
  return (
    <li>
      <h4>{title}</h4>
      <img src={image} alt={title} />
      <p>{description}</p>
    </li>
  );
}
```

## 데이터 동적 출력
- 데이터가 있을 때 map 메서드를 이용하여 동적으로 출력할 있음
```TypeScript
<ul>
  {CORE_CONCEPTS.map(element) => (<CoreConcept key={element.title} {...elemnet} />)}
</ul>

///CoreConcepts 컴포넌트에서 prop 받아서 사용하기
import { CoreConceptType } from '../coreconcepts_data';

export default function CoreConcept({
  title,
  image,
  description,
}: CoreConceptType) {
  return (
    <li>
      <h4>{title}</h4>
      <img src={image} alt={title} />
      <p>{description}</p>
    </li>
  );
}
```

## key라는 특별한 prop
- key라는 Attribute는 따로 prop으로 설정하지 않고 할당하지 않아도 사용이 가능
- 아래에서도 ItemProps에서 선언하지 않았고, Item 컴포넌트에서 key={key}로 할당하지 않았지만 사용이 가능
```TypeScript
interface ItemProps {
  text: string;
}

function Item({ text }: ItemProps) {
  return <li>{text}</li>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} text={item} />  // key를 명시적으로 할당
      ))}
    </ul>
  );
}
```