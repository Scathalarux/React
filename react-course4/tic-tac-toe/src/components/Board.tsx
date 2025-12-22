import { Square } from "./Square";

type BoardProps ={
  board: Array<string|null>;
  updateBoard: (index:number)=>void;
}
export function Board({board, updateBoard}: BoardProps) {
  return (
    <section className="game">
      {board.map((item, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {item}
          </Square>
        );
      })}
    </section>
  );
}
