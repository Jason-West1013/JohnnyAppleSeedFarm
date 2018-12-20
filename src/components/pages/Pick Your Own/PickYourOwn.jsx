import React, { Component } from "react";
import styled from "styled-components";
import VeggieButton from "./VeggieButton";
import Console from "./Console";

// images
import appleButtonImage from "../../../images/pick_your_own/apple.png";
import peachButtonImage from "../../../images/pick_your_own/peach_button.png";
import pumpkinButtonImage from "../../../images/pick_your_own/pumpkin_button.png";

// messages
import { data } from "./console_messages";
import { images } from "./console_images";

// styled componenets
const Container = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
`;

class PickYourOwn extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.setCurrentButton = this.setCurrentButton.bind(this);
    this.state = {
      button: [
        {
          name: "Apples",
          buttonState: false,
          buttonImage: appleButtonImage,
          consoleImages: images.apples,
          consoleMessage: {
            pickTimes: data.apple.appleDates,
            location: data.apple.appleLocation,
            message: data.apple.appleMessage
          }
        },
        {
          name: "Peaches",
          buttonState: false,
          buttonImage: peachButtonImage,
          consoleImages: images.peaches,
          consoleMessage: {
            pickTimes: data.peaches.peachDates,
            location: data.peaches.peachLocation,
            message: data.peaches.peachMessage
          }
        },
        {
          name: "Pumpkins",
          buttonState: false,
          buttonImage: pumpkinButtonImage,
          consoleImages: images.pumpkins,
          consoleMessage: {
            pickTimes: data.pumpkins.pumpkinDates,
            location: data.pumpkins.pumpkinLocation,
            message: data.pumpkins.pumpkinMessage
          }
        }
      ],
      currentButton: {
        consoleImages: images.default,
        consoleMessage: {
          pickTimes: data.default.defaultHeader,
          location: data.default.defaultHeader,
          message: data.default.defaultMessage
        }
      },
      messageIsShown: true
    };
  }

  /**
   * Handles button presses, changes the buttonState of the button and
   * calls the console message function to update it. Has a -wait- for
   * the fade transition when the console data changes.
   * @param {*} e
   * @memberof PickYourOwn
   */
  handleButton(e) {
    let buttonTemp = this.state.button;
    let pressedButton = e.target.id;

    this.setState({ messageIsShown: false });
    setTimeout(
      function() {
        buttonTemp.map(function(entry) {
          if (entry.name === pressedButton) {
            entry.buttonState = true;
          } else {
            entry.buttonState = false;
          }
          return entry;
        });
        this.setState({ button: buttonTemp });
        this.setCurrentButton();
        this.setState({ messageIsShown: true });
      }.bind(this),
      100
    );
  }

  setCurrentButton() {
    let selected = this.state.button.find(function(element) {
      return element.buttonState === true;
    });
    if (selected != null) {
      this.setState({ currentButton: selected });
    }
  }

  render() {
    return (
      <Container>
        <SideBar>
          <VeggieButton
            veggies={this.state.button}
            onButtonPress={this.handleButton}
          />
        </SideBar>
        <Console
          button={this.state.currentButton}
          messageShown={this.state.messageIsShown}
        />
      </Container>
    );
  }
}

export default PickYourOwn;
