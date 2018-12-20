import React, { Component } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";

// colors
import { greyPrimary } from "../../../colors";

// styled components
const Container = styled.div`
  position: absolute;
  top: 0;
  width: 80%;
  height: 5%;
`;

const AnimationContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  ${props => (props.dir === "left" ? "left: 0;" : "right: 0")};
  width: 50%;
  height: 100%;
`;

const AnimatedLine = transition.div.attrs({
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

class SliderAnimation extends Component {
  render() {
    return (
      <Container>
        <AnimationContainer dir={"left"} show={this.props.showState}>
          <AnimatedLine dir={"left"} in={this.props.showState} />
        </AnimationContainer>
        <AnimationContainer dir={"right"} show={this.props.showState}>
          <AnimatedLine dir={"right"} in={this.props.showState} />
        </AnimationContainer>
      </Container>
    );
  }
}

export default SliderAnimation;
