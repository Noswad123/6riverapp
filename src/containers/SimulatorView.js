import CanvasView from './Canvas/CanvasView'
import ControlsView from './ControlsView'
import StatusView from './StatusView'
import {rotate, getNewPosition, isValidMove, moveAI} from '../lib/MovementHelper'
import React, { Component } from 'react'
import Styled from 'styled-components'
import {connect} from 'react-redux'
import { processCommand, place } from '../lib/ControlHelper';
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
    this.prepareMove(function(){return getNewPosition(this.state.robot,this.props.settings.squareSize)}.bind(this))
  }

  right()
  {
    this.prepareMove( function(){return rotate(1,this.state.robot)}.bind(this))
  }

  left(){
    this.prepareMove( function(){return rotate(-1,this.state.robot)}.bind(this))
  }

  placeRobot(params){
    this.prepareMove(function(){return place(params, this.props.settings)}.bind(this))
  }
  stepAI()
  {
    this.prepareMove(function(){return moveAI(this.state.robot,this.props.settings,this.props.wallArray,this.props.goal)}.bind(this))
  }
  updateStatus(status){
    this.setState({status:status})
  }

  prepareMove(moveType){
    var newInfo={
      newPos:moveType(),
      newStatus:""
    }
    if(isValidMove(newInfo,this.props.settings,this.props.wallArray,this.props.goal))
      this.setState(prevState=>({robot:{...prevState.robot,x:newInfo.newPos[0],y:newInfo.newPos[1],f:newInfo.newPos[2]}}))
    this.updateStatus(newInfo.newStatus)
  }

  executeCommand({cmd, params}){
    this[cmd](params)
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

  render() {
    return (
      <Container >
        
        <Wrapper>
          <ControlsView 
            moveRobot={this.moveRobot.bind(this)}
            left={this.left.bind(this)}
            right={this.right.bind(this)}
            handleInput={this.handleInput.bind(this)}
          />
          <button onClick={()=>{this.stepAI()}}>AI</button>
        </Wrapper>
        <Wrapper>
          <StatusView
            status={this.state.status}
            robot={this.state.robot}
            squareSize={this.props.settings.squareSize}
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
