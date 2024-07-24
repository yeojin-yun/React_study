import React from 'react';

import './App.css';
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActionPlayer] = useState('X');
  return (
    <>
      <ol className="player">
        <Player symbol="X" initialPlayerName="PLAYER 1"></Player>
        <Player symbol="O" initialPlayerName="PLAYER 2"></Player>
      </ol>
      <GameBoard></GameBoard>
    </>
  );
}

export default App;
