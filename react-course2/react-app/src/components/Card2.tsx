import type { ReactNode } from "react";

type Card2Props = {
  children: ReactNode;
};

export function Card2({ children }: Card2Props) {
  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
