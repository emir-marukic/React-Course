import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>;
  let btnClick = "Edit";

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        value={name}
        onChange={(e) => e.target.value}
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
