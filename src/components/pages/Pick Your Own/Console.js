import React from "react";
import styled from "styled-components";
import transition from "styled-transition-group";
import PropTypes from "prop-types";

// styled components
const Container = styled.div`
  display: flex;
  flex-basis: 85%;
  overflow: hidden;
  white-space: pre-wrap;
`;

const MessageContainer = transition.div`
  border: 1px solid black;
  height: 100%;
  flex-basis: 40%;
  text-align: center;

  &:enter { opacity: 0.01; }

  &:enter-active {
    opacity: 1;
    transition: all 1s ease-out;
  }
`;

const ImageContainerLeft = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
`;

const ImageContainerRight = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
`;

// ConsoleImage Style
const ConsoleImageContainer = styled.div`
  border: 1px solid red;
  flex-basis: 50%;
  width: 100%;

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
  return images.map(function(result, i) {
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
