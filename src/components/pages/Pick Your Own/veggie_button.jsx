import React, { Component } from "react";
import PropTypes from "prop-types";

import { Buttons } from "./pick_style";

class VeggieButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const style = {
      boxShadow: this.state.hover ? "-1px 2px 2px rgba(0,0,0,0.4)" : undefined
    };

    const handleHover = () =>
      this.setState(prevState => ({
        hover: !prevState.hover
      }));

    return (
      <Buttons
        src={this.props.buttonImage}
        alt={this.props.altSrc}
        style={style}
        onFocus={() => void 0}
        onMouseOver={handleHover}
      />
    );
  }
}

VeggieButton.propTypes = {
  buttonImage: PropTypes.string,
  altSrc: PropTypes.string
};

export default VeggieButton;
