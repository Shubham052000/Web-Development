import { useState } from "react";
import useTicTacToe from "../hooks/useTicTacToe";

function Board() {
  const { boardState, getStatusMessage, handleClick, resetGame } =
    useTicTacToe();
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl mt-20">Tic Tac Toe</h2>
      <div
        id="status"
        className="mt-14 w-full flex justify-around items-center"
      >
        <h3 className="text-xl">{getStatusMessage()}</h3>
        <button
          onClick={resetGame}
          className="bg-slate-500 text-white px-5 py-2 rounded-xl text-xl hover:bg-slate-600 transition-colors duration-100"
        >
          Reset Game
        </button>
      </div>

      <div
        id="board"
        className="w-1/2 lg:w-1/4 mt-14 grid grid-cols-3 p-1 bg-slate-400 rounded-lg gap-1"
      >
        {boardState.map((symbol, index) => {
          return (
            <button
              onClick={() => handleClick(index)}
              disabled={symbol !== null}
              key={index}
              className="bg-slate-200 aspect-square text-2xl text-slate-700"
            >
              {symbol}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
