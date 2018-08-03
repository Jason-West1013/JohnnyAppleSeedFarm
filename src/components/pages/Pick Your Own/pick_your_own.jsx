import React, { Component } from "react";
import VeggieButton from "./veggie_button";

// styled components
import { Container, SideBar, Console } from "./pick_style";

class PickYourOwn extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
    this.state = {
      button: [
        { name: "Apples", buttonState: false },
        { name: "Peaches", buttonState: false },
        { name: "Pumpkins", buttonState: false }
      ]
    };
  }

  handleButton(e) {
    let buttonTemp = this.state.button;
    buttonTemp.map(function(entry) {
      if (entry.name === e.target.text) {
        entry.buttonState = true;
      } else {
        entry.buttonState = false;
      }
      return entry;
    });
    this.setState({ button: buttonTemp });
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
        <Console />
      </Container>
    );
  }
}

export default PickYourOwn;
