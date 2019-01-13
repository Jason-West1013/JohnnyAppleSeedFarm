// TODO: Need to add something before the bee girl footer

import React, { Component } from "react";
import styled from "styled-components";
import color from "../../../constants/colors";
import TopSection from "./TopSection.js";
import MiddleSection from "./MiddleSection.js";
import BottomSection from "./BottomSection.js";

// styled components
const Container = styled.div`
  position: relative;
  overflow: auto;
  background: linear-gradient(
    90deg,
    ${color.whitePrimary},
    ${color.greenLight},
    ${color.whitePrimary}
  );
  width: 100%;
  height: 100%;
  ${props =>
    props.background && {
      background: `linear-gradient(90deg, ${color.orangeLight}, ${
        color.orangePrimary
      }, ${color.orangeLight})`
    }};
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTopSection: false,
      showMidSection: false,
      showSignature: false,
      changeBackground: false
    };
    this.imageHandler = this.imageHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.imageHandler);
    this.setState({
      showTopSection: true
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.imageHandler);
  }

  imageHandler() {
    let currentPosition = window.scrollY;
    //console.log(currentPosition);
    if (currentPosition >= 300) {
      this.setState({
        showMidSection: true
      });
    }

    // toggle for background color
    if (currentPosition >= 0 && currentPosition <= 750) {
      this.setState({
        changeBackground: false
      });
      //console.log(this.state.changeBackground);
    } else {
      this.setState({
        changeBackground: true
      });
      //console.log(this.state.changeBackground);
    }

    console.log(this.props.intro);

    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      this.setState({
        showSignature: true
      });
    }
  }

  render() {
    return (
      <Container background={this.state.changeBackground}>
        <TopSection show={this.state.showTopSection} />
        <MiddleSection show={this.state.showMidSection} />
        <BottomSection show={this.state.showSignature} />
      </Container>
    );
  }
}

export default Home;
