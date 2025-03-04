import React from "react";

function Guesses({ guesses }) {
  return (
    <div>
      {guesses.map(({ id, guess }) => (
        <p key={id}>{guess}</p>
      ))}
    </div>
  );
}

export default Guesses;
