import React, { Component } from "react";
import PropTypes from "prop-types";
import { MiddleContainer, MiddleMessage } from "./home_style";

class MiddleSection extends Component {
  render() {
    return (
      <MiddleContainer>
        <MiddleMessage unmountOnExit in={this.props.show} timeout={1000}>
          The orchard at 231 Somers Road (Route 83) in Ellington was originally
          planted in 1977-78. Since then, we have replaced many of the older
          trees with new ones to keep our orchards in good production.
          <br />
          Our newer orchard located at 13 Schoolhouse Road in Ellington, was
          started in 1996 and is still being added to. We now offer 60 acres of
          dwarf apple trees bearing 15 different varieties and 30 acres of easy
          to reach peach trees.
        </MiddleMessage>
      </MiddleContainer>
    );
  }
}

MiddleSection.propTypes = {
  show: PropTypes.bool
};

export default MiddleSection;
