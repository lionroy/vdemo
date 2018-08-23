import React, { Component, Fragment } from "react";
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
  faAt,
  faArchway,
  faAtlas
} from "@fortawesome/free-solid-svg-icons"; // icons exist this page

library.add(faEnvelope, faKey, faHome, faAt, faArchway, faAtlas); //fa envelope

// Routing starts

const Home = () => (
  <Fragment>
    <h2>Our Projects</h2>
    <Intro>Projects decriptions...</Intro>
  </Fragment>
);

const About = () => (
  <Fragment>
    <h2>Our Company Brand</h2>
    <Intro>Established in 1999, decriptions...</Intro>
  </Fragment>
);

const Topic = ({ match }) => (
  <Fragment>
    <h3>{match.params.topicId}</h3>
  </Fragment>
);


const Topics = ({ match }) => (
  <Fragment>
    <h2>Examples</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Demo I: Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Demo II: Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Demo III: Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>This selected topic now renders</h3>}
    />
  </Fragment>
);

const BasicExample = () => (
  <Router>
    <UnEqualDivider horizontal>
      <InnerDivider vertical>
        <Lpanel>
          <Child>
            <ul>
              <Child>
                <li>
                  <FontAwesomeIcon icon="home" />&nbsp;
            <Link to="/">Projects</Link>
                </li>
              </Child>
              <Child>
                <li>
                  <FontAwesomeIcon icon="archway" />&nbsp;

            <Link to="/about">About</Link>&nbsp;
          </li>
              </Child>
              <Child>
                <li>
                  <FontAwesomeIcon icon="atlas" />&nbsp;
            <Link to="/topics">Examples</Link>&nbsp;
          </li>
              </Child>
            </ul>
          </Child>
        </Lpanel>
      </InnerDivider>
      <Child>
        <Monitor>
          <Capsule style={{ flex: 1, flexDirection: 'column' }}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </Capsule>
        </Monitor>
      </Child>
    </UnEqualDivider>
  </Router>
);
// Routing ends

const Outer = styled.div`
  text-align: left;
  width: 80%;
  margin: auto;
`;

const spin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${spin} infinite 200s linear;
  height: 42px;
`;

const Header = styled.div`
  diaplay: flex;
  flex: 1;
  text-align: left;
  background-color: #333;
  text-decoration: strong;
  height: 5erm;
  padding: 1em 2em 2em 1em;
  color: lightgray;
  font-family: "Roboto", sans-serif;

  > h2 {
    font-family: "Roboto Slab", serif;
    color: blue;
    ${props => props.theme.uppercase && "text-transform: uppercase"};
    ${props => props.theme.font && "font-family: 'Acme', sans-serif"};
  }
`;
const FooterContent = styled.div`
  background-color: #444;
  height: 350px;
  padding: 1erm;
  padding-bottom: 1em;
  color: #ddd;
  font-family: "Roboto", sans-serif;

  > h2 {
    color: purple;
    font-family: "Roboto Slab", ans-serif;
    ${props => props.theme.uppercase && "text-transform: uppercase"}
    ${props => props.theme.font && "font-family: 'Roboto Slab', sans-serif"}
  }
`
const Title = styled.div`
  font-size: 1.2em
  font-family: "Roboto Condensed", sans-serif
  float: right
  padding-bottom: 0.1em
`
const MainContent = styled.section`
  align: center
  font-size: 1.2em
  width: 100%
  background: #eee
  color: primary
  border-top: 5px solid lightgreen
  border-bottom: 2px solid black
  font-family: 'Roboto'
`;
const UnEqualDivider = styled.div`
  display: flex;
  margin: 0.2rem;
  padding: 1rem;
  background: #999;
  ${props => props.horizontal && "flex-direction: row;"} > * {
    flex: 1;

  }
`;
const Lpanel = styled.div`
  border-bottom: 5px solid green;
  display: flex
  flex: 1;
  height: 400px;
  width: 200px;
  margin: 0 0.1em;
  border-radius: 2em 0 0 0
  text-align: left
  background: #ddd
  ${props => props.horizontal && "flex-direction: row;"} > * {
    flex: 1;
  `

const Capsule = styled.div`  
  display: flex
  flex: 1;
  height: 400px
  margin: 0 0 0.1em 0.1em;
  border-radius: 2em 0 0 0
  padding: 0.5rem 1rem
  text-align: left
  background: #ddd
`;
const Monitor = styled.div`
  display: flex;
  background: #555;
`
const Intro = styled.p`
  font-size: 1.2em
  font-family: 'Roboto Mono'
  background: transparent
  color: navyblue
  margin: auto
  width: 66%
  justify: 'center'
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
  margin: 0.2rem;
  padding: 1rem;
  background: #ccc;
  ${props => props.vertical && "flex-direction: column;"} > * {
    flex: 1;

    &:not(:first-child) {
      ${props => (props.vertical ? "margin-top" : "margin-left")}: 0.4rem;
    }
  }
`;
const InnerDivider = styled.div`
  display: flex;
  width: 200px;
  border: 1px solid green;
`;

const Child = styled.div`
  background: #aaa;
`;


// more routing

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Menu Copy</div>,
    main: () => <h2>What will you have today?</h2>
  },
  {
    path: "/fintech",
    sidebar: () => <div>Static help content</div>,
    main: () => <h2>Main event and content</h2>
  },
  {
    path: "/blockchain",
    sidebar: () => <div>More help options</div>,
    main: () => <h2>more content...</h2>
  }
];

const SidebarExample = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">Strategy</Link>
          </li>
          <li>
            <Link to="/fintech">Fintech</Link>
          </li>
          <li>
            <Link to="/blockchain">Blockchain</Link>
          </li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

class App extends Component {
  render() {
    return (
      <Outer>
        <Header uppercase>
          <Logo src={logo} alt="logo" />
          <Title>
            <h2>React Demo</h2>
          </Title><Intro>
            This is a simple React page build from 'scratch' just to learn the drill.<br />
            Stay tuned for more Jazz...
          </Intro>
        </Header>
        <MainContent>
          <Intro>
            The site is supposedly responsive, and mostly dealing with GUI till i feel it looks fine enough. Share your thought and ideas too.
            so here goes and I'll keep you posted for fun stuff.
          </Intro>
          <UnEqualDivider horizontal>
            <Child>
              <Child>
                <BasicExample />
              </Child>
              <Child>
                <Monitor>
                  child 99
                  <SidebarExample />
                </Monitor>
              </Child>
            </Child>
          </UnEqualDivider>
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
                  <Button info>Info</Button>
                </Child>
                <Child>
                  <Capsule>Encapsulated</Capsule>
                </Child>
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
          Footer
          <EqualDivider>
            <Child>Columns</Child>
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