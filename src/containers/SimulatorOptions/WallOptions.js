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

class WallOptions extends Component {
  render() {
    return (
      <Container >
        
        <div>
            Number of Walls:
           <input id="numWalls" defaultValue={this.props.options.numWalls}/>
        </div>
     
      </Container>
    );
  }
}

export default WallOptions;
