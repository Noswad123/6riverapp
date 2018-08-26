import React, { Component } from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { getGridLines} from '../../lib/CanvasHelper'
import GridLine from './GridLine';
import WallView from './WallView'
import RobotView from './RobotView'
const Goal=Circle

class CanvasView extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'green',
      dimensions:{
        width:this.props.canvas.squareSize*this.props.canvas.columns,
        height:this.props.canvas.squareSize*this.props.canvas.rows
      }
    };
  }
  
  render() {
    return (
      <Stage width={this.props.canvas.squareSize*this.props.canvas.columns} height={this.props.canvas.squareSize*this.props.canvas.rows}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={this.props.canvas.squareSize*this.props.canvas.columns}
            height={this.props.canvas.squareSize*this.props.canvas.rows}
            fill={this.state.color}
            shadowBlur={5}
          />
        {getGridLines(this.props.canvas).map((line, index)=><GridLine points={line} key={index}/>)}
              
        </Layer>
        <Layer>
          {this.props.wallArray.map((wall,index)=>{
            return(<WallView x={wall.x} y={wall.y} squareSize={this.props.canvas.squareSize} key={index}/>)
          })}

          <RobotView x={this.props.robot.x} y={this.props.robot.y} facing={this.props.robot.f} squareSize={this.props.canvas.squareSize}/>
         
          <Goal
            x={this.props.goal.x}
            y={this.props.goal.y}
            radius={this.props.canvas.squareSize/2}
            fill={'blue'}
          />
        </Layer>
      </Stage>
    );
  }
}

export default CanvasView;