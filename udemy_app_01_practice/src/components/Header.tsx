import mainImage from '../assets/components.png';
import './Header.css';

const keywordArray = ['Fundemental', 'Core', 'Crucial'];
export default function Header() {
  const description = keywordArray[getRandomValue()];

  function getRandomValue() {
    return Math.floor(Math.random() * 3);
  }
  return (
    <header className="App">
      <img src={mainImage} alt="reactImage" />
      <h1>React Essential</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      <a href="https://reactjs.org">Learn React</a>
    </header>
  );
}
