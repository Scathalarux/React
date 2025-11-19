import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: string;
  onClick: () => void;
};

export function Button({ children, color, onClick }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}
