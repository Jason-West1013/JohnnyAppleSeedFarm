import styled from "styled-components";

// images
import headerBackground from "../../images/tree_background.png";

export const Head = styled.div`
  position: relative;
  height: 200px;
  width: 100%;

  background-image: url(${headerBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

export const LogoContainer = styled.div`
  margin: auto;
  padding: 5px 0;
  overflow: hidden;
  text-align: center;
`;

export const Logo = styled.img`
  width: 300px;
`;
