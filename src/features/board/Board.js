import React from 'react';

function Board() {
  const rows = [];

  for (let i = 0; i < 8; i += 1) {
    const cells = [];
    for (let j = 0; j < 8; j += 1) {
      let cellClass = '';
      if ((i + j) % 2 === 0) {
        cellClass = 'board-cell-white';
      } else {
        cellClass = 'board-cell-black';
      }

      cells.push(
        <div className={cellClass} key={`cell ${i}-${j}`} />,
      );
    }
    rows.push(
      <div className="board-row" key={`row ${i}`}>{cells}</div>,
    );
  }

  return (
    <main>
      <h1>Checkers</h1>
      <div className="board-container">{rows}</div>
    </main>
  );
}

export default Board;
