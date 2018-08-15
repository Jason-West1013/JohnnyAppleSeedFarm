import React, { Component } from "react";
import {
  ComponentContainer,
  DescriptionSlider,
  ImageContainer,
  DirectionContainer,
  DescriptionHeader,
  AnimationContainer,
  AnimatedLine
} from "./farm_styles";

class TollandStand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showDirections: false
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      hover: !prevState.hover
    }));
  }

  handleClick() {
    this.setState(prevState => ({
      showDirections: !prevState.showDirections
    }));
  }

  render() {
    const headerState = this.state.hover || this.state.showDirections;

    return (
      <ComponentContainer
        directions={this.state.showDirections}
        onClick={this.handleClick}
      >
        <DescriptionHeader
          unmountOnExit
          in={headerState}
          timeout={1000}
          ifClicked={this.state.showDirections}
        >
          Tolland Stand
        </DescriptionHeader>
        <ImageContainer
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          unmountOnExit
          in={!this.state.showDirections}
          timeout={3000}
        >
          <DescriptionSlider
            unmountOnExit
            in={this.state.hover}
            timeout={1000}
          />
        </ImageContainer>
        <AnimationContainer dir={"left"} show={this.state.showDirections}>
          <AnimatedLine
            dir={"left"}
            unmountOnExit
            in={this.state.showDirections}
            timeout={2000}
          />
        </AnimationContainer>
        <AnimationContainer dir={"right"} show={this.state.showDirections}>
          <AnimatedLine
            dir={"right"}
            unmountOnExit
            in={this.state.showDirections}
            timeout={2000}
          />
        </AnimationContainer>
        <DirectionContainer
          unmountOnExit
          in={this.state.showDirections}
          timeout={3000}
        />
      </ComponentContainer>
    );
  }
}
export default TollandStand;
