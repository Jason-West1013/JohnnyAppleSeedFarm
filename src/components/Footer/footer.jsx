import React from "react";
import Media from "react-media";
import styled from "styled-components";

// images
import facebook from "../../images/facebook_dark.png";

// styled components
const Foot = styled.div`
  border-top: 10px solid #32893d;
  height: 50px;
  width: 100%;
  background: linear-gradient(#65ba69, #97ed98);
`;

const Address = styled.p`
  position: relative;
  float: left;
  top: 25%;
  left: 1%;
  font-family: "PT Serif", serif;
`;

const RightDiv = styled.div`
  position: relative;
  right: 1%;
  float: right;
  height: 100%;
`;

const RightDivHeader = styled.h3`
  //border: 1px solid #000;
  position: relative;
  top: 15%;
  float: left;
  padding: 0 10px;
  font-family: "Pacifico", cursive;
`;

const FacebookIcon = styled.img`
  float: right;
`;

const Footer = () => {
  return (
    <Foot>
      <Address>
        13 Schoolhouse Rd. &bull; Ellingtion, CT 06024 &bull; <b>Farm</b>{" "}
        860-875-1000 &bull; <b>Office</b> 860-875-1030
      </Address>
      <RightDiv>
        <Media
          query="(min-width: 800px)"
          render={() => <RightDivHeader>Like Us</RightDivHeader>}
        />
        <a href="https://www.facebook.com/johnnyappleseedfarmct/">
          <FacebookIcon src={facebook} />
        </a>
      </RightDiv>
    </Foot>
  );
};

export default Footer;
