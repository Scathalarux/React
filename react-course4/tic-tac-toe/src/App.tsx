import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { Turn } from "./components/Turn";
import { TURNS } from "./constants.ts";
import { checkWinner, checkEndGame } from "./logic/board.ts";
import { WinnerModal } from "./components/WinnerModal.tsx";
import { Board } from "./components/Board.tsx";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  //null no hay ganador, false, empate
  const [winner, setWinner] = useState<null | string | false>(null);

  const updateBoard = (index: number) => {
    //validamos la opción
    if (board[index] || winner !== null) return;

    //Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Modificamos la casilla
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    //Guardar el estado de la partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //Comprobar ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  };

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Turn isSelected={turn === TURNS.X}>{TURNS.X}</Turn>
        <Turn isSelected={turn === TURNS.O}>{TURNS.O}</Turn>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
