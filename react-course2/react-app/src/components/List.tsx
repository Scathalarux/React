//import type { MouseEvent } from "react";

import { useState } from "react";

type ListProps = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

export function List({ data, onSelect }: ListProps) {
  const [index, setIndex] = useState(-1);

  /*const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((elemento, i) => {
          return (
            <li
              key={elemento}
              className={`list-group-item ${index === i ? "active" : ""}`}
              onClick={() => handleClick(i, elemento)}
            >
              {elemento}
            </li>
          );
        })}
      </ul>
    </>
  );
}
