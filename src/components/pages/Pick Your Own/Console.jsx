import React from "react";
import PropTypes from "prop-types";

import {
  ConsoleContainer,
  MessageContainer,
  ImageContainerLeft,
  ImageContainerRight,
  ConsoleImage
} from "./pick_style";

const Console = ({ pickTimes, location, message, messageShown }) => {
  return (
    <ConsoleContainer>
      <ImageContainerLeft>
        <ConsoleImage />
        <ConsoleImage />
      </ImageContainerLeft>
      <MessageContainer unmountOnExit in={messageShown} timeout={1000}>
        <h2>{pickTimes}</h2>
        <h3>{location}</h3>
        <p>{message}</p>
      </MessageContainer>
      <ImageContainerRight>
        <ConsoleImage />
        <ConsoleImage />
      </ImageContainerRight>
    </ConsoleContainer>
  );
};

Console.propTypes = {
  pickTimes: PropTypes.string,
  location: PropTypes.string,
  message: PropTypes.string
};

export default Console;
