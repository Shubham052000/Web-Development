import { useState } from "react";

const initialState = (tiles: number) => Array(tiles * tiles).fill(null);

function generateWinningCombinations(n: number) {
  const winningCombinations = [];

  // Generate rows
  for (let row = 0; row < n; row++) {
    const rowCombination = [];
    for (let col = 0; col < n; col++) {
      rowCombination.push(row * n + col);
    }
    winningCombinations.push(rowCombination);
  }

  // Generate columns
  for (let col = 0; col < n; col++) {
    const colCombination = [];
    for (let row = 0; row < n; row++) {
      colCombination.push(row * n + col);
    }
    winningCombinations.push(colCombination);
  }

  // Generate diagonal (top-left to bottom-right)
  const diag1Combination = [];
  for (let i = 0; i < n; i++) {
    diag1Combination.push(i * n + i);
  }
  winningCombinations.push(diag1Combination);

  // Generate diagonal (top-right to bottom-left)
  const diag2Combination = [];
  for (let i = 0; i < n; i++) {
    diag2Combination.push(i * n + (n - i - 1));
  }
  winningCombinations.push(diag2Combination);
  console.log(winningCombinations);
  return winningCombinations;
}

type TypeUseTicTacToe = {
  boardState: ReturnType<typeof initialState>;
  handleClick: (index: number) => void;
  calculateWinner: () => string;
  getStatusMessage: () => string;
  resetGame: () => void;
};

const useTicTacToe = (tiles: number): TypeUseTicTacToe => {
  const [boardState, setBoardState] = useState(initialState(tiles));
  console.log(initialState(tiles));
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_COMBINATION = generateWinningCombinations(tiles);

  const calculateWinner = () => {
    // Iterate through each combination in winningCombinations
    for (let combination of WINNING_COMBINATION) {
      // Get the first position in the combination
      let firstPos = boardState[combination[0]];

      // Check if the first position is not empty (assuming empty spot is "")
      if (firstPos !== "") {
        // Check if all positions in the combination have the same symbol
        if (combination.every((index) => boardState[index] === firstPos)) {
          return firstPos; // Return "X" or "O" as the winner
        }
      }
    }
    return ""; // Return null if no winner is found
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
    setBoardState(initialState(tiles));
    setIsXNext(true);
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
