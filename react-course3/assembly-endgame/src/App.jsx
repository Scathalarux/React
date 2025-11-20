import { Header } from "./components/Header";
import { languages } from "./languages";
import { chooseWord, getFarewellText } from "./utils";
import "./App.css";
import { useState } from "react";
import ReactConfetti from "react-confetti";
import clsx from "clsx";

function App() {
  //Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  //State values
  const [unknownWord, setUnknownWord] = useState(() => chooseWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  //Derived values
  const numberOfErrors = languages.length - 1;
  const wrongGuessArray = guessedLetters.filter(
    (l) => !unknownWord.includes(l)
  );
  const wrongGuessCount = wrongGuessArray.length;
  const remainingErrors = numberOfErrors - wrongGuessCount;
  const isGameLost = wrongGuessCount >= numberOfErrors;
  const isGameWon = [...unknownWord].every((letter) =>
    guessedLetters.includes(letter)
  );
  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !unknownWord.includes(lastGuessedLetter);

  //Functionality

  const checkLetter = (letterSelected) => {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letterSelected)
        ? prevLetters
        : [...guessedLetters, letterSelected]
    );
  };

  const restartGame = () => {
    setUnknownWord(chooseWord());
    setGuessedLetters([]);
  };

  //Display elements
  const languagesElements = languages.map((language, index) => {
    const isLost = index < wrongGuessCount;
    const className = clsx("chip", {
      lost: isLost,
    });
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    return (
      <span key={language.name} className={className} style={styles}>
        {language.name}
      </span>
    );
  });
  const wordElements = [...unknownWord].map((letter, index) => {
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span key={index} className={letterClassName}>
        {isGameOver || guessedLetters.includes(letter)
          ? letter.toUpperCase()
          : ""}
      </span>
    );
  });

  const keywordElements = [...alphabet].map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && unknownWord.includes(letter);
    const isWrong = isGuessed && !unknownWord.includes(letter);

    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        className={className}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => checkLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver) {
      return (
        <>
          {isLastGuessIncorrect && (
            <p className="farewell-message">
              {getFarewellText(languages[wrongGuessCount - 1].name)}
            </p>
          )}
          <p>You have {remainingErrors} attempts left...</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p> You lose! Better start learning Assembly</p>
        </>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done!</p>
        </>
      );
    }
  }

  return (
    <main>
      {isGameWon && <ReactConfetti recycle={false} />}
      <Header remainingErrors={remainingErrors} />
      <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatus()}
      </section>
      <section className="language-chips">{languagesElements}</section>
      <section className="word">{wordElements}</section>
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {unknownWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is un the word`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word`}
          You have {remainingErrors} attempts left.
        </p>
        <p>
          Current word:{" "}
          {[...unknownWord]
            .map((letter) =>
              guessedLetters.includes(letter) ? `${letter}.` : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <section className="keyboard">{keywordElements}</section>
      {isGameOver && (
        <button className="new-game" onClick={restartGame}>
          New game
        </button>
      )}
    </main>
  );
}

export default App;
