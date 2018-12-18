import styled from "styled-components";
import transition from "styled-transition-group";

// images
import houseOrchard from "../../../images/orchard_trail.jpg";

export const Container = styled.div`
  //border: 0.1px solid white;
  position: relative;
  overflow: auto;
  height: 2800px;
  width: 100%;
  background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

export const OrchardMessage = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 25%;

  p {
    text-align: center;
    font-family: "Khula", sans-serif;
    color: #f3f3f5;
  }

  #midMessageWrapper {
    z-index: 4;
    position: relative;
    display: flex;
    align-items: center;
    top: 6%;
    left: 25%;
    height: 100%;
    width: 100%;
  }
`;

export const BottomParagraph = styled.p`
  text-shadow: 2px 2px 4px #000;
  font-size: 18px;
`;

export const BottomSection = styled.div`
  position: absolute;
  bottom: 1%;
  height: 20%;
  width: 100%;

  #beeGirl {
    position: relative;
    height: 100%;
    width: 100%;
  }

  #signature {
    position: absolute;
    bottom: 15%;
    left: 5%;
    color: #f3f3f5;
    font-size: 46px;
    font-family: "Sacramento", cursive;
  }
`;

// TopSection styles
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 9em 0;
  height: 300px;
  background-color: #338a3e;
  text-align: center;

  #sign-container {
    flex: 0.7;
  }
`;

export const SignImage = transition.img`
  height: 100%;
  width: 100%;
  
  &:enter {
    opacity: 0.01;
    transform: translateX(-100%);
  }

   &:enter-active {
      opacity: 1;
      transform: translateX(0%);
      transition: all 800ms ease-out;
   }
`;

export const TopMessage = transition.p`
   flex-basis: 40%;
   color: #f3f3f5;
   font-size: 1.5em;
   font-family: 'Khula', sans-serif;

    &:enter { opacity: 0.01; }

    &:enter-active {
      opacity: 1; 
      transition: all 2000ms ease;
    }
`;

// MiddleSection Styles
export const MiddleContainer = styled.div`
  display: flex;
  margin: 9em 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 500px;

  background-image: url(${houseOrchard});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

export const MiddleMessage = transition.p`
    flex-basis: 18%;
    color: #f3f3f5;
    font-size: 1.1em
    font-family: 'Khula', sans-serif;
    text-shadow: 2px 2px 4px #000;

    &:enter { opacity: 0.01; }

    &:enter-active {
        opacity: 1;
        transition: all 1000ms ease-out;
    }
`;
