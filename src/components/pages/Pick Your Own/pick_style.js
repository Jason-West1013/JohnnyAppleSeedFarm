import styled from "styled-components";

// imported to pick_style
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

export const Console = styled.div`
  border: 1px solid red;
  flex-basis: 75%;
  overflow: hidden;
  text-align: center;
`;

export const Buttons = styled.a`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  width: 100%;
  height: 10em;
  background: ${props => (props.buttonPressed ? "blue" : undefined)};

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
