import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import styled, { keyframes, ThemeProvider } from "styled-components";

const Outer = styled.div`
  text-align: center;
`;

const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;

const Header = styled.div`
  background-color: gold;
  height: 150px;
  padding: 20px;
  padding-bottom: 20px;
  color: royalblue;

  > h2 {
    ${props => props.theme.upstyle && "text-transform: uppercase"};
    color: purple;
  }
`;
const Title = styled.div`
  font-size: 1.5em;
`;
const Intro = styled.p`
  font-size: large;
`;
const Button = styled.button`
display: inline-block
  border-radius: 3px
  padding: 0.5rem 0
  margin: 0.5rem 1rem
  width: 11rem
  background: transparent
  color: green
  border: white
  border-bottom: 2px solid green
  `;

class App extends Component {
  render() {
    return (
      <Outer>
        <ThemeProvider
          theme={{
            upstyle: true
          }}
          >
          <Header>
            <Logo src={logo} alt="logo" />
            <Title>
              <h2>Get Ready To React</h2>
            </Title>
          </Header>
        </ThemeProvider>
        <Intro>
          To get started say{" "}
          <Button primary label="OK!">
            OK!
          </Button>
          edit.
        </Intro>
      </Outer>
    );
  }
}

export default App;
