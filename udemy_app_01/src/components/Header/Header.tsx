import mainImage from '../../assets/components.png';
import './Header.css'

const coreConceptsDescripts = ['Fundemental', 'crucial', "Core"];
function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header() {
  const description = coreConceptsDescripts[getRandomInt(2)];
  return (<header className="App-header">
    <img src={mainImage} alt="coreImage" />
    <h1>React Essential</h1>
    <p>
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