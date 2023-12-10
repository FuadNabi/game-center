import React from 'react';

function Board() {
  const rows = [];

  for (let i = 0; i < 8; i += 1) {
    const cells = [];
    let cellClass = '';
    for (let j = 0; j < 8; j += 1) {
      // choose class for cell's background color based on coordinates
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          cellClass = 'board-cell-white';
        } else {
          cellClass = 'board-cell-black';
        }
      } else if (j % 2 === 0) {
        cellClass = 'board-cell-black';
      } else {
        cellClass = 'board-cell-white';
      }

      cells.push(
        <div className={cellClass} id={`cell ${i}-${j}`}> </div>,
      );
    }
    rows.push(<div id={`row ${i}`}>{cells}</div>);
  }

  return (
    <main>
      <h1>Checkers</h1>
      <div className="board-container">{rows}</div>
    </main>
  );
}
export default Board;
