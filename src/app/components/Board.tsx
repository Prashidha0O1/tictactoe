"use client";
import { useState } from 'react';
import calculateWinner from '../utils/calculateWinner';


const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const renderSquare = (index: number) => (
    <button
      className="w-24 h-24 border text-2xl flex items-center justify-center"
      onClick={() => handleClick(index)}
    >
      {squares[index]}
    </button>
  );

  return (
    <div>
      <div className="mb-4 text-xl">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {Array(9).fill(null).map((_, index) => renderSquare(index))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Board;

