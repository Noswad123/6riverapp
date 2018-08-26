import React, { Component } from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
width:100%;
input{
    width:50px;
}
display:flex;
justify-content:space-around;
`

class CanvasOptions extends Component {
  render() {
    return (
      <Container >
        
        <div>
            Canvas Rows:
           <input id="rows" defaultValue={this.props.options.rows}/>
        </div>
        <div>
            Canvas Column:
            <input id="columns"defaultValue={this.props.options.columns}/>
        </div>
        <div>
            Canvas Square size:
            <input id="squareSize"defaultValue={this.props.options.squareSize}/>
        </div>
      </Container>
    );
  }
}

export default CanvasOptions;
