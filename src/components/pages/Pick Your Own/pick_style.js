import styled from "styled-components";
import transition from "styled-transition-group";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
`;

// VeggieButton styles
export const Buttons = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  width: 100%;
  height: 10em;
  background: ${props => (props.buttonPressed ? "blue" : undefined)};

  img {
    height: 12em;
    width: 13em;
  }

  &:hover {
    background: red;
    color: white;
  }

  &:active {
    background: green;
  }

  &:visited {
    background: blue;
  }
`;

// Console styles
export const ConsoleContainer = styled.div`
  display: flex;
  flex-basis: 85%;
  overflow: hidden;
  white-space: pre-wrap;
`;

export const MessageContainer = transition.div`
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

export const ImageContainerLeft = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
`;

export const ImageContainerRight = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
`;

// ConsoleImage Style
export const ConsoleImageContainer = styled.div`
  border: 1px solid red;
  flex-basis: 50%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;
