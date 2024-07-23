import Player from 'components/Player';
import GameBoard from 'components/GameBoard';
import { useState } from 'react';
import Log from 'components/Log';

import { GameTurn, GameTurnList } from 'types/game';

function App() {
  ///1. Player, GameBoard 두 컴포넌트 모두에서 필요한 상태(현재 플레이어는 누구인지?)를
  /// 상위 컴포넌트인 App 컴포넌트로 올림
  const [activePlayer, setActivePlayer] = useState('X');

  ///2. GameBoard, Log 두 컴포넌트 모두에서 필요한 상태를
  /// 상위 컴포넌트인 App 컴포넌트로 올림
  const [gameTurns, setGameTurns] = useState<GameTurnList>([]);

  ///GameBoard가 눌렸을 때 실행될 () => void 함수
  ///이 함수를 props를 통해 아래 컴포넌트로 전달
  function hanlderSelectSquare(rowIndex: number, colIndex: number) {
    ///1-2
    ///이전 상태를 기반으로 새로운 상태로 바꿔야 함
    ///함수로 접근해야 함
    setActivePlayer(currentActivePlayer =>
      currentActivePlayer === 'X' ? 'O' : 'X'
    );
    ///2-2. 이전 배열을 기반으로 새로운 상태가 추가되므로 함수로 접근해야 함
    setGameTurns(preTurns => {
      ///setGameTurns를 정확히 하기 위해서는 현재의 activePlayer에 대한 정보가 필요
      ///그러나 activePlayer는 다른 useState 값이며, 현재의 정확한 값을 얻기가 어려움 (리액트의 업데이트 특징 때문에)
      ///그러므로 activePlayer 변수를 바로 가져오기 보다는 현재 useState의 가장 최근의 배열 값에서 마지막 플레이어가 누군지 찾아오는 것이 더 정확
      ///preTurns에서 주는 값이 가장 정확한 값이므로

      ///우선 변수 선언
      let currentPlayer = 'X';
      ///preTurns.length > 0 -> useState의 초기값이 빈배열이므로, 이 때는 제외해줘야 함
      ///preTurns[0].player === 'X' -> 가장 최근의 플레이어가 X였을 때는 => 현재 플레이어는 O여야 함
      if (preTurns.length > 0 && preTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      ///새로운 배열을 만듦
      ///리액트의 배열과 객체는 참조 타입이므로, 직접 값을 변경하기 보다는 다른 변수에 담아 변경하는 것이 좋음

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          ></Player>
        </ol>
      </div>
      <GameBoard onSelectSquare={hanlderSelectSquare} turns={gameTurns} />
      <Log />
    </main>
  );
}

export default App;
