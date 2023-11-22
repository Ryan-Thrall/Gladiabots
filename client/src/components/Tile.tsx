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
    <div className={classes}>
      {image && <div style={{ backgroundImage: `url(${image})` }} className="piece"></div>}
      {/* <img src={image} alt="" /> */}
    </div>
  )
}

export default Tile;
