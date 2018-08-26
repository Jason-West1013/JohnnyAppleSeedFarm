import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 0.8;
  height: 100%;
`;

export const Leaflet = styled(Map)`
  flex: 1;
`;

export const DirectionDescription = styled.div`
  flex: 0.6;
`;

const Directions = ({ position, click }) => {
  return (
    <Container
      onClick={function(e) {
        e.stopPropagation();
      }}
    >
      <Leaflet center={position} zoom={13}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.</Popup>
        </Marker>
      </Leaflet>
      <DirectionDescription onClick={click} />
    </Container>
  );
};

Directions.propTypes = {
  position: PropTypes.arrayOf(Number),
  click: PropTypes.func
};

export default Directions;
