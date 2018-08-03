import React, { Component } from "react";
import NavButton from "./nav_button";

// NOTE: current bug in the slide-down div TopNavBackground so had to set it to clear background when not onTop, would like it to slide away.

// styles
import {
  Head,
  LogoContainer,
  Logo,
  NavBar,
  TopNavBackground
} from "./header_styles";

// images
import logo from "../../images/logo.png";

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
    return (
      <Head>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        <NavBar id="navbar" stateTop={this.state.onTop}>
          <TopNavBackground
            unmountOnExit
            in={this.state.onTop}
            timeout={1000}
          />
          <NavButton
            page="Home"
            navPath="/"
            stateTop={this.state.onTop}
            transDelay={"0s"}
          />
          <NavButton
            page="Pick Your Own"
            navPath="/pick_your_own"
            stateTop={this.state.onTop}
            transDelay={"0.15s"}
          />
          <NavButton
            page="Farm Markets"
            navPath="/farm_markets"
            stateTop={this.state.onTop}
            transDelay={"0.4s"}
          />
          <NavButton
            page="Directions"
            navPath="/directions"
            stateTop={this.state.onTop}
            transDelay={"0.65s"}
          />
          <NavButton
            page="Recipes"
            navPath="/recipes"
            stateTop={this.state.onTop}
            transDelay={"0.9s"}
          />
        </NavBar>
      </Head>
    );
  }
}

export default Header;
