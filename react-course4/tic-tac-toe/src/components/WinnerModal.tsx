import { Turn } from "./Turn";

type WinnerModalProps= {
  winner: string|null|false;
  resetGame: ()=> void;
}

export function WinnerModal({winner, resetGame}: WinnerModalProps) {
  if (winner === null) return null;
  return (
    <section className="winner">
      <div className="text">
        <h2>{!winner ? "Empate" : "El ganador es:"}</h2>
        <header className="win">
          {winner && <Turn isSelected={true}>{winner}</Turn>}
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
