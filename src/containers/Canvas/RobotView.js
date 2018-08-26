import React, { Component } from 'react';
import {  Rect, Group, Line } from 'react-konva';
import { LineDrawer } from '../../lib/CanvasHelper';
class Robot extends Component {
   
      createLineDrawer(squareSize){
        return new LineDrawer(squareSize)
    }
  render() {
    return (
        <Group >
            <Rect
                x={this.props.x}
                y={this.props.y}
                width={this.props.squareSize}
                height={this.props.squareSize}
                fill={'yellow'}
                shadowBlur={5}
            />
            <Line
                x={this.props.x}
                y={this.props.y}
                points={this.createLineDrawer(this.props.squareSize).drawRobotLine('line1',this.props.facing)}
                tension={0.5}
                closed
                stroke="black"
            />
            <Line
                x={this.props.x}
                y={this.props.y}
                points={this.createLineDrawer(this.props.squareSize).drawRobotLine('line2',this.props.facing)}
                tension={0.5}
                closed
                stroke="black"
            />
        </Group>
    );
  }
}

export default Robot;