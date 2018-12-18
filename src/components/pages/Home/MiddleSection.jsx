import React, { Component } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import PropTypes from "prop-types";
import device from "../media_queries";

// images
import houseOrchard from "../../../images/orchard_trail.jpg";

// styled components
export const Container = styled.div`
  display: flex;
  margin: 9em 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 450px;

  background-image: url(${houseOrchard});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const Message = transition.p.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
    flex-basis: 18%;
    color: #f3f3f5;
    font-size: 1.1em;
    font-family: 'Khula', sans-serif;
    text-shadow: 2px 2px 4px #000;

    @media ${device.laptop} {
      flex-basis: 35%;
    }

    &:enter { opacity: 0.01; }
    &:enter-active {
        opacity: 1;
        transition: all 1000ms ease-out;
    }
`;

class MiddleSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallScreen: false
    };
  }

  render() {
    return (
      <Container>
        <Message in={this.props.show}>
          The orchard at 231 Somers Road (Route 83) in Ellington was originally
          planted in 1977-78. Since then, we have replaced many of the older
          trees with new ones to keep our orchards in good production.
          <br />
          Our newer orchard located at 13 Schoolhouse Road in Ellington, was
          started in 1996 and is still being added to. We now offer 60 acres of
          dwarf apple trees bearing 15 different varieties and 30 acres of easy
          to reach peach trees.
        </Message>
      </Container>
    );
  }
}

MiddleSection.propTypes = {
  show: PropTypes.bool
};

export default MiddleSection;
