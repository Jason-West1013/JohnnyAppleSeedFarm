import React from "react";
import transition from "styled-transition-group";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import color from '../../constants/colors';

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
    border: 1px solid ${color.black};
    background: linear-gradient(${color.redDark}, ${color.redPrimary});

    &:hover {
      background: linear-gradient(${color.redPrimary}, ${color.redLight});
      box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.4);
    }
  `}

  &:hover {
    text-shadow: 1px 1px 2px ${color.black}
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
  return navButtons.map(function (result, i) {
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
