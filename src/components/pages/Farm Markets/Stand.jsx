import React, { Component } from "react";
import PropTypes from "prop-types";
import Directions from "./Directions";
import {
  ComponentContainer,
  DescriptionSlider,
  ImageContainer,
  FarmImage,
  DirectionContainer,
  LeftContainer,
  RightContainer,
  DescriptionHeader,
  OpenSliderAnimationContainer,
  AnimationContainer,
  AnimatedLine
} from "./farm_styles";

class Stand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      showDirections: true
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
          {this.props.standInfo.name}
        </DescriptionHeader>

        <ImageContainer
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          in={!this.state.showDirections}
        >
          <FarmImage src={this.props.standInfo.image} alt={"Ellington Stand"} />
          <DescriptionSlider in={this.state.hover} />
        </ImageContainer>

        <OpenSliderAnimation showState={this.state.showDirections} />

        <DirectionContainer in={this.state.showDirections}>
          <LeftContainer>{this.props.left}</LeftContainer>
          <Directions
            position={this.props.standInfo.position}
            click={this.handleClick}
          />
          <RightContainer>{this.props.right}</RightContainer>
        </DirectionContainer>
      </ComponentContainer>
    );
  }
}

const OpenSliderAnimation = ({ showState }) => {
  return (
    <OpenSliderAnimationContainer>
      <AnimationContainer dir={"left"} show={showState}>
        <AnimatedLine dir={"left"} in={showState} />
      </AnimationContainer>
      <AnimationContainer dir={"right"} show={showState}>
        <AnimatedLine dir={"right"} in={showState} />
      </AnimationContainer>
    </OpenSliderAnimationContainer>
  );
};

Stand.propTypes = {
  standInfo: PropTypes.object,
  left: PropTypes.Component,
  right: PropTypes.Component
};

export default Stand;
