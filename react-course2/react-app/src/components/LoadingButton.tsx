import { useState, type ReactNode } from "react";

type LoadingButtonProps = {
  children: ReactNode;
};

export function LoadingButton({ children }: LoadingButtonProps) {
  //onclick cambia color y texto y se desactiva
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
  };

  return (
    <button
      type="button"
      className={`btn btn-${disabled ? "secondary" : "primary"}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {disabled ? "Cargando..." : children}
    </button>
  );
}
