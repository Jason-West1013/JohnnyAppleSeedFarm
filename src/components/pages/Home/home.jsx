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
    MidTopOldOrchardMessage,
    MidTopRightImage,
    MiddleMiddle,
    MiddleBottom
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
            showImageOnLoad: false
        };
        this.imageHandler = this.imageHandler.bind(this);
        this.pageLoad = this.pageLoad.bind(this);
    }

    componentDidMount() { window.addEventListener('scroll', this.imageHandler); window.addEventListener('load', this.pageLoad);
    }
    componentWillUnmount() { window.removeEventListener('scroll', this.imageHandler); }

    imageHandler() {
        let currentPosition = window.scrollY;
        if (currentPosition >= 0) {
            this.setState({ showImageOnLoad: true });
        }
    }

    pageLoad() { this.setState({showImageOnLoad: true}); }

    render() {
        const { showImageOnLoad } = this.state;
        return(
          <HomeContainer>
            <TopSection>
              <MessageHeader unmountOnExit in={showImageOnLoad} timeout={1000}>
                We here at the farm are very proud of our beautiful surroundings and the work it has taken to get us here. We would like to tell you a little about the farm and what we have to offer...
              </MessageHeader>
            </TopSection>
            <SignContainer unmountOnExit in={showImageOnLoad} timeout={1000}>
              <img src={ellingtonSign} alt='Ellington Sign' style={{height: '100%', width: '100%'}} />
            </SignContainer>
            <MiddleSection>
              <MidTop>
                <MidTopLeftImage src={appleTree} alt='Apple Tree' />
                <MidTopOldOrchardMessage>
                  <p>
                    The orchard at 231 Somers Road (Route 83) in Ellington was originally planted in 1977-78. Since then, we have replaced many of the older trees with new ones to keep our orchards in good production.
                  </p>
                </MidTopOldOrchardMessage>
                <MidTopRightImage src={eatingApple} alt='Eating Apple' />
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