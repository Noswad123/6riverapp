import React, { Component } from 'react';
import {  Rect, Group, Line } from 'react-konva';
import { LineDrawer} from '../../lib/CanvasHelper'


class WallView extends Component {
  
    createLineDrawer(squareSize){
        return new LineDrawer(squareSize)
    }
  render() {
    return (
        <Group>
        <Rect
            x={this.props.x}
            y={this.props.y}
            width={this.props.squareSize}
            height={this.props.squareSize}
            fill={'red'}
            shadowBlur={5}
        />
        <Line
            x={this.props.x}
            y={this.props.y}
            points={this.createLineDrawer(this.props.squareSize).drawWallLine('line2')}
            tension={0.5}
            closed
            stroke="black"
        />
        <Line
            x={this.props.x}
            y={this.props.y}
            points={this.createLineDrawer(this.props.squareSize).drawWallLine('line1')}
            tension={0.5}
            closed
            stroke="black"
        />
        </Group>
    );
  }
}

export default WallView;