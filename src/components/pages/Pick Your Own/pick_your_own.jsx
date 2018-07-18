import React from 'react';
import VeggieButton from './veggie_button';

// styled components
import { 
  Container,
  Top,
  Sign,
  List
} from './pick_style';

// images 
import appleButton from '../../../images/pick_your_own/apple_button.png';
import pumpkinButton from '../../../images/pick_your_own/pumpkin_button.png';
import peachButton from '../../../images/pick_your_own/peach_button.png';
import standSign from '../../../images/pick_your_own/stand_sign.png';

const standStyle = {
  'height': '100%',
  'width': '70%'
}

const PickYourOwn = () => {
  return(
    <Container>
      <Top>
        <List>
          <VeggieButton buttonImage={appleButton} altSrc='Apple' />
        </List>
        <List>
          <VeggieButton buttonImage={pumpkinButton} altSrc='Pumpkin' />
        </List>
        <List>
          <VeggieButton buttonImage={peachButton} altSrc='Peach' />
        </List>
      </Top>
      <Sign>
        <div id='chalkboard' />
        <img src={standSign} alt='Stand Sign' style={standStyle} />
      </Sign>
    </Container>
  )
};

export default PickYourOwn;