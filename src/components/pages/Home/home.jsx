import React, { Component } from 'react';

// styles 
import { 
    HomeContainer,
    TopSection,
    MessageHeader,
    SignContainer,
    MiddleSection,
    OrchardMessage,
    MidTopLeftImage,
    MidTopLeftBackground,
    TopParagraph,
    MidTopMessageBackground,
    MidTopRightImage,
    MidTopRightBackground,
    MiddleParagraph,
    BottomParagraph,
    BottomSection
} from './home_style';

// images
import ellingtonSign from '../../../images/ellington_sign_2.JPG';
import beeGirl from '../../../images/bee_girl.png';
import appleTree from '../../../images/apple_tree.jpg';
import eatingApple from '../../../images/eating_apple_2.jpg';

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
            if (currentPosition >= 300) {
              this.setState({ showMidTopSection: true });
              if (currentPosition >= 950) {
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
          <HomeContainer>
            <TopSection>
              <MessageHeader unmountOnExit in={showTopSection} timeout={1000}>
                We here at the farm are very proud of our beautiful surroundings and the work it has taken to get us here. We would like to tell you a little about the farm and what we have to offer...
              </MessageHeader>
              <SignContainer unmountOnExit in={showTopSection} timeout={1000}>
                <img src={ellingtonSign} alt='Ellington Sign' style={{height: '100%', width: '100%'}} />
              </SignContainer>
            </TopSection>
            <MiddleSection>
              <div id='midTop'>
                <MidTopLeftImage unmountOnExit in={showMidTopSection} timeout={1000} src={appleTree} alt='Apple Tree' />
                <MidTopLeftBackground unmountOnExit in={showMidTopSection} timeout={1000} />
                <MidTopMessageBackground unmountOnExit in={showMidTopSection} timeout={1000} />
                <MidTopRightImage unmountOnExit in={showMidTopSection} timeout={1000} src={eatingApple} alt='Eating Apple' />
                <MidTopRightBackground unmountOnExit in={showMidTopSection} timeout={1000} />
                <OrchardMessage>
                  <div id='topMessageWrapper'>
                    <TopParagraph unmountOnExit in={showMidTopSection} timeout={1000}>
                      The orchard at 231 Somers Road (Route 83) in Ellington was originally planted in 1977-78. Since then, we have replaced many of the older trees with new ones to keep our orchards in good production.
                    </TopParagraph>
                  </div>
                </OrchardMessage>
              </div>
              <div id='middleMiddle'>
                <OrchardMessage>
                  <MiddleParagraph unmountOnExit in={showMidMidSection} timeout={1000}>
                    Our newer orchard located at 13 Schoolhouse Road in Ellington, was started in 1996 and is still being added to. We now offer 60 acres of dwarf apple trees bearing 15 different varieties and 30 acres of easy to reach peach trees.
                  </MiddleParagraph>
                </OrchardMessage>
              </div>
              <div id='middleBottom'>
                <OrchardMessage>
                  <BottomParagraph>
                    In the fall we also have a pumpkin patch and corn maze located at the Somers Road location. We also grow a variety of other fruits and vegetables as well as seasonal items which may be purchased at one of our farm markets. 
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
          </HomeContainer>
        )
    }
}

export default Home;