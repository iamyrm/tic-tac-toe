import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleActivePlayer = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
  };
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="PLAYER 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="PLAYER 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard onSelectGameBoard={handleActivePlayer} />
        </div>
        log
      </main>
    </>
  );
};

export default App;
