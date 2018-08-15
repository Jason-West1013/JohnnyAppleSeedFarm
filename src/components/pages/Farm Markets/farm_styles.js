import styled from "styled-components";
import transition from "styled-transition-group";

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ComponentContainer = styled.div`
  border: 1px solid green;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 1em;
  width: 40em;
  height: 30em;
`;

export const ImageContainer = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
  border: 1px solid red;
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

export const DirectionContainer = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
    position: absolute;
    background-color: blue;
    width 40em;
    height: 30em;

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

export const DescriptionHeader = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
    border: 1px solid black;
    z-index: 999;
    position: absolute;
    width: 20%;
    height: 2em;
    text-align: center;
    top: ${props => (props.ifClicked ? "0" : "2.5em")};
    transform: ${props =>
      props.ifClicked
        ? "translateY(0%); transition: all 1000ms ease-out;"
        : "opacity: 0.01; transition: all 1000ms ease-out;"};

    &:enter {
        opacity: 0.01;
    }

    &:enter-active {
        opacity: 1;
        transition: all 1000ms ease-out;
    }

    &:exit {
        opacity: 1;
    }

    &:exit-active {
        opacity: 0.01;
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
    background-color: blue;

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

export const DescriptionSlider = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
  border: 1px solid black;
  position: absolute;
  background-color: green;
  bottom: 0;
  width: 100%;
  height: 50%;

  &:enter {
      opacity: 0.01;
      transform: translateY(100%);
  }

  &:enter-active {
      opacity: 1;
      transform: translateY(0%);
      transition: all 1000ms ease-out;
  }

  &:exit {
      opacity: 1; 
      transform: translateY(0%);
  }

  &:exit-active {
      opacity: 0.01;
      transform: translateY(100%);
      transition: all 1000ms ease-out;
  }
`;

export default Container;
