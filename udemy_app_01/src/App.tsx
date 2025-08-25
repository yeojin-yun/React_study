import React from 'react';

import './App.css';
//named import

import Header from './components/Header/Header';

import { Fragment } from 'react';
import CoreConcepts from './components/CoreConcepts';
import TabButtons from './components/TabButtons';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <TabButtons />
      </main>
    </>
  );
}

export default App;
