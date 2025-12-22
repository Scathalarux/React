import type { ReactNode } from "react";

type SquareProps = {
  children: ReactNode;
  updateBoard: (index:number) => void;
  index: number;
  isSelected?: boolean;
};
export function Square({
  children,
  updateBoard,
  index,
  isSelected,
}: SquareProps) {
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      className={`square ${isSelected ? "is-selected" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
