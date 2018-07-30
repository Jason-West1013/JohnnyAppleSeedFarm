import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "../../../node_modules/styled-components";

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      click: false
    };
  }

  render() {
    // style sheet for each button, changes if hovered over or clicked
    const StyledLink = styled(Link)`
      background: ${
        this.state.hover
          ? "linear-gradient(#d32f2f, #ff6659)"
          : "linear-gradient(#9a0007, #d32f2f)"
      };
      text-shadow: ${
        this.state.hover && !this.state.click ? "1px 1px 2px #000" : undefined
      };
      boxShadow: ${
        this.state.hover && !this.state.click
          ? "-1px 2px 2px rgba(0,0,0,0.4)"
          : undefined
      };
      transition: background 0.7s ease;
      text-decoration: none;
      border: 1px solid #000;
      color: white
      width: 120px
      padding: 0.35% 1%
    `;

    // event functions
    const handleHover = () =>
      this.setState(prevState => ({
        hover: !prevState.hover
      }));
    const handleMouseClick = () =>
      this.setState(prevState => ({
        click: !prevState.click
      }));

    return (
      <StyledLink
        href={() => void 0}
        to={this.props.navPath}
        onMouseOver={handleHover}
        onFocus={() => void 0}
        onMouseOut={handleHover}
        onBlur={() => void 0}
        onMouseDown={handleMouseClick}
        onMouseUp={handleMouseClick}
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
