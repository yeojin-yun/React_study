import { useState } from 'react';

const initialGameBoard: Array<Array<null | string>> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

///여기서 필요한 정보 : 현재 플레이어와 그 심볼
export default function GameBoard() {
  const [player, setPlayer] = useState('X');
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleClick(row: number, col: number) {
    // initialGameBoard[row][col] = player;

    if (gameBoard[row][col] != null) {
      return;
    }

    // setGameBoard(preGameBoard =>
    //   preGameBoard.map((currentRow, rowIndex) =>
    //     currentRow.map((cell, colIndex) =>
    //       rowIndex === row && colIndex === col ? player : cell
    //     )
    //   )
    // );
    setGameBoard(preGameBoard =>
      preGameBoard.map((rowData, rowIndex) =>
        rowData.map((colData, colIndex) =>
          rowIndex === row && colIndex === col ? player : colData
        )
      )
    );
    setPlayer(prePlayer => (prePlayer === 'X' ? 'O' : 'X'));
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
