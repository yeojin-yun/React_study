import { GameTurn, GameTurnList } from 'types/game';
const initialGameBoard: Array<Array<null | string>> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void; //상위 컴포넌트에서 받아올 props (()=>void 타입의 함수)
  turns: GameTurnList;
}
export default function GameBoard({ onSelectSquare, turns }: GameBoardProps) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  ///Log 컴포넌트에도 해당 상태가 필요해서 더 상위 컴포넌트인 App 컴포넌트로 이동
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  ///Log 컴포넌트에도 해당 상태가 필요해서 더 상위 컴포넌트인 App 컴포넌트로 이동
  // function handleGameBoard(rowIndex: number, colIndex: number) {
  //   setGameBoard(preGameBoard => {
  //     const updateBoard = [...preGameBoard.map(innerArray => [...innerArray])];
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });

  /*
    props로 내려온 onSelectSquare 함수는 상위에서 () => void로 정의된 함수이기 때문에 실행을 해줘야 함
    그래야 9x9 게임 보드에서 하나가 눌렸을 때 실행될 수 있음
    */
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
