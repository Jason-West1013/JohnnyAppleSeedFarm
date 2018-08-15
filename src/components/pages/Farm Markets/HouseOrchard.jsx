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

class HouseOrchard extends Component {
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
          in={headerState}
          ifClicked={this.state.showDirections}
        >
          House Orchard
        </DescriptionHeader>
        <ImageContainer
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          in={!this.state.showDirections}
        >
          <DescriptionSlider in={this.state.hover} />
        </ImageContainer>
        <AnimationContainer dir={"left"} show={this.state.showDirections}>
          <AnimatedLine dir={"left"} in={this.state.showDirections} />
        </AnimationContainer>
        <AnimationContainer dir={"right"} show={this.state.showDirections}>
          <AnimatedLine dir={"right"} in={this.state.showDirections} />
        </AnimationContainer>
        <DirectionContainer in={this.state.showDirections} />
      </ComponentContainer>
    );
  }
}

export default HouseOrchard;
