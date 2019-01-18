import React from "react";
import styled from "styled-components";
import color from "../../../constants/colors";

// components
import Stand from "./Stand.js";

// images
import ellingtonImage from "../../../images/farm_markets/ellington_stand_redo.jpg";
import tollandImage from "../../../images/farm_markets/tolland_stand_redo.jpg";
import houseImage from "../../../images/farm_markets/home_orchard_redo.jpg";

// styled components
const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    ${color.whitePrimary},
    ${color.greenLight},
    ${color.whitePrimary}
  );
`;

const ellingtonStand = {
  name: "Ellington Stand",
  image: ellingtonImage,
  position: [41.903, -72.457],
  directionLink: "https://goo.gl/maps/1725hW8edTM2"
};

const EllingtonDescription = () => (
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

const EllingtonDirections = () => (
  <div>
    <h4>From Hartford, CT</h4>
    <p>
      I-84 East to exit 64, then follow Route 83 North to Ellington, address is
      185 West Road (Route 83), farm and market will be on your right.
    </p>
    <h4>From Springfield, MA</h4>
    <p>
      I-91 South to Exit 45, then follow Route 140 to Route 83 South the
      Ellington, farm and market will be on your left about half a mile down.
    </p>
  </div>
);

const tollandStand = {
  name: "Tolland Stand",
  image: tollandImage,
  position: [41.863, -72.424],
  directionLink: "https://goo.gl/maps/XJxtAUF2ng92"
};

const TollandDescription = () => (
  <div>
    <h2>244 Hartford Turnpike, Tolland, CT 06084</h2>
    <h3>Open everyday from Mid July to Christmas</h3>
    <h4>Opens at 9am --- Closing depends on season</h4>
    <p>
      Offers a fine selection of fresh fruits and vegetables as well as other
      native produce. We also offer hundreds of our own grown hardy mums in many
      stunning colors. We carry a good selection of native Christmas trees,
      wreaths, kissing balls, and other seasonal items
    </p>
    <h4>Handicap Accessible</h4>
  </div>
);

const TollandDirections = () => (
  <div>
    <h4>From Hartford, CT</h4>
    <p>
      I-84 to exit 67, left off of exit onto Route 31. Take a right at the
      second light onto Route 30, market is about 1 mile up Route 30 on the
      left. Address is 244 Hartford Turnpike (Route 30) Tolland. Market is brick
      building with green and white awning.
    </p>
  </div>
);

const houseOrchard = {
  name: "House Orchard",
  image: houseImage,
  position: [41.934, -72.402],
  directionLink: "https://goo.gl/maps/CsFri4NZCwL2"
};

const HouseDescription = () => (
  <div>
    <h2>13 Schoolhouse Road, Ellington, CT 06029</h2>
    <h3>Please call 860-875-1000 for hours</h3>
    <p>
      Our home orchard has many apple and peach trees that are open for the
      picking. Hours are determined by the season and day so please call the
      info line.
    </p>
  </div>
);

const HouseDirections = () => (
  <div>
    <h4>From Hartford, CT</h4>
    <p>
      I-84 East to exit 67, left off of exit onto Route 31. Take a right at the
      second light onto Route 30, follow Route 30. At second light, Route 30
      turns left (also called Crystal Lake Road). Continue to follow Route 30
      until blinking light. Turn left onto Route 140 (also Crystal Lake Road).
      Go about one half mile and take a sharp right onto Ludwig Road. Stay
      straight to go onto Wheelock Road, at end take slight left onto
      Schoolhouse Road, farm entrance will be just down on the right.
    </p>
    <h4>From Springfield, MA</h4>
    <p>
      I-91 South to exit 47E, merge onto Route 190 East. Follow 190 East to
      Route 83. Take a right onto Route 83 South, follow to Route 140 (at
      blinking light). Turn left onto Route 140, travel several miles to Ludwig
      Road (on left). Turn left onto Ludwig Road and follow straight onto
      Wheelock Road. Take a slight left onto Schoolhouse Road, farm entrance
      will be just down on right.
    </p>
  </div>
);

const FarmMarkets = () => (
  <Container>
    <Stand
      standInfo={ellingtonStand}
      description={<EllingtonDescription />}
      directions={<EllingtonDirections />}
    />
    <Stand
      standInfo={tollandStand}
      description={<TollandDescription />}
      directions={<TollandDirections />}
    />
    <Stand
      standInfo={houseOrchard}
      description={<HouseDescription />}
      directions={<HouseDirections />}
    />
  </Container>
);

export default FarmMarkets;
