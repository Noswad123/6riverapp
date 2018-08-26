import React from 'react';
import { Line } from 'react-konva';

const GridLine =props=>{
  return (
    <Line
        x={0}
        y={0}
        points={props.points}
        tension={0.5}
        closed
        stroke="black"
    />
  );
}  
export default GridLine;