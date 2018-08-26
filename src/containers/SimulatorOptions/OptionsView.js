import React, { Component } from 'react'
import Styled from 'styled-components'
import CanvasOptions from './CanvasOptions';
import {restart} from '../../lib/Utils'
import {getSettings} from '../../lib/setup/settings'
import {connect} from 'react-redux'
import WallOptions from './WallOptions';

const Container = Styled.div`
  background-color:pink;
  position:absolute;
  z-index:9999;
`
const Options = Styled.div`
  width:50vw;
  height:300px;
  left:-300px;
  flex-direction:column;
  background-color:pink;
  justify-content:space-around;
  align-items:center;
  position:absolute;
  z-index:9999;
`
const Buttons = Styled.div`
 display:flex;
`
class OptionsView extends Component {
  constructor(){
    super()
    this.state={
      isHidden:true
    }
  }
  toggleOptions(){
      this.setState({isHidden:!this.state.isHidden})
  }
  updateSettings(){
    this.props.onUpdateSettings(getSettings())
    this.toggleOptions()
  }
  render() {
    return (
      <Container >
         <button onClick={()=>this.toggleOptions()}>Simulator Options</button>
          <Options style={{display:`${this.state.isHidden?"none":"flex"}`}}>
            <CanvasOptions options={this.props.settings}/>
            <WallOptions options={this.props.settings}/>
            <Buttons>
                  <button onClick={()=>restart()}>Restart</button>
                  <button onClick={()=>{this.updateSettings()}}>Save Changes</button>
            </Buttons>
          </Options>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {settings: state.SettingsReducer}
};
function mapDispatchToProps(dispatch) {  
  return {
    onUpdateSettings: (settings) => {
      const action = {
        type: "UPDATE_SETTINGS",
        payload: settings
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionsView);
