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
    <div>
      <div className={classes}><img src={image} alt="" />{x}, {y}</div>
    </div>
  )
}

export default Tile;
