import styled from "styled-components";

// imported to pick_style
export const Container = styled.div`
  height: 1050px;
  width: 100%;
  background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

export const Top = styled.ul`
  position: relative;
  top: 2%;
  height: 13%;
  text-align: center;
`;

export const List = styled.li`
  display: inline;
`;

export const Sign = styled.div`
  //border: 1px solid black;
  position: relative;
  top: 5%;
  height: 80%;
  width: 100%;
  max-height: 800px;

  #chalkboard {
    position: absolute;
    height: 50px;
    width: 50px;
    background: black;
  }

  img {
    display: block;
    margin: auto;
    max-width: 1000px;
  }
`;

// imported to veggie_button
export const Buttons = styled.img`
  margin: 0 8%;
  height: 100%;
  width: 12%;
  max-width: 150px;
  max-height: 150px;
`;
