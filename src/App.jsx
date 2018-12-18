import React from "react";
import styled from "styled-components";
import device from "./components/pages/media_queries";
import { connect } from "react-redux";
import Main from "./components/main";

// media query default sizes
const Container = styled.div`
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

// redux
const mapStateToProps = state => {
  return { articles: state.articles };
};

const App = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

export default connect(mapStateToProps)(App);
