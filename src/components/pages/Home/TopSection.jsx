import React, { Component } from "react";
import PropTypes from "prop-types";
import { TopContainer, SignImage, TopMessage } from "./home_style";
import ellingtonSign from "../../../images/ellington_sign_2.JPG";

class TopSection extends Component {
  render() {
    return (
      <TopContainer>
        <div id="sign-container">
          <SignImage
            src={ellingtonSign}
            alt="Ellington Sign"
            unmountOnExit
            in={this.props.show}
            timeout={1000}
          />
        </div>
        <TopMessage unmountOnExit in={this.props.show} timeout={1000}>
          We here at the farm are very proud of our beautiful surroundings and
          the work it has taken to get us here. We would like to tell you a
          little about the farm and what we have to offer...
        </TopMessage>
      </TopContainer>
    );
  }
}

TopSection.propTypes = {
  show: PropTypes.bool
};

export default TopSection;
