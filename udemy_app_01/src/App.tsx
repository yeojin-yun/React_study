import React from 'react';

import './App.css';
import { CORE_CONCEPTS } from './data'; //named import
import CoreConcepts from './components/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <section id="core-concepts">
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton>Components</TabButton>
        </menu>
      </section>
  
    </main>
    </div>
  );
}

export default App;


