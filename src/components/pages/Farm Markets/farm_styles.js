import styled from "styled-components";
import transition from "styled-transition-group";

// Colors
import { greyPrimary, greyDark } from "../../../colors";

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

export const ComponentContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 1em;
  width: 60em;
  height: 30em;
`;

export const ImageContainer = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
  position: relative;
  overflow: hidden;
  width: 28em;
  height: 25em

    &:enter {
        transform: translateY(-120%);
    }

    &:enter-active {
        transform: translateY(0%);
        transition: all 1000ms ease-out 0.6s;
    }

    &:exit {
        transform: translateY(0%);
    }

    &:exit-active {
        transform: translateY(-150%);
        transition: all 1000ms ease-out;
    }
`;

export const FarmImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const DescriptionSlider = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
    position: absolute;
    display: flex;
    align-items: center;
    background-color: ${greyDark};
    bottom: 0;
    width: 100%;
    height: 50%;
    opacity: 0.8;
    text-align: center;

    p {
        color: #f3f3f5;
    }
  
    &:enter {
        opacity: 0.01;
        transform: translateY(100%);
    }
  
    &:enter-active {
        opacity: 0.8;
        transform: translateY(0%);
        transition: all 1000ms ease-out;
    }
  
    &:exit {
        opacity: 0.8; 
        transform: translateY(0%);
    }
  
    &:exit-active {
        opacity: 0.01;
        transform: translateY(100%);
        transition: all 1000ms ease-out;
    }
`;

export const DescriptionHeader = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
      border: 2px solid #f3f3f5;
      z-index: 98;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: ${props => (props.ifClicked ? "0" : "2.5em")};
      width: 25%;
      height: 2em;
      font-family: 'Ultra', serif;
      font-size: 1em;
      opacity: 0.9;
      background-color: ${greyDark};
      color: #f3f3f5;
      transform: ${props =>
        props.ifClicked
          ? "translateY(0%); transition: all 1000ms ease-out;"
          : "opacity: 0.01; transition: all 1000ms ease-out;"};
  
      &:enter {
          opacity: 0.01;
      }
  
      &:enter-active {
          opacity: 0.9;
          transition: all 1000ms ease-out;
      }
  
      &:exit {
          opacity: 0.9;
      }
  
      &:exit-active {
          opacity: 0.01;
          transition: all 1000ms ease-out;
      }
  `;

export const DirectionContainer = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
    position: absolute;
    background-color: ${greyPrimary};
    height: 30em;
    width: 100%;

    &:enter {
        transform: translateY(-100%);
    }

    &:enter-active {
        transform: translateY(0%);
        transition: all 1000ms ease-out 2s;
    }

    &:exit {
        transform: translateY(0%);
    }

    &:exit-active {
        transform: translateY(-100%);
        transition: all 1000ms ease-out;
    }
`;

export const AnimationContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  ${props => (props.dir === "left" ? "left: 0;" : "right: 0")};
  width: 50%;
  height: 20%;
`;

export const AnimatedLine = transition.div.attrs({
  unmountOnExit: true,
  timeout: 2000
})`
    position: relative; 
    width: 100%;
    height: 0.5em;
    background-color: ${greyPrimary};

    &:enter {
        ${props =>
          props.dir === "left"
            ? "transform: translateX(100%);"
            : "transform: translateX(-100%);"};
      }
    
    &:enter-active {
        transform: translate(0%);
        transition: all 800ms ease-out 1s;
    }

    &:exit {
        opacity: 1;
    }

    &:exit-active {
        opacity: 0.01;
        transition: all 1000ms ease-out;
    }
`;

export default Container;
