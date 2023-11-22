import React from 'react';
import Tile from './Tile.tsx';

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

// Add four blue pieces to top row
for (let i = 3; i <= 9; i++) {
  pieces.push({ image: "assets/images/BlueBot.png", x: i, y: 0 });
}

// Add four red blue pieces to bottom row
for (let i = 3; i <= 9; i++) {
  pieces.push({ image: "assets/images/RedBot.png", x: i, y: 6 });
}

function Board() {

  // SECTION Board generation setup variables
  let board: any[] = [];
  let xCieling = 9
  let xFloor = 3
  let startColorForRow = ["dark", "light", "medium", "dark", "medium", "light", "dark"];
  let color = "";

  // SECTION Board generation
  for (let j = 0; j < 7; j++) {
    // If first half of generation, decrease floor and increase cieling (Grow)
    if (j > 0 && j < 4) {
      xFloor--;
      xCieling++;
    }
    // If second half of generation, increase floor and decrease cieling (Shrink)
    else if (j >= 4) {
      xFloor++;
      xCieling--;
    }

    // Set color to start the row before alternating
    color = startColorForRow[j];

    for (let i = xFloor; i <= xCieling; i += 2) {
      let image = "";

      pieces.forEach(p => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });

      // Alternate the color for each new tile
      if (color === "light") {
        color = "medium";
      } else if (color === "medium") {
        color = "dark";
      } else if (color === "dark") {
        color = "light";
      }

      // Add the tile to the board array
      board.push(<Tile key={`${i}, ${j}`} color={color} x={i} y={j} image={image} />);
    }
  }

  let activePiece: HTMLElement | null = null;

  // SECTION Grabbing piece function
  function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("piece")) {
      console.log(element);

      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }

  function movePiece(e: React.MouseEvent) {

    if (activePiece) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";
      activePiece.style.left = `${x}px`;
      activePiece.style.top = `${y}px`;
    }

  }

  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      activePiece = null;
    }
  }

  console.log(board.slice(0, 4));

  return (
    <div className="board" onMouseMove={(e) => movePiece(e)} onMouseDown={e => grabPiece(e)} onMouseUp={e => dropPiece(e)}>

      <div className="row">
        {board.slice(0, 4)}
      </div>

      <div className="row">
        {board.slice(4, 9)}
      </div>

      <div className="row">
        {board.slice(9, 15)}
      </div>

      <div className="row">
        {board.slice(15, 22)}
      </div>

      <div className="row">
        {board.slice(22, 28)}
      </div>

      <div className="row">
        {board.slice(28, 33)}
      </div>

      <div className="row">
        {board.slice(33, 37)}
      </div>

    </div>
  )
}

export default Board;
