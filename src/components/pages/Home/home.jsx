import React, { Component } from "react";
import styled from "styled-components";

// component imports
import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";

// styled components
export const Container = styled.div`
  position: relative;
  overflow: auto;
  width: 100%;
  background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTopSection: false,
      showMidSection: false,
      showMidMidSection: false
    };
    this.imageHandler = this.imageHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.imageHandler);
    this.setState({ showTopSection: true });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.imageHandler);
  }

  imageHandler() {
    let currentPosition = window.scrollY;
    if (currentPosition >= 300) {
      this.setState({ showMidSection: true });
      if (currentPosition >= 1150) {
        this.setState({ showMidMidSection: true });
      }
    }
  }

  render() {
    return (
      <Container>
        <TopSection show={this.state.showTopSection} />
        <MiddleSection show={this.state.showMidSection} />
        <BottomSection />
      </Container>
    );
  }
}

export default Home;
