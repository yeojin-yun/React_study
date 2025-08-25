import { useState } from 'react';

interface PlayerProps {
  symbol: string;
  initialPlayerName: string;
}
export default function Player({ symbol, initialPlayerName }: PlayerProps) {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [editMode, setEditMode] = useState(false);
  ///버튼을 눌러야 편집이 가능하도록

  /// input 태그에 입력된 값이 바뀔 때마다 실행되는 함수
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  function handleClick() {
    ///버튼을 누르면 편집이 가능해짐
    setEditMode(preMode => (preMode ? false : true));
  }

  let editableName = <span>{playerName}</span>;
  if (editMode) {
    editableName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li>
      {editableName}
      <span>{symbol}</span>
      <button onClick={handleClick}>{editMode ? 'Save' : 'Edit'}</button>
    </li>
  );
}
