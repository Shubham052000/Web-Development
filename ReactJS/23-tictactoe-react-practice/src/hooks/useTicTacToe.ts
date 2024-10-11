import { useState } from "react";

const initialState = () => Array(9).fill(null);

type TypeUseTicTacToe = {
  boardState: ReturnType<typeof initialState>;
  handleClick: (index: number) => void;
  calculateWinner: () => string;
  getStatusMessage: () => string;
  resetGame: () => void;
};

const useTicTacToe = (): TypeUseTicTacToe => {
  const [boardState, setBoardState] = useState(initialState());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_COMBINATION = [
    [0, 1, 2], // row 1
    [3, 4, 5], // row 2
    [6, 7, 8], // row 3
    [0, 3, 6], // column 1
    [1, 4, 7], // column 2
    [2, 5, 8], // column 3
    [0, 4, 8], // diagonal 1
    [2, 4, 6], // diagonal 2
  ];

  const calculateWinner = () => {
    for (let i = 0; i < WINNING_COMBINATION.length; i++) {
      const [a, b, c] = WINNING_COMBINATION[i];
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }
    return "";
  };

  const handleClick = (index: number) => {
    const winner = calculateWinner();
    if (winner || boardState[index]) return;
    const newBoardState = [...boardState];
    newBoardState[index] = isXNext ? "X" : "O";
    setBoardState(newBoardState);
    setIsXNext((prevValue) => !prevValue);
  };

  const getStatusMessage = (): string => {
    if (calculateWinner()) return `${calculateWinner()} won`;
    if (!boardState.includes(null)) return "It's a draw";
    return isXNext ? "X's turn" : "O's turn";
  };

  const resetGame = () => {
    setBoardState(initialState());
  };

  return {
    boardState,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
