import { WINNER_COMBOS } from "../constants.ts";

export const checkWinner = (boardToCheck: Array<string | null>) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export const checkEndGame = (boardToCheck: Array<string | null>) => {
  if (boardToCheck.every((square: string | null) => square !== null))
    return true;
  return false;
};
