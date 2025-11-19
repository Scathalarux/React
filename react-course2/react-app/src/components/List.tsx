//import type { MouseEvent } from "react";

import { useState } from "react";

type ListProps = {
  data: string[];
};

export function List({ data }: ListProps) {
  const [index, setIndex] = useState(-1);

  /*const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/
  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <>
      <ul className="list-group">
        {data.map((elemento, i) => {
          return (
            <li
              key={elemento}
              className={`list-group-item ${index === i ? "active" : ""}`}
              onClick={() => handleClick(i)}
            >
              {elemento}
            </li>
          );
        })}
      </ul>
    </>
  );
}
