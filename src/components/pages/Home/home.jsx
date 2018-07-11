import React, { Component } from 'react';

// styles 
import { 
    Container,
    TopSection,
    MessageHeader,
    SignContainer,
    MiddleSection,
    OrchardMessage,
    TopParagraph,
    MidLeftImage,
    MidLeftBackground,
    MiddleParagraph,
    MidMessageBackground,
    MidRightImage,
    MidRightBackground,
    BottomParagraph,
    BottomSection,
    BottomImage
} from './home_style';

// images
import ellingtonSign from '../../../images/ellington_sign_2.JPG';
import beeGirl from '../../../images/bee_girl.png';
import olaf from '../../../images/olaf_kids.jpg';
import pumpkins from '../../../images/pumpkin_patch.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTopSection: false,
            showMidTopSection: false,
            showMidMidSection: false
        };
        this.imageHandler = this.imageHandler.bind(this);
    }

    componentDidMount() { window.addEventListener('scroll', this.imageHandler); }
    componentWillUnmount() { window.removeEventListener('scroll', this.imageHandler); }

    imageHandler() {
        let currentPosition = window.scrollY;
        if (currentPosition >= 0) {
            this.setState({ showTopSection: true });
            if (currentPosition >= 400) {
              this.setState({ showMidTopSection: true });
              if (currentPosition >= 1150) {
                this.setState({ showMidMidSection: true });
              }
            }
        } 
    }

    render() {
        const { 
          showTopSection, 
          showMidTopSection, 
          showMidMidSection
        } = this.state;

        return(
          <Container>
            <TopSection>
              <MessageHeader unmountOnExit in={showTopSection} timeout={1000}>
                We here at the farm are very proud of our beautiful surroundings and the work it has taken to get us here. We would like to tell you a little about the farm and what we have to offer...
              </MessageHeader>
              <SignContainer unmountOnExit in={showTopSection} timeout={1000}>
                <img src={ellingtonSign} alt='Ellington Sign' style={{height: '100%', width: '100%'}} />
              </SignContainer>
            </TopSection>
            <MiddleSection>
              <div id='middleTop'>
                <OrchardMessage>
                  <div id='wrapper'>
                    <TopParagraph unmountOnExit in={showMidTopSection} timeout={1000}>
                      The orchard at 231 Somers Road (Route 83) in Ellington was originally planted in 1977-78. Since then, we have replaced many of the older trees with new ones to keep our orchards in good production.
                      <br />
                      Our newer orchard located at 13 Schoolhouse Road in Ellington, was started in 1996 and is still being added to. We now offer 60 acres of dwarf apple trees bearing 15 different varieties and 30 acres of easy to reach peach trees.
                    </TopParagraph>
                  </div>
                </OrchardMessage>
              </div>
              <div id='middleMiddle'>
                <MidLeftImage unmountOnExit in={showMidMidSection} timeout={1000} src={pumpkins} alt='Pumpkin Patch' />
                <MidLeftBackground unmountOnExit in={showMidMidSection} timeout={1000} />
                <MidMessageBackground unmountOnExit in={showMidMidSection} timeout={1000} />
                <MidRightImage unmountOnExit in={showMidMidSection} timeout={1000} src={olaf} alt='Kids with Olaf' />
                <MidRightBackground unmountOnExit in={showMidMidSection} timeout={1000} />
                <OrchardMessage>
                  <div id='midMessageWrapper'>
                    <MiddleParagraph unmountOnExit in={showMidMidSection} timeout={1000}>
                      In the fall we also have a pumpkin patch and corn maze located at the Somers Road location. We also grow a variety of other fruits and vegetables as well as seasonal items which may be purchased at one of our farm markets. 
                    </MiddleParagraph>
                  </div>
                </OrchardMessage>
              </div>
              <div id='middleBottom'>
                <BottomImage />
                <OrchardMessage>
                  <BottomParagraph>
                    The weather plays a huge role in all that we do, so it is advised to give the farm line a call before you come to get up to date information.
                    <br />
                    860-875-1000
                  </BottomParagraph>
                </OrchardMessage>
              </div>
            </MiddleSection>
            <BottomSection>
              <img id='beeGirl' src={beeGirl} alt='Bee Girl in Field' />
              <p id='signature'>
                Fruitfully, 
                <br />
                Kenny and Kim Shores
              </p>
            </BottomSection>
          </Container>
        )
    }
}

export default Home;