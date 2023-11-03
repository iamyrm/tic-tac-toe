import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(isEditing ? false : true); // Not a best practice

    // setIsEditing(!isEditing); // Not a best practice.

    // If your state is updation on the basis of older state then use an arrow function instead of the codes shown above.

    setIsEditing((editing) => !editing); // Best Practice
  };

  //   let playerName = <span className="player-name">{name}</span>;
  //   if (isEditing) {
  //     playerName = <input type="text" required></input>;
  //   }

  return (
    <>
      <li>
        <span className="player">
          {/* {playerName} */}
          {/* Either use the above code or the code. playerName below. the ternary operator condition check */}
          {isEditing ? (
            <input type="text" required value={name}></input>
          ) : (
            <span className="player-name">{name}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
};

export default Player;
