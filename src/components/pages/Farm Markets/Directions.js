import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  flex: 0.8;
  height: 100%;
`;

const Leaflet = styled(Map)`
  flex: 1;
`;

const DirectionDescription = styled.div`
  flex: 0.6;
`;

const Directions = ({ position, description, click }) => {
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
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.</Popup>
        </Marker>
      </Leaflet>
      <DirectionDescription onClick={click}>{description}</DirectionDescription>
    </Container>
  );
};

Directions.propTypes = {
  position: PropTypes.arrayOf(Number),
  click: PropTypes.func
};

export default Directions;
