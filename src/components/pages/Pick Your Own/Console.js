// layout will not work on small devices, needs to more work
// TODO: create and add animated sidebar buttons
// TODO: animate enter and exit of images (one component for each image)
import React from "react";
import styled from "styled-components";
import color from "../../../constants/colors";
import device from "../../../constants/media_queries";

// default console images
import donuts from "../../../images/donuts_3_scale.JPG";
import store from "../../../images/store.jpg";
import tractor from "../../../images/tractor.jpg";
import olof from "../../../images/olof.jpg";

// apple console images
import appleTrees from "../../../images/apple_trees.jpg";
import kids from "../../../images/kids_in_field_scale.jpg";
import crate from "../../../images/crate_apples.jpg";

// peach console images
import peachTree from "../../../images/peach_tree.png";
import peachTree2 from "../../../images/peach_trees2.png";
import peaches from "../../../images/peaches_scaled.png";
import peaches2 from "../../../images/peaches_scaled2.png";

// pumpkin console images
import pumpkins from "../../../images/pumpkins.png";
import cat from "../../../images/cat.png";
import olof2 from "../../../images/olof_kids.png";
import minion from "../../../images/minions.png";

const Container = styled.div`
  flex: 5;
  margin: 2rem 5rem;
  padding: 0 2rem;

  @media ${device.laptop} {
    margin: 0;
    padding: 0;
  }

  .container-1 {
    position: absolute;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 0.9rem;
    color: ${color.whitePrimary};
    background-color: ${color.redPrimary};
  }
`;

const DefaultContainer = styled.div`
  position: relative;

  .container-1 {
    z-index: 1;
    top: 5%;
    left: 12%;
    width: 35%;

    @media ${device.desktop} {
      left: 2%;
      width: 45%;
    }

    h1 {
      margin: 1rem;
    }

    p {
      margin: 1rem 2rem;
    }
  }

  .default-container-2 {
    padding-left: 47%;
  }

  .default-container-3 {
    margin-top: -8.5rem;
    margin-left: 40%;
  }

  .default-container-4 {
    z-index: 2;
    position: relative;
    margin-top: -11rem;
    margin-left: 15%;

    @media ${device.desktop} {
      margin-top: -10rem;
      margin-left: 8%;
    }
  }

  .default-container-5 {
    margin-top: -5.25rem;
    margin-left: 52%;
  }
`;

const AppleContainer = styled.div`
  position: relative;

  .container-1 {
    z-index: 2;
    top: 32%;
    left: 27%;
    width: 30%;

    @media ${device.desktop} {
      left: 30%;
    }

    h1 {
      margin: 1rem 0 0 0;
    }

    h3 {
      margin: 1rem;
    }

    p {
      margin: 1rem 2rem;
    }
  }

  .apple-container-2 {
    z-index: 1;
    position: relative;
    padding-left: 25%;

    @media ${device.desktop} {
      padding-left: 25%;
    }
  }

  .apple-container-3 {
    margin-top: -1rem;
    margin-left: 55%;

    @media ${device.desktop} {
      margin-left: 58%;
    }
  }

  .apple-container-4 {
    margin-top: -32rem;
    margin-left: 8%;

    @media ${device.desktop} {
      margin-left: 6%;
    }
  }
`;

const PeachContainer = styled.div`
  position: relative;

  .container-1 {
    z-index: 1;
    left: 40%;
    width: 32%;

    @media ${device.desktop} {
      left: 38%;
      width: 45%;
    }

    @media ${device.laptopL} {
      left: 45%;
    }

    h1 {
      margin: 1rem 0 0 0;
    }

    h3 {
      margin: 1rem;
    }

    p {
      margin: 1rem 2rem;
    }
  }

  .peach-container-2 {
    z-index: 2;
    position: relative;
    padding-left: 13%;

    @media ${device.desktop} {
      padding-left: 5%;
    }
  }

  .peach-container-3 {
    z-index: 3;
    position: relative;
    margin-top: -2.5rem;
    margin-left: 12.5%;

    @media ${device.desktop} {
      margin-left: 6%;
    }
  }

  .peach-container-4 {
    margin-top: -29.5rem;
    margin-left: 28%;

    @media ${device.desktop} {
      margin-left: 25%;
    }
  }

  .peach-container-5 {
    margin-top: -0.5rem;
    margin-left: 29%;

    @media ${device.desktop} {
      margin-left: 25%;
    }
  }
`;

const PumpkinContainer = styled.div`
  position: relative;

  .container-1 {
    z-index: 2;
    position: absolute;
    top: 22%;
    left: 23%;
    width: 25%;
    text-align: center;
    font-family: "Lato", sans-serif;
    font-size: 0.9rem;
    color: ${color.whitePrimary};
    background-color: ${color.redPrimary};

    @media ${device.desktop} {
      width: 32%;
    }

    h1 {
      margin: 2rem 0 0 0;
    }

    h3 {
      margin: 1rem;
    }

    p {
      margin: 1rem 2rem 2rem;
    }
  }

  .pumpkin-container-2 {
    z-index: 1;
    position: relative;
    padding-left: 18%;
  }

  .pumpkin-container-3 {
    margin-top: -1rem;
    margin-left: 48%;

    @media ${device.desktop} {
      margin-left: 55%;
    }
  }

  .pumpkin-container-4 {
    margin-top: -23rem;
    margin-left: 7%;

    @media ${device.desktop} {
      margin-top: -23rem;
      margin-left: 2.5%;
    }
  }

  .pumpkin-container-5 {
    margin-top: -12rem;
    margin-left: 23%;

    @media ${device.desktop} {
      margin-top: -10rem;
      margin-left: 22.5%;
    }
  }
`;

