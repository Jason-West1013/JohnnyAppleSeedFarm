import React, { Component } from "react";
import Stand from "./Stand";
import { EllingtonLeft, EllingtonRight } from "./EllingtonSides";
import { TollandLeft, TollandRight } from "./TollandSides";
import { HouseLeft, HouseRight } from "./HouseSides";

// images
import ellingtonImage from "../../../images/farm_markets/ellington_stand_redo.jpg";
import tollandImage from "../../../images/farm_markets/tolland_stand_redo.jpg";
import houseImage from "../../../images/farm_markets/home_orchard_redo.jpg";

// styles
import { Container } from "./farm_styles";

const ellingtonStand = {
  name: "Ellington Stand",
  image: ellingtonImage,
  position: [41.903, -72.457]
};

const tollandStand = {
  name: "Tolland Stand",
  image: tollandImage,
  position: [41.863, -72.424]
};

const houseOrchard = {
  name: "House Orchard",
  image: houseImage,
  position: [41.934, -72.402]
};

class FarmMarkets extends Component {
  render() {
    return (
      <Container>
        <Stand
          standInfo={ellingtonStand}
          left={<EllingtonLeft />}
          right={<EllingtonRight />}
        />
        <Stand
          standInfo={tollandStand}
          left={<TollandLeft />}
          right={<TollandRight />}
        />
        <Stand
          standInfo={houseOrchard}
          left={<HouseLeft />}
          right={<HouseRight />}
        />
      </Container>
    );
  }
}

export default FarmMarkets;
