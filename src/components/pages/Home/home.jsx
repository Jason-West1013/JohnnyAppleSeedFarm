import React, { Component } from "react";

// styles
import {
  Container,
  MiddleSec,
  OrchardMessage,
  MidLeftImage,
  MidLeftBackground,
  MiddleParagraph,
  MidMessageBackground,
  MidRightImage,
  MidRightBackground,
  BottomParagraph,
  BottomSection
} from "./home_style";

import TopSection from "./TopSection";
import MiddleSection from "./MiddleSection";

// images
//import ellingtonSign from "../../../images/ellington_sign_2.JPG";
import beeGirl from "../../../images/bee_girl.png";
import olaf from "../../../images/olaf_kids.jpg";
import pumpkins from "../../../images/pumpkin_patch.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTopSection: false,
      showMidTopSection: false,
      showMidMidSection: false
    };
    this.imageHandler = this.imageHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.imageHandler);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.imageHandler);
  }

  imageHandler() {
    let currentPosition = window.scrollY;
    if (currentPosition >= 0) {
      this.setState({ showTopSection: true });
      if (currentPosition >= 300) {
        this.setState({ showMidTopSection: true });
        if (currentPosition >= 1150) {
          this.setState({ showMidMidSection: true });
        }
      }
    }
  }

  render() {
    const { showMidMidSection } = this.state;

    return (
      <Container>
        <TopSection show={this.state.showTopSection} />
        <MiddleSection show={this.state.showMidTopSection} />
        <MiddleSec>
          <div id="middleMiddle">
            <MidLeftImage
              unmountOnExit
              in={showMidMidSection}
              timeout={1000}
              src={pumpkins}
              alt="Pumpkin Patch"
            />
            <MidLeftBackground
              unmountOnExit
              in={showMidMidSection}
              timeout={1000}
            />
            <MidMessageBackground
              unmountOnExit
              in={showMidMidSection}
              timeout={1000}
            />
            <MidRightImage
              unmountOnExit
              in={showMidMidSection}
              timeout={1000}
              src={olaf}
              alt="Kids with Olaf"
            />
            <MidRightBackground
              unmountOnExit
              in={showMidMidSection}
              timeout={1000}
            />
            <OrchardMessage>
              <div id="midMessageWrapper">
                <MiddleParagraph
                  unmountOnExit
                  in={showMidMidSection}
                  timeout={1000}
                >
                  In the fall we also have a pumpkin patch and corn maze located
                  at the Somers Road location. We also grow a variety of other
                  fruits and vegetables as well as seasonal items which may be
                  purchased at one of our farm markets.
                </MiddleParagraph>
              </div>
            </OrchardMessage>
          </div>
          <div id="middleBottom">
            <OrchardMessage>
              <BottomParagraph>
                The weather plays a huge role in all that we do, so it is
                advised to give the farm line a call before you come to get up
                to date information.
                <br />
                860-875-1000
              </BottomParagraph>
            </OrchardMessage>
          </div>
        </MiddleSec>
        <BottomSection>
          <img id="beeGirl" src={beeGirl} alt="Bee Girl in Field" />
          <p id="signature">
            Fruitfully,
            <br />
            Kenny and Kim Shores
          </p>
        </BottomSection>
      </Container>
    );
  }
}

export default Home;
