import React, { Component } from "react";
import PropTypes from "prop-types";
import StyledLink from "./header_styles";

// The Link is handled in the styled-component file.
class NavButton extends Component {
  render() {
<<<<<<< HEAD
    const style = {
      background: this.state.hover
        ? "linear-gradient(#d32f2f, #ff6659)"
        : "linear-gradient(#9a0007, #d32f[=- 2f)",
      textShadow:
        this.state.hover && !this.state.click ? "1px 1px 2px #000" : undefined,
      boxShadow:
        this.state.hover && !this.state.click
          ? "-1px 2px 2px rgba(0,0,0,0.4)"
          : undefined,
      transition: "background 0.7s ease",
      textDecoration: "none",
      border: "1px solid #000",
      color: "white",
      width: "120px",
      padding: "0.35% 1%"
    };

    // event functions
    const handleHover = () =>
      this.setState(prevState => ({
        hover: !prevState.hover
      }));
    const handleMouseClick = () =>
      this.setState(prevState => ({
        click: !prevState.click
      }));

=======
>>>>>>> a48f631f1a74667fa1aa1f3337ac1ffe1af4e6ab
    return (
      <StyledLink
        to={this.props.navPath}
        altNavBar={this.props.stateTop}
        delay={this.props.transDelay}
        in={this.props.stateTop}
      >
        {this.props.page}
      </StyledLink>
    );
  }
}

NavButton.propTypes = {
  navPath: PropTypes.string,
  page: PropTypes.string
};

export default NavButton;
