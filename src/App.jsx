import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const App = () => {
  // This state below was used to explain the concepts called "lifting the states up", udemy, video 81

  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurn, setGameTurn] = useState([]);

  // This function toggles if there is "X", it toggles into "O" and vice-versa. By default its value is "X"

  const handleActivePlayer = (rowIndex, colIndex) => {
    // Toggling the active players
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );

    // Managing the turns of the players
    setGameTurn((previousTurns) => {
      let currentPlayer = "X";

      if (previousTurns.length > 0 && previousTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...previousTurns,
      ];
      return updatedTurn;
    });
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
          <GameBoard
            onSelectGameBoard={handleActivePlayer}
            turns={gameTurn}
          />
        </div>
        <Log />
      </main>
    </>
  );
};

export default App;
