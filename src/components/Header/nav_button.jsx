import React from "react";
import transition from "styled-transition-group";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styled components
const StyledLink = transition(Link).attrs({
  unmountOnExit: false,
  timeout: 100000
})`
  padding: 0.35% 1%;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9em;
  color: white;

  ${props =>
    props.altbar
      ? undefined
      : `
    width: 120px;
    border: 1px solid #000;
    background: linear-gradient(#9a0007, #d32f2f);

    &:hover {
      background: linear-gradient(#d32f2f, #ff6659);
      box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.4);
    }
  `}

  &:hover {
    text-shadow: 1px 1px 2px #000
  }

  &:active {
    text-shadow: none;
    box-shadow: none;
  }

  &:enter {
    opacity: 0.01;
    transform: translateX(150%);
  }

  &:enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: 
      transform 500ms ease-out ${props => props.delay}, 
      opacity 500ms ease-out ${props => props.delay};
`;

const NavButton = ({ navButtons, stateTop }) => {
  return navButtons.map(function(result, i) {
    return (
      <StyledLink
        altbar={stateTop ? "true" : undefined}
        to={result.navPath}
        delay={result.transDelay}
        in={stateTop}
        key={i}
      >
        {result.page}
      </StyledLink>
    );
  });
};

NavButton.propTypes = {
  navButtons: PropTypes.arrayOf(Object),
  stateTop: PropTypes.bool
};

export default NavButton;
