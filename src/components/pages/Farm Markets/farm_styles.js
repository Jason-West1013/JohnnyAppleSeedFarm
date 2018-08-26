import styled from "styled-components";
import transition from "styled-transition-group";
import { Map } from "react-leaflet";

// Colors
import { greyPrimary, greyDark, greyLight } from "../../../colors";

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
  width: 100%;
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
      width: 15em;
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
    z-index: 97;
    position: absolute;
    display: flex;
    height: 30em;
    width: 80%;
    background-color: ${greyPrimary};

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

export const OpenSliderAnimationContainer = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  height: 5%;
`;

export const AnimationContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  ${props => (props.dir === "left" ? "left: 0;" : "right: 0")};
  width: 50%;
  height: 100%;
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

export const Directions = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 0.8;
  height: 100%;
`;

export const Leaflet = styled(Map)`
  flex: 1;
`;

export const DirectionDescription = styled.div`
  flex: 0.6;
`;

export const LeftContainer = styled.div`
  border: 1px solid red;
  height: 100%;
  flex: 1;
`;

export const RightContainer = styled.div`
  border: 1px solid red;
  height: 100%;
  flex: 1;
`;

export default Container;
