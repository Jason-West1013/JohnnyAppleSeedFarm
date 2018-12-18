import React, { Component } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import PropTypes from "prop-types";
import device from "../media_queries";

// images
import ellingtonSign from "../../../images/ellington_sign_2.JPG";

// styled components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 9em 0;
  height: 300px;
  background-color: #338a3e;
  text-align: center;

  #sign-container {
    flex: 0.7;

    @media ${device.laptop} {
      flex: 0.95;
    }
  }
`;

const SignContainer = transition.div.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
  
  &:enter {
    opacity: 0.01;
    transform: translateX(-100%);
  }

   &:enter-active {
      opacity: 1;
      transform: translateX(0%);
      transition: all 800ms ease-out;
   }
`;

const Message = transition.p.attrs({
  unmountOnExit: true,
  timeout: 1000
})`
   flex-basis: 40%;
   color: #f3f3f5;
   font-size: 1.5em;
   font-family: 'Khula', sans-serif;

    &:enter { opacity: 0.01; }

    &:enter-active {
      opacity: 1; 
      transition: all 2000ms ease;
    }
`;

class TopSection extends Component {
  render() {
    return (
      <Container>
        <div id="sign-container">
          <SignContainer in={this.props.show}>
            <img src={ellingtonSign} alt="Ellington Sign" />
          </SignContainer>
        </div>
        <Message in={this.props.show}>
          We here at the farm are very proud of our beautiful surroundings and
          the work it has taken to get us here. We would like to tell you a
          little about the farm and what we have to offer...
        </Message>
      </Container>
    );
  }
}

TopSection.propTypes = {
  show: PropTypes.bool
};

export default TopSection;
