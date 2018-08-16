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
    const buttons = [
      { page: "Home", navPath: "/", transDelay: "0s" },
      { page: "Pick your Own", navPath: "/PickYourOwn", transDelay: "0.15s" },
      { page: "Farm Markets", navPath: "/FarmMarkets", transDelay: "0.4s" },
      { page: "Directions", navPath: "/directions", transDelay: "0.65s" },
      { page: "Recipes", navPath: "/recipes", transDelay: "0.9s" }
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
