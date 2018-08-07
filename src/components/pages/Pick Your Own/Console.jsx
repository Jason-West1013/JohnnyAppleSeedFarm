import React from "react";
import PropTypes from "prop-types";

import {
  ConsoleContainer,
  MessageContainer,
  ImageContainerLeft,
  ImageContainerRight,
  ConsoleImageContainer
} from "./pick_style";

const Console = ({ button, messageShown }) => {
  return (
    <ConsoleContainer>
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
    </ConsoleContainer>
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
  // pickTimes: PropTypes.string,
  // location: PropTypes.string,
  // message: PropTypes.string,
  consoleImages: PropTypes.arrayOf(Object)
};

export default Console;
