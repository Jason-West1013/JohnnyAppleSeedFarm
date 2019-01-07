import React from "react";
import PropTypes from 'prop-types';
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

const BottomSection = ({ show }) => (
  <Container>
    <Signature in={show}>
      Fruitfully,
          <br />
      Kenny & Kim Shores
        </Signature>
  </Container>
);

BottomSection.propTypes = {
  show: PropTypes.bool
};

export default BottomSection;
