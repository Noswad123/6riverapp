import React, { Component } from "react";
import styled from "styled-components";
import Instructions from "./InstructionsView";

const Container = styled.div`
  margin-top: 128px;
  font-size: 15px;
  position: fixed;
  top: 20%;
  left: 85px;
  z-index:9000;
`;
const Header = styled.span`
  transform-origin: 50%;
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  position: absolute;
  right: 10px;
  top: 10%;
`;

const QuickMenu = styled.div`
  background-color: #8AC6D0;
  width: 50px;
  height: 270px;
  position: absolute;
  top: -200px;
  left: -100px;
  transition: all 1s; 
  border: white solid;
  >div{
    display:none;
  }
  &:hover {
    left:-90px;
    height:300px;
    width:550px;
    >span{
      display:none;
    }
    >div{
      display:flex;
    }
  }
`;
const Letter = styled.span``
export default class InstructionsTab extends Component {
  render() {
    return (
      <Container>
        <QuickMenu>
          <Instructions/> 
        
          <Header>
            <Letter>I</Letter>
            <Letter>N</Letter>
            <Letter>S</Letter>
            <Letter>T</Letter>
            <Letter>R</Letter>
            <Letter>U</Letter>
            <Letter>C</Letter>
            <Letter>T</Letter>
            <Letter>I</Letter>
            <Letter>O</Letter>
            <Letter>N</Letter>
            <Letter>S</Letter>
          </Header>
        </QuickMenu>
      </Container>
    );
  }
}

