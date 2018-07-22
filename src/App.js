import React, { Component } from "react";
import logo from "./logo.svg";

import styled, { css, keyframes } from "styled-components";

// fa- fonts lib
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faKey, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // returns in ea page

library.add(faEnvelope, faKey, faHome); //fa envelope

const Outer = styled.div`
  text-align: center;
`;

const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 50px;
`;

const Header = styled.div`
  background-color: black;
  height: 4erm;
  padding: 1erm;
  padding-bottom: 1em;
  color: white;
  font-family: 'Roboto Condensed', serif;

  > h2 {
    font-family: 'Roboto Slab', serif;
    ${props => props.theme.uppercase && "text-transform: uppercase"};
    ${props => props.theme.font && "font-family: 'Roboto Slab', serif"};
    color: purple;
  }
`;
const Title = styled.div`
  font-size: 1.5em;
  font-family: 'Roboto Condensed', sans-serif;

`;
const Main = styled.div`
  align: center
  font-size: 1.2em;
  padding: 0.5rem 0
  margin: 0.5rem 1rem
  width: 75%
  background: lightblue
  color: darkblue
  border: white
  border-top: 2px solid black
  font-family: 'Roboto';
`;
const Capsule = styled.div`
  font-size: 1.2em;
  border-radius: 5px
  padding: 0.5rem 
  margin: 0.5rem 1rem
  align: center
  width: 75%
  background: #CCC
  color: lightgreen
  border: white
  border-top: 2px solid lightgrey
  border-bottom: 2px solid grey
`;
const Intro = styled.p`
  font-size: large;
  font-family: 'Roboto Mono';

`;
const Label = styled.p`
  font-size: normal;
  font-family: 'Lato';
`;
const Button = styled.button`
display: inline-block
  border-radius: 3px
  padding: 0.5rem 0
  margin: 0.5rem 1rem
  width: 11rem
  background: #cornflowerblue
  color: purple
  border: 2px solid cornflowerblue  
  
  ${props =>
    props.primary &&
    css`
  background: purple
  color: #EFE8D2 
  border: 2px solid purple
`}
  `;

const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"} > * {
    flex: 1;

    &:not(:first-child) {
      ${props => (props.vertical ? "margin-top" : "margin-left")}: 1rem;
    }
  }
`;

const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`;

class App extends Component {
  render() {
    return (
      <Outer>
        <Header uppercase>
          <Logo src={logo} alt="logo" />
          <Title>
            <h2>Ready To React</h2>
          </Title>
        </Header>
        <Intro>
          <FontAwesomeIcon icon="home" /> VDemo | React Page. Bottom UP. Here goes. Stay tuned for more Jazz
        </Intro>
        <Capsule>
          <Button primary label="Login">
            <Label>
              <FontAwesomeIcon icon="key" /> Login
            </Label>
          </Button>
          <Button label="Contact">
            <Label>
              <FontAwesomeIcon icon="envelope" /> Contact Us
            </Label>
          </Button>
        </Capsule>
          <EqualDivider>
            <Child>First</Child>
            <Child>Second</Child>
            <Child>Third</Child>
          </EqualDivider>
          <EqualDivider vertical>
            <Child>First</Child>
            <Child>Second</Child>
            <Child>Third</Child>
          </EqualDivider>
        <Main />
      </Outer>
    );
  }
}

export default App;
