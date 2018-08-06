import React, { Component } from "react";
import VeggieButton from "./VeggieButton";
import Console from "./Console";

// styled components
import { Container, SideBar } from "./pick_style";

import appleButtonImage from "../../../images/pick_your_own/apple.png";
import peachButtonImage from "../../../images/pick_your_own/peach_button.png";
import pumpkinButtonImage from "../../../images/pick_your_own/pumpkin_button.png";

// messages
import { data } from "./console_messages";

class PickYourOwn extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = {
      button: [
        { name: "Apples", buttonState: false, image: appleButtonImage },
        { name: "Peaches", buttonState: false, image: peachButtonImage },
        { name: "Pumpkins", buttonState: false, image: pumpkinButtonImage }
      ],
      messageIsShown: true,
      pickTimes: "",
      location: "",
      message: ""
    };
  }

  componentDidMount() {
    this.handleMessage();
  }

  /**
   * Prepares the output for the console dependent on which button was
   * pressed. Split into three separate elements saved as states.
   * @param {*} veggie
   * @memberof PickYourOwn
   */
  handleMessage(veggie) {
    let headerString = "Picking Times: ";
    let locationString = "Where: ";
    let messageString = "";

    switch (veggie) {
      case "Apples":
        headerString += data.apple.appleDates;
        locationString += data.apple.appleLocation;
        messageString = data.apple.appleMessage;
        break;
      case "Peaches":
        headerString += data.peaches.peachDates;
        locationString += data.peaches.peachLocation;
        messageString = data.peaches.peachMessage;
        break;
      case "Pumpkins":
        headerString += data.pumpkins.pumpkinDates;
        locationString += data.pumpkins.pumpkinLocation;
        messageString = data.pumpkins.pumpkinMessage;
        break;
      default:
        headerString = data.default.defaultHeader;
        locationString = data.default.defaultHours;
        messageString = data.default.defaultMessage;
    }
    this.setState({ pickTimes: headerString });
    this.setState({ location: locationString });
    this.setState({ message: messageString });
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
    let selectedVeggie = "";
    let pressedButton = e.target.id;

    this.setState({ messageIsShown: false });
    setTimeout(
      function() {
        buttonTemp.map(function(entry) {
          if (entry.name === pressedButton) {
            entry.buttonState = true;
            selectedVeggie = entry.name;
          } else {
            entry.buttonState = false;
          }
          return entry;
        });
        this.setState({ button: buttonTemp });
        this.handleMessage(selectedVeggie);
        this.setState({ messageIsShown: true });
      }.bind(this),
      1000
    );
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
          pickTimes={this.state.pickTimes}
          location={this.state.location}
          message={this.state.message}
          messageShown={this.state.messageIsShown}
        />
      </Container>
    );
  }
}

export default PickYourOwn;
