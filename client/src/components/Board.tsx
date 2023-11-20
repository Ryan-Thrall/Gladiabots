import React from 'react';
import Tile from './Tile.tsx';

function Board() {
  return (
    <div className="board">
      <div className="row">
        <Tile color="light" x={3} y={0} image="assets/images/BlueBot.png" />
        <Tile color="medium" x={5} y={0} image="assets/images/BlueBot.png" />
        <Tile color="dark" x={7} y={0} image="assets/images/BlueBot.png" />
        <Tile color="light" x={9} y={0} image="assets/images/BlueBot.png" />
      </div>

      <div className="row">
        <Tile color="medium" x={2} y={1} />
        <Tile color="dark" x={4} y={1} />
        <Tile color="light" x={6} y={1} />
        <Tile color="medium" x={8} y={1} />
        <Tile color="dark" x={10} y={1} />
      </div>

      <div className="row">
        <Tile color="dark" x={1} y={2} />
        <Tile color="light" x={3} y={2} />
        <Tile color="medium" x={5} y={2} />
        <Tile color="dark" x={7} y={2} />
        <Tile color="light" x={9} y={2} />
        <Tile color="medium" x={11} y={2} />
      </div>

      <div className="row">
        <Tile color="light" x={0} y={3} />
        <Tile color="medium" x={2} y={3} />
        <Tile color="dark" x={4} y={3} />
        <Tile color="light" x={6} y={3} />
        <Tile color="medium" x={8} y={3} />
        <Tile color="dark" x={10} y={3} />
        <Tile color="light" x={12} y={3} />
      </div>

      <div className="row">
        <Tile color="dark" x={1} y={4} />
        <Tile color="light" x={3} y={4} />
        <Tile color="medium" x={5} y={4} />
        <Tile color="dark" x={7} y={4} />
        <Tile color="light" x={9} y={4} />
        <Tile color="medium" x={11} y={4} />
      </div>

      <div className="row">
        <Tile color="medium" x={2} y={5} />
        <Tile color="dark" x={4} y={5} />
        <Tile color="light" x={6} y={5} />
        <Tile color="medium" x={8} y={5} />
        <Tile color="dark" x={10} y={5} />
      </div>

      <div className="row">
        <Tile color="light" x={3} y={6} image="assets/images/RedBot.png" />
        <Tile color="medium" x={5} y={6} image="assets/images/RedBot.png" />
        <Tile color="dark" x={7} y={6} image="assets/images/RedBot.png" />
        <Tile color="light" x={9} y={6} image="assets/images/RedBot.png" />
      </div>


    </div>
  )
}

export default Board;
