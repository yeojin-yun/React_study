import { useState } from 'react';
interface PlayerProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
}

export default function Player({ initialName, symbol, isActive }: PlayerProps) {
  const [isEditing, setIsEdting] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    // setIsEdting(isEditing ? false : true);
    // setIsEdting(!isEditing);
    setIsEdting((editing: boolean) => !editing);
  }

  function handleChange(event: any) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    //event.target : event를 방출한 요소를 찾음 -> input 요소
    //event.target.value : input에 유저가 입력한 값
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
