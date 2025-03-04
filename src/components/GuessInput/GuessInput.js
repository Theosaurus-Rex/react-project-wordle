import { React, useState } from "react";

function GuessInput({ guesses, setGuesses }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleGuessSubmit(event) {
    event.preventDefault();
    const nextGuesses = [
      ...guesses,
      { id: Math.random(), guess: tentativeGuess },
    ];
    setGuesses(nextGuesses);
    setTentativeGuess("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuessSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        required
        pattern="[A-Z]{5}"
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
