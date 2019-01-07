import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Buttons = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  width: 100%;
  height: 10em;
  background: ${props => (props.buttonPressed ? "blue" : undefined)};

  img {
    height: 12em;
    width: 13em;
  }

  &:hover {
    background: red;
    color: white;
  }

  &:active {
    background: green;
  }

  &:visited {
    background: blue;
  }
`;

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
