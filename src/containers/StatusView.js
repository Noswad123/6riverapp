import React, { Component } from 'react';
import Styled from 'styled-components'
const Container = Styled.div`
width:500px;
display:flex;
flex-direction:column;
align-items:center;
h4{
    margin:none;
}`
const Status = Styled.div`
    display:flex;
    justify-content:space-around;
    min-height:30px;
    box-sizing:border-box;`
const RobotTracker = Styled.div`
display:flex;
justify-content:space-around;
width:100%;
margin-bottom:10px;`
class CurrentStatus extends Component {
    render() {
    return (
        <Container>
            <h4>Current Status:</h4>
            <Status>      
                {this.props.status}
            </Status>
            <RobotTracker>
                <div>    {this.props.robot.name}</div>
                <div>AxisX:{this.props.robot.x}</div>
                <div>AxisY:{this.props.robot.y} </div>
                <div>Facing:{this.props.robot.f}</div>
            </RobotTracker>
        </Container>
    );
  }
}

export default CurrentStatus;
