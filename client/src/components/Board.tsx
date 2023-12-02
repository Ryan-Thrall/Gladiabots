import React from 'react';
import { MouseEvent, useRef, useState } from "react";
import Tile from './Tile.tsx';

interface Piece {
  image: string;
  x: number;
  y: number;
}

const initialBoardState: Piece[] = [];

// Add four blue pieces to top row
for (let i = 3; i <= 9; i++) {
  initialBoardState.push({ image: "assets/images/BlueBot.png", x: i, y: 0 });
}

// Add four red blue pieces to bottom row
for (let i = 3; i <= 9; i++) {
  initialBoardState.push({ image: "assets/images/RedBot.png", x: i, y: 6 });
}

function Board() {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [gridX, setGridX] = useState(0);
  const [gridY, setGridY] = useState(0);
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState);
  const boardRef = useRef<HTMLDivElement>(null);

  // SECTION Grabbing piece function
  function grabPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    const board = boardRef.current;
    if (element.classList.contains("piece") && board) {
      setGridY(Math.floor((e.clientY - board.offsetTop) / (0.75 * 150)));
      if (gridY % 2 !== 0) {
        setGridX(2 * Math.floor((e.clientX - board.offsetLeft) / (150)));
      } else {
        setGridX(2 * Math.floor((e.clientX - board.offsetLeft + 75) / (150)) - 1);
      }
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element);
    }
  }

  function movePiece(e: React.MouseEvent) {
    const board = boardRef.current;
    if (activePiece && board) {
      const minX = board.offsetLeft;
      const minY = board.offsetTop;
      const maxX = board.offsetLeft + board.clientWidth - 100;
      const maxY = board.offsetTop + board.clientHeight - 100;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      if (x < minX) {
        activePiece.style.left = `${minX}px`
      } else if (x > maxX) {
        activePiece.style.left = `${maxX}px`
      } else {
        activePiece.style.left = `${x}px`
      }

      if (y < minY) {
        activePiece.style.top = `${minY}px`
      } else if (y > maxY) {
        activePiece.style.top = `${maxY}px`
      } else {
        activePiece.style.top = `${y}px`
      }

    }

  }

  function dropPiece(e: React.MouseEvent) {
    const board = boardRef.current;
    if (activePiece && board) {
      let x;
      const y = Math.floor((e.clientY - board.offsetTop) / (0.75 * 150));
      if (y % 2 !== 0) {
        x = 2 * Math.floor((e.clientX - board.offsetLeft) / (150));
      } else {
        x = 2 * Math.floor((e.clientX - board.offsetLeft + 75) / (150)) - 1;
      }

      console.log(x, y);

      setPieces(value => {
        const pieces = value.map(p => {
          if (p.x === gridX && p.y === gridY) {
            p.x = x;
            p.y = y;
          }
          return p;
        });
        return pieces;
      })
      setActivePiece(null);
    }
  }

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





  return (
    <div className="board" onMouseMove={(e) => movePiece(e)} onMouseDown={(e) => grabPiece(e)} onMouseUp={e => dropPiece(e)} ref={boardRef}>

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
