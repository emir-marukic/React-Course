const GameOver = ({ winner, onReset }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>Draw!</p>}
      <p>
        <button onClick={onReset}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
