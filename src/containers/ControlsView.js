import React, { Component } from 'react';
import Styled from 'styled-components'
const Container = Styled.div`
  display:flex;
  flex-direction:column
  width:500px;
  min-height:150px;
  justify-content:space-around;`

const InputBox =Styled.div``
const Buttons = Styled.div`
  display:flex;
  justify-content:space-around;
  button{
    min-width:100px;
    height:30px;
  }`

class Controls extends Component {
  
  render() {
    return (
        <Container >
          <h4>Controls</h4>
          <InputBox>
            <label htmlFor="command" >Enter a Command:</label>
            <input type="text" onKeyDown={(e)=>this.props.handleInput(e)} autoFocus/>
          </InputBox>

          <Buttons>
              <button onClick={()=>this.props.left()}>left</button>
              <button onClick={()=>this.props.moveRobot()}>Move</button>
              <button onClick={()=>this.props.right()}>right</button>
          </Buttons>
          
        </Container>
    );
  }
}

export default Controls;
