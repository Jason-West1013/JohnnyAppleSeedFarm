import React, { Component } from "react";
import styled from "styled-components";
import NavButton from "./nav_button";

// styles
import { Head, LogoContainer, Logo } from "./header_styles";

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
    const NavBar = styled.nav`
      display: flex;
      justify-content: center;
      text-align: center;
      z-index: ${this.state.onTop ? "99" : undefined};
      position: ${this.state.onTop ? "fixed" : undefined};
      top: ${this.state.onTop ? "0" : undefined};
      width: ${this.state.onTop ? "100%" : undefined};
      background: ${this.state.onTop ? "#ff6659" : undefined};
    `;

    return (
      <Head>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>

        <NavBar id="navbar">
          <NavButton page="Home" navPath="/" top={this.state.onTop} />
          <NavButton
            page="Pick Your Own"
            navPath="/pick_your_own"
            top={this.state.onTop}
          />
          <NavButton
            page="Farm Markets"
            navPath="/farm_markets"
            top={this.state.onTop}
          />
          <NavButton
            page="Directions"
            navPath="/directions"
            top={this.state.onTop}
          />
          <NavButton page="Recipes" navPath="/recipes" top={this.state.onTop} />
        </NavBar>
      </Head>
    );
  }
}

export default Header;
