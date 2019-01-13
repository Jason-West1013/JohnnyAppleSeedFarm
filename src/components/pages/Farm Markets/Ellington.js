import React from "react";
import styled from "styled-components";

import tractor from "../../../images/tractor_scaled.png";

const LeftContainer = styled.div`
  .container-left {
    position: relative;
    margin-left: -10rem;
  }
`;

export const EllingtonDescription = () => (
  <div>
    <h2>231 Somers Road, Ellington, CT 06029</h2>
    <h3>Open everyday from Mid July thru Thanksgiving</h3>
    <h4>Opens at 9am --- Closing depends on season</h4>
    <p>
      Offers a fine selection of fresh fruits and vegetables as well as other
      native produce. Our orchards are open to the public to pick your own
      apples straight from the tree.
    </p>
    <h4>Handicap Accessible</h4>
  </div>
);

export const EllingtonDirectionDescription = () => (
  <div>
    <p>We're going places in Ellington.</p>
  </div>
);

export const EllingtonLeft = () => {
  return (
    <LeftContainer>
      <div className="container-left">
        <img src={tractor} alt="Ellington Tractor Rides" />
      </div>
    </LeftContainer>
  );
};

export const EllingtonRight = () => {
  return (
    <div>
      <p>Right Side</p>
    </div>
  );
};
