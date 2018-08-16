import styled from "styled-components";
import transition from "styled-transition-group";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// images
import headerBackground from "../../images/tree_background.png";

// header Styles
export const Head = styled.div`
  position: relative;
  height: 200px;
  width: 100%;

  background-image: url(${headerBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

export const LogoContainer = styled.div`
  margin: auto;
  padding: 5px 0;
  overflow: hidden;
  width: 18em;
  text-align: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const NavBar = styled.nav`
  z-index: ${props => (props.stateTop ? "99" : undefined)};
  display: flex;
  position: ${props => (props.stateTop ? "fixed" : undefined)};
  top: ${props => (props.stateTop ? "0" : undefined)};
  width: ${props => (props.stateTop ? "100%" : undefined)};
  padding: 0.3em 0;
  justify-content: ${props => (props.stateTop ? "start" : "center")};
  text-align: center;
`;

export const TopNavBackground = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
    position: absolute;
    top: 0;
    background: linear-gradient(#9a0007, #d32f2f);
    width: 100%;
    height: 2.25em;

    &:enter {
      transform: translateY(-100%);
    }

    &:enter-active {
      transform: translateY(0%);
      transition: all 500ms ease-out;
    }

    &:exit {
      transform: translateY(0%);
    }

    &:exit-active {
      transform: translateY(-100%);
      transition: all 500ms ease-out;
    }
`;

// NavButton Styles
export const StyledLink = transition(Link).attrs({
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

StyledLink.propTypes = {
  altbar: PropTypes.string
};

export default StyledLink;
