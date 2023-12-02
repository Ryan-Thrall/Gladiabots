import React from 'react'

interface Props {
  color: string;
  image?: string;
  x: number;
  y: number;
}

function Tile({ color, image, x, y }: Props) {
  const classes = "hexagon " + color;

  return (
    <div className="hexContainer">
      {image && <div style={{ backgroundImage: `url(${image})` }} className="piece"></div>}
      <div className={classes}>
        {x}, {y}
      </div>

    </div>
  )
}

export default Tile;
