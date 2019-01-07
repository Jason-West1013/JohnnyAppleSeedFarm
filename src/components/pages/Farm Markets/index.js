import React from "react";
import styled from "styled-components";
import color from '../../../constants/colors';

// componenets
import Stand from "./Stand.js";
import { EllingtonLeft, EllingtonRight } from "./EllingtonSides.js";
import { TollandLeft, TollandRight } from "./TollandSides.js";
import { HouseLeft, HouseRight } from "./HouseSides.js";

// images
import ellingtonImage from "../../../images/farm_markets/ellington_stand_redo.jpg";
import tollandImage from "../../../images/farm_markets/tolland_stand_redo.jpg";
import houseImage from "../../../images/farm_markets/home_orchard_redo.jpg";

// styled components
const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, ${color.whitePrimary}, ${color.greenLight}, ${color.whitePrimary});
`;

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

const FarmMarkets = () => (
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

export default FarmMarkets;
