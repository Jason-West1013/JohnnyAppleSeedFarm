import React, { Component } from 'react';

// styles 
import { 
    HomeContainer,
    SignContainer,
    MessageHeader,
    TopSection,
    BottomSection,
    Signature,
    MiddleSection,
    MidTop,
    MidTopLeftImage,
    MidTopOldOrchardMessageWrapper,
    MidTopOldOrchardMessage,
    MidTopRightImage,
    MiddleMiddle,
    MiddleBottom,
    MidTopLeftBackground,
    MidTopMessageBackground,
    MidTopRightBackground
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
            showMidTopSection: false
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
            }
        } 
    }

    render() {
        const { showTopSection } = this.state;
        const { showMidTopSection } = this.state;
        return(
          <HomeContainer>
            <TopSection>
              <MessageHeader unmountOnExit in={showTopSection} timeout={1000}>
                We here at the farm are very proud of our beautiful surroundings and the work it has taken to get us here. We would like to tell you a little about the farm and what we have to offer...
              </MessageHeader>
            </TopSection>
            <SignContainer unmountOnExit in={showTopSection} timeout={1000}>
              <img src={ellingtonSign} alt='Ellington Sign' style={{height: '100%', width: '100%'}} />
            </SignContainer>
            <MiddleSection>
              <MidTop>
                <MidTopLeftImage unmountOnExit in={showMidTopSection} timeout={1000} src={appleTree} alt='Apple Tree' />
                <MidTopLeftBackground unmountOnExit in={showMidTopSection} timeout={1000} />
                <MidTopMessageBackground unmountOnExit in={showMidTopSection} timeout={1000} />
                <MidTopRightImage unmountOnExit in={showMidTopSection} timeout={1000} src={eatingApple} alt='Eating Apple' />
                <MidTopRightBackground unmountOnExit in={showMidTopSection} timeout={1000} />
                <MidTopOldOrchardMessage>
                  <MidTopOldOrchardMessageWrapper>
                    <p>
                      The orchard at 231 Somers Road (Route 83) in Ellington was originally planted in 1977-78. Since then, we have replaced many of the older trees with new ones to keep our orchards in good production.
                    </p>
                  </MidTopOldOrchardMessageWrapper>
                </MidTopOldOrchardMessage>
              </MidTop>
              <MiddleMiddle />
              <MiddleBottom />
            </MiddleSection>
            <BottomSection>
              <img id='beeGirl' src={beeGirl} alt='Bee Girl in Field' />
              <Signature>
                Fruitfully, 
                <br />
                Kenny and Kim Shores
              </Signature>
            </BottomSection>
          </HomeContainer>
        )
    }
}

export default Home;