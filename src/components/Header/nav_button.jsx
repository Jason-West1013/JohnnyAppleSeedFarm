import React, { Component } from "react";
import PropTypes from "prop-types";
import StyledLink from "./header_styles";

// The Link is handled in the styled-component file.
class NavButton extends Component {
  render() {
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
