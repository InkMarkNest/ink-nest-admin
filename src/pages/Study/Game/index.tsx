import { Button } from 'antd';
import { FC, useState } from 'react';

const Square = ({
  value,
  onSquareClick,
}: {
  value: string | number;
  onSquareClick: () => void;
}) => {
  return (
    <div
      style={{ marginRight: '-1px', marginTop: '-1px' }}
      className=" tw-flex tw-h-8 tw-w-8 tw-items-center tw-justify-center tw-border tw-border-solid tw-border-black"
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
};
const Game: FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [indexValue, setIndexValue] = useState('🐱');
  /**
   * 格子点击事件
   * @param i 当前格子index
   */
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = indexValue;
    setSquares(nextSquares);
    setIndexValue(indexValue === '🐱' ? '🐶' : '🐱');
  };

  const renderSquareRow = (rowIndices: number[]) => (
    <div className="tw-flex">
      {rowIndices.map((index) => (
        <Square value={squares[index]} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  );
  /**
   * 验证是否获胜
   * @param squares
   * @returns
   */
  const calculateWinner = (data: number[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${indexValue}`;
  }
  const handlerReset = () => {
    setSquares(Array(9).fill(''));
    setIndexValue('🐱');
    status = `Next player: ${indexValue}`;
  };
  return (
    <>
      {' '}
      {status}
      <Button onClick={handlerReset} className="tw-mx-4">
        重置
      </Button>
      <div className="tw-flex tw-flex-col tw-p-8">
        {renderSquareRow([0, 1, 2])}
        {renderSquareRow([3, 4, 5])}
        {renderSquareRow([6, 7, 8])}
      </div>
    </>
  );
};

export { Game };
