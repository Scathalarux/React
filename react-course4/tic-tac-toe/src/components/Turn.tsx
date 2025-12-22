import type { ReactNode } from "react";

type TurnProps = {
  children: ReactNode;
  isSelected: boolean;
};

export function Turn({ children, isSelected }: TurnProps) {
  return (
    <div className={`square ${isSelected ? "is-selected" : ""}`}>
      {children}
    </div>
  );
}
