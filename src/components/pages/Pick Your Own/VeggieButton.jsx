import React from "react";
import PropTypes from "prop-types";

import { Buttons } from "./pick_style";

const VeggieButton = ({ veggies, onButtonPress }) => {
  return veggies.map(function(result, i) {
    return (
      <Buttons
        id={result.name}
        onClick={onButtonPress}
        buttonPressed={result.buttonState}
        key={i}
      >
        <img id={result.name} src={result.buttonImage} alt={result.name} />
      </Buttons>
    );
  });
};

VeggieButton.propTypes = {
  veggies: PropTypes.arrayOf(Object),
  onButtonPress: PropTypes.func
};

export default VeggieButton;
