import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import styled, { css, keyframes } from "styled-components";

// fa- fonts lib
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // line should exist in each page
import {
  faEnvelope,
  faKey,
  faHome,
  faAt
} from "@fortawesome/free-solid-svg-icons"; // icons exist this page

library.add(faEnvelope, faKey, faHome, faAt); //fa envelope

// Routing starts

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);
// Routing ends

const Outer = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
`;

const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 42px;
`;

const Header = styled.div`
  text-align: left;
  background-color: black;
  text-decoration: strong;
  height: 5erm;
  padding: 1em 2em 2em 3em;
  color: white;
  font-family: "Roboto Condensed", serif;

  > h2 {
    font-family: "Roboto Slab", serif;
    ${props => props.theme.uppercase && "text-transform: uppercase"};
    ${props => props.theme.font && "font-family: 'Acme', serif"};
    color: purple;
  }
`;
const FooterContent = styled.div`
  background-color: indigo;
  height: 4erm;
  padding: 1erm;
  padding-bottom: 1em;
  color: beige;
  font-family: "Roboto Condensed", serif;

  > h2 {
    font-family: "Roboto Slab", serif;
    ${props => props.theme.uppercase && "text-transform: uppercase"};
    ${props => props.theme.font && "font-family: 'Roboto Slab', serif"};
    color: purple;
  }
`;
const Title = styled.div`
  font-size: 1.2em;
  font-family: "Roboto Condensed", sans-serif;
  float: right;
  padding-bottom: 0.2em;
`;
const MainContent = styled.section`
  align: center
  font-size: 1.2em;
  width: 100%
  background: lightblue
  color: darkblue
  border-top: 2px solid white
  border-bottom: 2px solid black
  font-family: 'Roboto'
`;
const Capsule = styled.div`  
display: inline-block
  border-radius: 5px
  margin: 0.5rem 1rem
  padding: 0.5rem 1rem
  align: left
  background: #CCC
  border-top: 2px solid lightgrey
  border-bottom: 2px solid grey
`;
const Intro = styled.p`
  font-size: large
  font-family: 'Roboto Mono'
  background: #750
  color: cornflowerblue
`;
const Label = styled.p`
  font-size: normal;
  font-family: "Lato";
`;
const Button = styled.button`
  cursor: pointer;
  display: inline-block
  border-radius: 3px
  padding: 0.5rem
  margin: 0.5rem
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
  ${props =>
    props.alert &&
    css`
  background: orangered
  color: black 
  border: 2px solid orangered
`}
  `;

const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: #ccc;
  ${props => props.vertical && "flex-direction: column;"} > * {
    flex: 1;

    &:not(:first-child) {
      ${props => (props.vertical ? "margin-top" : "margin-left")}: 1rem;
    }
  }
`;

const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: #aaa;
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
        <MainContent>
          <Intro>
            <FontAwesomeIcon icon="at" />
            VDemo | React Page. Bottom UP. Here goes. Stay tuned for more Jazz
          </Intro>
          <Capsule>
            <BasicExample />
          </Capsule>
          <EqualDivider vertical>
            <Child>
              <EqualDivider>
                <Child>
                  <Label>Label</Label>
                  <Label>Label</Label>
                  <Label>Label</Label>
                  <Label>Label</Label>
                </Child>
                <Child>
                  <Button>Button</Button>
                  <Button primary>Primary</Button>
                  <Button alert>Alert</Button>
                  <Button>Info</Button>
                </Child>
                <Child>
                  <Capsule>Encapsulated</Capsule>
                </Child>
                <Child>Fourth</Child>
              </EqualDivider>
            </Child>
            <Child>
              Second
              <EqualDivider>
                <Child>First</Child>
                <Child>Second</Child>
              </EqualDivider>
            </Child>
            <Child>Third</Child>
          </EqualDivider>
        </MainContent>
        <FooterContent>
          -- Footer
          <EqualDivider>
            <Child>First</Child>
            <Child>Second</Child>
            <Child>Third</Child>
            <Child>Fourth</Child>
          </EqualDivider>
        </FooterContent>
      </Outer>
    );
  }
}

export default App;
