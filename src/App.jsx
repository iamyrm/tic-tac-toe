import React from "react";
import Player from "./components/Player";

const App = () => {
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="PLAYER 1" symbol="X" />
            <Player name="PLAYER 2" symbol="O" />
          </ol>
          game board
        </div>
        log
      </main>
    </>
  );
};

export default App;
