import React, { Component } from 'react';

// styled components
import { 
  Container,
  Top,
  Sign
} from './pick_style';

// images 
import appleButton from '../../../images/pick_your_own/apple_button.png';
import pumpkinButton from '../../../images/pick_your_own/pumpkin_button.png';
import peachButton from '../../../images/pick_your_own/peach_button.png';
import standSign from '../../../images/pick_your_own/stand_sign.png';

class PickYourOwn extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hover: false
      };
    }

    render() {
      const standStyle = {
        'height': '100%',
        'width': '70%'
      }

      const hoverSelect = () => this.setState({hover: true});

      return(
        <Container>
          <Top>
            <img 
              src={appleButton} 
              alt='Apples' 
              onMouseOver={hoverSelect} 
              onFocus={() => void 0} 
            />
            <img src={pumpkinButton} alt='Pumpkins' />
            <img src={peachButton} alt='Peaches' />
          </Top>
          <Sign>
            <img src={standSign} alt='Stand Sign' style={standStyle} />
          </Sign>
        </Container>
      )
    }
}

export default PickYourOwn;