import React, { Component } from "react";
import {
  ComponentContainer,
  DescriptionSlider,
  ImageContainer,
  FarmImage,
  DirectionContainer,
  DescriptionHeader,
  AnimationContainer,
  AnimatedLine
} from "./farm_styles";

// images
import tollandStand from "../../../images/farm_markets/tolland_stand_redo.jpg";

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
          in={headerState}
          ifClicked={this.state.showDirections}
        >
          Tolland Stand
        </DescriptionHeader>
        <ImageContainer
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          in={!this.state.showDirections}
        >
          <FarmImage src={tollandStand} alt={"Tolland Stand"} />
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
export default TollandStand;
