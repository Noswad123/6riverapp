import React, { Component } from 'react';
import Styled from 'styled-components'
const Container=Styled.div`
  display:none;
  flex-direction:column;
  padding:50px;
  width:100%;
  position:absolute;
  background-color:#8AC6D0
  transition: all 3s;
  `
const Title=Styled.h1``
const Header=Styled.h3``
const Header2=Styled(Header)`
width:400px;`
const Row =Styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  margin-bottom:10px;`
const Explanation =Styled.div`
  width:400px;  `

class Instructions extends Component {
  render() {
    return (
      <Container>
        <Title>Instructions</Title>
        <Row>
          <Header>
              Commands
            </Header>
            <Header2>
              What they do
            </Header2>
          </Row>
          <Row>
              <div>
                RESTART
              </div>
              <Explanation>
                Clear the state and shuffle the goal and robot locations
              </Explanation>
          </Row>
          <Row>
              <div>
                MOVE
              </div>
              <Explanation>
                Move the robot one step forward
              </Explanation>
          </Row>
          <Row>
              <div>
                LEFT
              </div>
              <Explanation>
                Turn the robot 90 degrees to the left
              </Explanation>
          </Row>
          <Row>
              <div>
                RIGHT
              </div>
              <Explanation>
                Turn the robot 90 degrees to the right
              </Explanation>
          </Row>
          <Row>
              <div>
                STEPAI 
              </div>
              <Explanation>
                (Coming soon) Step the Behavior Tree once
              </Explanation>
          </Row>
          <Row>
              <div>
                PLACE X,Y,F
              </div>
              <Explanation>
                Where F is one of ['north', 'south', 'east', west'] <br/>
                'Warp' the robot to a new position and orientation. This is 'cheating', but useful for debugging.
              </Explanation>
          </Row>
    </Container>
    );
  }
}

export default Instructions;
