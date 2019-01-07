import React, { Component } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import color from '../../constants/colors';
import NavButton from "./NavButton.js";

// images
import logo from "../../images/logo.png";
import headerBackground from "../../images/header_image.png";

// NOTE: current bug in the slide-down div TopNavBackground so had to set it to clear background when not onTop, would like it to slide away.

// styled components
const Head = styled.div`
  position: relative;
  height: 200px;
  width: 100%;

  background-image: url(${headerBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

const LogoContainer = styled.div`
  margin: auto;
  padding: 5px 0;
  overflow: hidden;
  width: 18em;
  text-align: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const NavBar = styled.nav`
  z-index: ${props => (props.stateTop ? "99" : undefined)};
  display: flex;
  position: ${props => (props.stateTop ? "fixed" : undefined)};
  top: ${props => (props.stateTop ? "0" : undefined)};
  width: ${props => (props.stateTop ? "100%" : undefined)};
  padding: 0.3em 0;
  justify-content: ${props => (props.stateTop ? "start" : "center")};
  text-align: center;
`;

const TopNavBackground = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
    position: absolute;
    top: 0;
    background: linear-gradient(${color.redDark}, ${color.redPrimary});
    width: 100%;
    height: 2.25em;

    &:enter {
      transform: translateY(-100%);
    }

    &:enter-active {
      transform: translateY(0%);
      transition: all 500ms ease-out;
    }

    &:exit {
      transform: translateY(0%);
    }

    &:exit-active {
      transform: translateY(-100%);
      transition: all 500ms ease-out;
    }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: false
    };
    this.stickyBar = this.stickyBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.stickyBar);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.stickyBar);
  }

  // sticks the nav bar to the top of the window when scrolled past
  stickyBar() {
    let el = document.getElementById("navbar");
    let position = window.scrollY;

    if (el.getBoundingClientRect().bottom <= 0) {
      this.setState({ onTop: true });
    } else if (position === 0) {
      this.setState({ onTop: false });
    }
  }

  render() {
    const buttons = [
      { page: "Home", navPath: "/", transDelay: "0s" },
      { page: "Pick your Own", navPath: "/PickYourOwn", transDelay: "0.15s" },
      { page: "Farm Markets", navPath: "/FarmMarkets", transDelay: "0.4s" },
      { page: "Recipes", navPath: "/recipes", transDelay: "0.65s" }
    ];

    return (
      <Head>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        <NavBar id="navbar" stateTop={this.state.onTop}>
          <TopNavBackground in={this.state.onTop} />
          <NavButton navButtons={buttons} stateTop={this.state.onTop} />
        </NavBar>
      </Head>
    );
  }
}

export default Header;
