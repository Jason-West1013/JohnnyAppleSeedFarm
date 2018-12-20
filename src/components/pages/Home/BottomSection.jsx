import React, { Component } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";

// images
import beeGirl from "../../../images/footer.png";

// styled components
const Container = styled.div`
  margin: 9em 0 0.5em;
  width: 100%;
  height: 450px;

  background-image: url(${beeGirl});
  background-size: 100% auto;
  background-position: bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

const Signature = transition.p.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
  position: absolute;
  bottom: 0;
  padding-left: 6%;
  padding-bottom: 4%;
  color: white;
  font-family: "Sacramento", cursive;
  font-weight: bold;
  font-size: 3em;

  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: all 1000ms ease-out;
  }
`;

class BottomSection extends Component {
  render() {
    return (
      <Container>
        <Signature in={this.props.show}>
          Fruitfully,
          <br />
          Kenny & Kim Shores
        </Signature>
      </Container>
    );
  }
}

export default BottomSection;
