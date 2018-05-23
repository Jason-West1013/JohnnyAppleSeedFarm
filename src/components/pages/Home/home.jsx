import React, { Component } from 'react';
import Media from 'react-media';

// styles 
import { 
    HomeContainer, 
    Welcome, 
    Message,
    RightImage,
    GreetingContainer
} from './home_style'

// images
import orchard from '../../../images/orchard.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { showImage: false };
        this.imageHandler = this.imageHandler.bind(this);
    }

    componentDidMount() { window.addEventListener('scroll', this.imageHandler); }
    componentWillUnmount() { window.removeEventListener('scroll', this.imageHandler); }

    imageHandler() {
        let currentPosition = window.scrollY;
        if (currentPosition >= 50) {
            this.setState({ showImage: true })
        }
    }

    render() {
        const { showImage } = this.state;
        return(
          <HomeContainer>
            <GreetingContainer
              unmountOnExit
              in={showImage}
              timeout={1000}
            >
              <Media query={{ maxWidth: 1160 }}>
                {matches => 
                matches? (
                  <Welcome>Welcome to our Farm!</Welcome>
                ) : (
                  <Welcome>Welcome to Johnny AppleSeed Farm!</Welcome>
                )
              }
              </Media>
              <Message>
                The orchards were originally planted in the 1977-78 growing season. Since then we have replaced many of the older trees and built a whole new orchard. The new location, on Schoolhouse Road in Ellington, was started in 1996 and is still being added to. We now offer a total of 60 acres of dwarf apple trees bearing 14 different varieties and 35 acres of easy to reach peach trees bearing 11 different varieties. We also grow many of our own vegetables including tomatoes, winter squash, sweet corn, and tons of pumpkins, to name a few.<br /><br />
                Fruitfully,<br />
                Kenny and Kim Shores
              </Message>
            </GreetingContainer>
            <RightImage unmountOnExit in={showImage} timeout={1000}>
              <img src={orchard} alt="Ellington Stand Sign" style={{ height: '100%',width: '100%' }} />
            </RightImage>
          </HomeContainer>
        )
    }
}

export default Home;