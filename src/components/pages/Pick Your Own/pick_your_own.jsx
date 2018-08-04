import React, { Component } from "react";
import VeggieButton from "./veggie_button";

// styled components
import { Container, SideBar, Console } from "./pick_style";

class PickYourOwn extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = {
      button: [
        { name: "Apples", buttonState: false },
        { name: "Peaches", buttonState: false },
        { name: "Pumpkins", buttonState: false }
      ],
      message: ""
    };
  }

  componentDidMount() {
    this.handleMessage();
  }

  handleMessage(veggie) {
    let messageString = "";
    switch (veggie) {
      case "Apples":
        messageString = "Apples start in early Summer and run until Fall.";
        break;
      case "Peaches":
        messageString = "Peaches can be picked in early Summer.";
        break;
      case "Pumpkins":
        messageString =
          "Pumpkin picking occurs in September and runs until Halloween.";
        break;
      default:
        messageString =
          "Tap a button on the side to get more information on it!";
    }

    this.setState({ message: <p>{messageString}</p> });
  }

  handleButton(e) {
    let buttonTemp = this.state.button;
    let selectedVeggie = "";
    buttonTemp.map(function(entry) {
      if (entry.name === e.target.text) {
        entry.buttonState = true;
        selectedVeggie = entry.name;
      } else {
        entry.buttonState = false;
      }
      return entry;
    });
    this.setState({ button: buttonTemp });
    this.handleMessage(selectedVeggie);
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
        <Console>{this.state.message}</Console>
      </Container>
    );
  }
}

export default PickYourOwn;
