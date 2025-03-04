import { React } from "react";

function GuessInput({ guess, setGuess }) {
  function handleGuessSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
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
        value={guess}
        required
        pattern="[A-Z]{5}"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
