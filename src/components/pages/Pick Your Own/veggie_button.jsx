import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VeggieButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    render() {

        return(
          <img src={this.props.imgSrc} alt={this.props.altSrc} />
        );
    }
}

VeggieButton.propTypes = {
    imgSrc: PropTypes.string,
    altSrc: PropTypes.string
}

export default VeggieButton;