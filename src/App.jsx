import React, { Component } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import device from "./media_queries";
import { connect } from "react-redux";
import Main from "./components/main";

// images
import introImage from "./images/angry_birds_2.JPG";

// colors
import { whitePrimary } from "./colors";

// styled components
const MainContainer = styled.div`
  ${props =>
    props.intro && {
      position: "fixed"
    }};

  @media ${device.desktopL} {
    min-width: 2000px;
  }

  @media ${device.desktop} {
    min-width: 1400px;
  }

  @media ${device.laptop} {
    min-width: 800px;
  }
`;

const IntroContainer = transition.div.attrs({
  unmountOnExit: true,
  timeout: 3000
})`
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${whitePrimary};
  background-image: url(${introImage});
  background-size: 100% auto;
  font-family: 'Sacramento', cursive;
  font-size: 2.5em;
  color: ${whitePrimary};
  text-shadow: 2px 2px 4px #000;
  
  &:exit {
    transform: translateY(0%); }
  &:exit-active {
    transform: translateY(-100%);
    transition: all 1000ms ease-out;
  }
`;

// redux
const mapStateToProps = state => {
  return { articles: state.articles };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { intro: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ intro: false });
  }

  render() {
    return (
      <div>
        <IntroContainer in={this.state.intro} onClick={this.handleClick}>
          <h1>Johnny AppleSeed Farm</h1>
          <p>Ellington, CT</p>
        </IntroContainer>
        <MainContainer intro={this.state.intro}>
          <Main />
        </MainContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
