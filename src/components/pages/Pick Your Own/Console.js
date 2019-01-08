import React from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import PropTypes from "prop-types";

// styled components
const Container = styled.div`
  height: 850px;
  position: relative;
  flex: 5;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  white-space: pre-wrap;
`;

const MessageContainer = transition.div`
  border: 1px solid red;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  margin: auto;
  height: 50%;
  width: 50%;
  text-align: center;

  &:enter { opacity: 0.01; }

  &:enter-active {
    opacity: 1;
    transition: all 1s ease-out;
  }
`;

const ImageContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ImageContainerRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// ConsoleImage Style
const ConsoleImageContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Console = ({ button, messageShown }) => {
  return (
    <Container>
      <ImageContainerLeft>
        <ConsoleImage images={button.consoleImages.splice(0, 2)} />
      </ImageContainerLeft>
      <MessageContainer unmountOnExit in={messageShown} timeout={1000}>
        <h2>{button.consoleMessage.pickTimes}</h2>
        <h3>{button.consoleMessage.location}</h3>
        <p>{button.consoleMessage.message}</p>
      </MessageContainer>
      <ImageContainerRight>
        <ConsoleImage images={button.consoleImages.splice(0, 2)} />
      </ImageContainerRight>
    </Container>
  );
};

const ConsoleImage = ({ images }) => {
  return images.map(function (result, i) {
    return (
      <ConsoleImageContainer key={i}>
        <img src={result.image} alt={result.name} />
      </ConsoleImageContainer>
    );
  });
};

Console.propTypes = {
  images: PropTypes.arrayOf(Object)
};

export default Console;
