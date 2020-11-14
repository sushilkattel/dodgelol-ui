import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../../assets/colors';
import {ReactComponent as Logo} from '../../assets/dogslol.svg';
import {ReactComponent as OverviewScreenshot} from '../../assets/appOverview.svg';
import {ReactComponent as InsightScreenshot} from '../../assets/appInsight.svg';
import PerformanceContainer from '../../components/Home/PerformanceContainer';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScrollAnimation from 'react-animate-on-scroll';
import copy from '../../content/Home/home.json';

const StyledNavbar = styled(Navbar)`
  &&& {
    margin-bottom: 15px;
    background-color: ${colors.$blue};

    button {
      margin-left: 25px;
      width: 107px;
    }
    .navbar-brand {
      color: white;
    }
    .navbar-nav {
      margin-right: 50px;
    }
  }
`;

const StyledLogo = styled(Logo)`
  height: 115px;
  width: 238px;
`;

const ScrollLink = styled.a`
  background-color: ${colors.$red};
  bottom: 10px;
  border-radius: 50%;
  padding: 50px;
  position: absolute;
  right: 45%;
`;

function App() {
  return (
    <React.Fragment>
      <StyledNavbar sticky="top" variant="dark" bg={colors.$blue}>
        <Navbar.Brand>
          <StyledLogo />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="danger">About Us</Button>
          <Button variant="danger">Contact Us</Button>
        </Nav>
      </StyledNavbar>
      <ScrollAnimation animateIn="fadeInLeftBig" duration={2}>
        <PerformanceContainer
          section="overview"
          copy={copy.performanceOverview}
          containerAlignLeft
          Screenshot={OverviewScreenshot} />
          <ScrollLink href="#insight">V</ScrollLink>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRightBig" duration={2}>
        <PerformanceContainer
          section="insight"
          copy={copy.performanceInsight}
          Screenshot={InsightScreenshot} />
      </ScrollAnimation>
    </React.Fragment>
  );
}

export default App;
