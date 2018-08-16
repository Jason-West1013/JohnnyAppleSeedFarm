import React, { Component } from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import {
  ComponentContainer,
  DescriptionSlider,
  ImageContainer,
  FarmImage,
  DirectionContainer,
  LeftContainer,
  Directions,
  Leaflet,
  RightContainer,
  DescriptionHeader,
  OpenSliderAnimationContainer,
  AnimationContainer,
  AnimatedLine,
  DirectionDescription
} from "./farm_styles";

//images
import ellingtonStand from "../../../images/farm_markets/ellington_stand_redo.jpg";

class EllingtonStand extends Component {
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
    const position = [41.903, -72.457];

    return (
      <ComponentContainer
        directions={this.state.showDirections}
        onClick={this.handleClick}
      >
        <DescriptionHeader
          in={headerState}
          ifClicked={this.state.showDirections}
        >
          Ellington Stand
        </DescriptionHeader>

        <ImageContainer
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          in={!this.state.showDirections}
        >
          <FarmImage src={ellingtonStand} alt={"Ellington Stand"} />
          <DescriptionSlider in={this.state.hover} />
        </ImageContainer>

        <OpenSliderAnimation showState={this.state.showDirections} />

        <DirectionContainer in={this.state.showDirections}>
          <LeftContainer />
          <Directions
            onClick={function(e) {
              e.stopPropagation();
            }}
          >
            <Leaflet center={position} zoom={13}>
              <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={position}>
                <Popup>A pretty CSS3 popup.</Popup>
              </Marker>
            </Leaflet>
            <DirectionDescription onClick={this.handleClick} />
          </Directions>
          <RightContainer />
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

export default EllingtonStand;
