import React from 'react';
import Media from 'react-media';

//styles
import { Foot, Address, RightDiv, RightDivHeader, FacebookIcon } from './footer_styles'

// images
import facebook from '../../images/facebook_dark.png'

const Footer = () => {
    return(   
      <Foot>
        <Address>
          13 Schoolhouse Rd. &bull; Ellingtion, CT 06024 &bull; <b>Farm</b> 860-875-1000 &bull; <b>Office</b> 860-875-1030
        </Address>
        <RightDiv>
          <Media
            query='(min-width: 800px)'
            render={() => <RightDivHeader>Like Us</RightDivHeader>}
          />
          <a href='https://www.facebook.com/johnnyappleseedfarmct/'>
            <FacebookIcon src={facebook} />
          </a>
        </RightDiv>
      </Foot>
    )
};

export default Footer;