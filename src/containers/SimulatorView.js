import CanvasView from './Canvas/CanvasView'
import ControlsView from './ControlsView'
import StatusView from './StatusView'
import {Directions, getNewPosition, isValidMove} from '../lib/MovementHelper'
import React, { Component } from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import { processCommand } from '../lib/ControlHelper';
import {restart} from '../lib/Utils'

const Container = Styled.div`
  display:flex;
  width:100vw;
  justify-content:space-between;
  align-items:center;
`
const Wrapper = Styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 0 50px;
  box-sizing:border-box;
  width:50%;
`
class SimulatorView extends Component {
  constructor(props){
    super(props)
    this.state={
      robot:{
        x:0,
        y:0,
        name:"robot1",
        f:"east"
      },
      status:""
    } 
  }
  moveRobot(){ 
    var newInfo={
      newPos: getNewPosition(this.state.robot,this.props.settings.squareSize),
      newStatus:""
    }
    if(isValidMove(newInfo,this.props.settings,this.props.wallArray, this.props.goal))
      this.setState(prevState=>({robot:{...prevState.robot,x:newInfo.newPos[0],y:newInfo.newPos[1]}}))
    this.updateStatus(newInfo.newStatus)
  }

  updateStatus(status){
    this.setState({status:status})
  }

  right(){
    this.rotate(1)
  }
  left(){
    this.rotate(-1)
  }
  rotate(direction){
    var newIndex = Directions.findIndex(d=>d===this.state.robot.f)+direction;
    if (newIndex<0)
      newIndex=3;
    if(newIndex>3)
      newIndex=0
    this.setState(prevState=>({robot:{...prevState.robot,f:Directions[newIndex]}}))
  }
  handleInput(e){
    if(e.keycode===13||e.which===13){
      this.executeCommand(processCommand(e.target.value))
      e.target.value=""
    }
  }
  restartSimulator(){
    restart()
  }
  executeCommand({cmd, params}){
    console.log(cmd,params)
    this[cmd]()
  }
  render() {
    return (
      <Container >
        {console.log(this.props.wallArray)}
        <Wrapper>
          <ControlsView 
            moveRobot={this.moveRobot.bind(this)}
            left={this.left.bind(this)}
            right={this.right.bind(this)}
            handleInput={this.handleInput.bind(this)}
          />
        </Wrapper>
        <Wrapper>
          <StatusView
            status={this.state.status}
            robot={this.state.robot}
          />
         <CanvasView 
            robot={this.state.robot} 
            canvas={this.props.settings} 
            wallArray={this.props.wallArray}
            goal={this.props.goal}
          /> 
        </Wrapper>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {settings: state.SettingsReducer}
};
export default connect(mapStateToProps)(SimulatorView);
