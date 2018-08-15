import React, { Component } from "react";
import EllingtonStand from "./EllingtonStand";
import TollandStand from "./TollandStand";
import HouseOrchard from "./HouseOrchard";

// styles
import { Container } from "./farm_styles";

class FarmMarkets extends Component {
  render() {
    return (
      <Container>
        <EllingtonStand />
        <TollandStand />
        <HouseOrchard />
      </Container>
    );
  }
}

export default FarmMarkets;
