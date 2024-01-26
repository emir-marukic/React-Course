import { useState } from "react";
import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <p>Game Board</p>
      </div>
      <p>LOG</p>
    </main>
  );
}

export default App;
