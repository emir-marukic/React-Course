import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [editedName, setEditedName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setEditedName(e.target.value);
  };

  let playerName = <span className="player-name">{editedName}</span>;
  let btnClick = "Edit";

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={editedName}
        onChange={handleNameChange}
      />
    );
    btnClick = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnClick}</button>
    </li>
  );
};

export default Player;
