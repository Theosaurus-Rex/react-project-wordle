import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses }) {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map(({ num }) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default Guesses;
