import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer } from "react-leaflet";
import color from "../../../constants/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;
  height: 100%;

  .detailed-directions {
    flex: 0.6;
    align-self: center;
    margin: 0 1.5rem 1.5rem 1.5rem;
    width: 100%;

    h4 {
      padding: 0.5rem;
      text-align: center;
      font-size: 1.15rem;
      font-family: "Lato", sans-serif;
    }

    p {
      padding: 0 10rem;
      font-size: 0.9rem;
      font-family: "Bitter", serif;
    }

    a {
      position: absolute;
      right: 2%;
      top: 75%;
      padding: 0.5rem 1rem;
      text-decoration: none;
      font-family: "Noto Sans", sans-serif;
      font-size: 0.8rem;
      border-radius: 0.5rem;
      background: ${color.googleBlueDark};
      color: ${color.whitePrimary};

      &:hover {
        background: ${color.googleBluePrimary};
        box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.4);
        text-shadow: 1px 1px 2px ${color.black};
      }

      &:active {
        box-shadow: none;
        text-shadow: none;
      }
    }
  }
`;

const Leaflet = styled(Map)`
  flex: 1;
  margin: 1rem 1.5rem; 1.5rem 1.5rem;
`;

const Directions = ({ position, link, description, click }) => {
  return (
    <Container
      onClick={function(e) {
        e.stopPropagation();
      }}
    >
      <Leaflet center={position} zoom={13}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </Leaflet>
      <div className="detailed-directions">
        <div onClick={click}>{description}</div>
        <a href={link} class="button">
          Get Directions
        </a>
      </div>
    </Container>
  );
};

Directions.propTypes = {
  position: PropTypes.arrayOf(Number),
  click: PropTypes.func
};

export default Directions;
