import React from 'react';

function Board() {
  const rows = [];

  for (let i = 0; i < 8; i += 1) {
    const cells = [];
    for (let j = 0; j < 8; j += 1) {
      cells.push(<div key={`${i}-${j}`}>[]</div>);
    }
    rows.push(<div key={i}>{cells}</div>);
  }

  return (
    <main>
      <h1>Checkers</h1>
      <div className="board-container">{rows}</div>
    </main>
  );
}

export default Board;
