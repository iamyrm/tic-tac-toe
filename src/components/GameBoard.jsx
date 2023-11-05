import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectGameBoard, turns }) => {
  /*
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleButtonClick = (rowIndex, colIndex) => {
    setGameBoard((previousGameBoard) => {
      const updatedBoard = [
        ...previousGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectGameBoard();
  };
*/

  // This concept is called deriving the states from the props
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectGameBoard(rowIndex, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};

export default GameBoard;