const Console = ({ button }) => {
  let display;

  switch (button.name) {
    case "Apples":
      display = <AppleDisplay />;
      break;
    case "Peaches":
      display = <PeachDisplay />;
      break;
    case "Pumpkins":
      display = <PumpkinDisplay />;
      break;
    default:
      display = <DefaultDisplay />;
  }

  return <Container>{display}</Container>;
};

const DefaultDisplay = () => (
  <DefaultContainer>
    <div className="container-1">
      <h1>U-Pick</h1>
      <h3>Tap a button on the right side to get more information on it!</h3>
      <p>
        All of our u-pick locations offer a great view and fun for the whole
        family. We offer free tractor rides to the picking on the weekends in
        the fall and all containers are provided.
        <br />
        The orchards are handicap accessible.
        <br />
        On <strong>Mondays</strong> and <strong>Tuesdays</strong>, we offer a
        10% discount to seniors at our u-pick locations.
        <br />
        Because we have several picking locations and because crop ripening
        depends heavily on weather conditions, we strongly advise you call us
        for picking conditions, times, and locations.
        <br />
        <br />
        <strong>860-875-1000</strong>
      </p>
    </div>
    <div className="default-container-2">
      <img src={donuts} alt="Cider Donuts" />
    </div>
    <div className="default-container-3">
      <img src={store} alt="Ellington Stand Peaches" />
    </div>
    <div className="default-container-4">
      <img src={olof} alt="Olof Tolland Stand" />
    </div>
    <div className="default-container-5">
      <img src={tractor} alt="Tractor Rides" />
    </div>
  </DefaultContainer>
);

const AppleDisplay = () => (
  <AppleContainer>
    <div className="container-1">
      <h1>Apples</h1>
      <h3>mid August - late October</h3>
      <h3>13 Schoolhouse Road and 231 Somers Road</h3>
      <p>
        We usually pick at only one location at a time, so it's best to call
        before you come. Our apple trees are all dwarfs, which means no ladders
        or climbing, all fruit is easy to reach from the ground. Once the apple
        orchard opens for season, we are usually open everyday unless the
        weather is bad.
        <br />
        <br />
        <strong>860-875-1000</strong>
      </p>
    </div>
    <div className="apple-container-2">
      <img src={appleTrees} alt="Apple Trees" />
    </div>
    <div className="apple-container-3">
      <img src={kids} alt="Kids in Field" />
    </div>
    <div className="apple-container-4">
      <img src={crate} alt="Crate of Apples" />
    </div>
  </AppleContainer>
);

const PeachDisplay = () => (
  <PeachContainer>
    <div className="container-1">
      <h1>Peaches</h1>
      <h3>August - September</h3>
      <h3>13 Schoolhouse Road</h3>
      <p>
        Peaches sometimes require extra time to ripen between pickings,
        therefore we do not always have u-pick peaches on a daily basis. All of
        our peaches are good for eating fresh and cooking with, although for
        canning and freezing we suggest you wait for the freestone varieties.
        These usually begin in late August and go to the end of the season.
        <br />
        August and go to the end of the season.
        <br />
        What is a freestone peach?
        <br />A peach whose flesh pulls away easily from the "stone" or pit when
        ripe. When processing peaches, using a freestone makes the job much
        easier.
        <br />
        <br />
        <strong>860-875-1000</strong>
      </p>
    </div>
    <div className="peach-container-2">
      <img src={peachTree2} alt="Peach Tree Skyline" />
    </div>
    <div className="peach-container-3">
      <img src={peachTree} alt="Peach Trees" />
    </div>
    <div className="peach-container-4">
      <img src={peaches2} alt="Peaches in store" />
    </div>
    <div className="peach-container-5">
      <img src={peaches} alt="Peaches" />
    </div>
  </PeachContainer>
);

const PumpkinDisplay = ({ name }) => (
  <PumpkinContainer>
    <div className="container-1">
      <h1>Pumpkins</h1>
      <h3>lat September - Halloween</h3>
      <h3>231 Somers Road</h3>
      <p>
        Along with the hundreds of pumpkins available at our stands, we also
        offer u-pick pumpkins at our patch located in our apple orchard. There
        is a corn maze also available at this location.
        <br />
        <br />
        <strong>860-875-1000</strong>
      </p>
    </div>
    <div className="pumpkin-container-2">
      <img src={pumpkins} alt="Pumpkins" />
    </div>
    <div className="pumpkin-container-3">
      <img src={cat} alt="Cat in Patch" />
    </div>
    <div className="pumpkin-container-4">
      <img src={olof2} alt="Olof with kids" />
    </div>
    <div className="pumpkin-container-5">
      <img src={minion} alt="Minions" />
    </div>
  </PumpkinContainer>
);

export default Console;
