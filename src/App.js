import InstructionsTab from './containers/Instructions/InstructionsTab'
import React, { Component } from 'react'
import Styled from 'styled-components'
import SimulatorView from './containers/SimulatorView';
import OptionsView from './containers/SimulatorOptions/OptionsView'
import {connect} from 'react-redux'
import {generateWallArray} from './lib/setup/wall'
import {generateGoal} from './lib/setup/goal'

const Container = Styled.div`
  display:flex;
  width:100vw;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
class App extends Component {
  render() {
    return (
      <Container >
        <InstructionsTab/>
        <OptionsView />
        <SimulatorView 
        goal={generateGoal(this.props.settings)}
        wallArray={generateWallArray(this.props.settings)}/>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {settings: state.SettingsReducer}
};

export default connect(mapStateToProps)(App);