import React, { Component } from 'react';
import styled from 'styled-components';
import NavButton from './nav_button';

// styles
import { 
  Head, 
  LogoContainer, 
  Logo
} from './header_styles'

// images
import logo from '../../images/logo.png';

class  Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          onTop: false
         };
        this.stickyBar = this.stickyBar.bind(this);
    }
    
    componentDidMount() { window.addEventListener('scroll', this.stickyBar); }
    componentWillUnmount() { window.removeEventListener('scroll', this.stickyBar); }

    // sticks the nav bar to the top of the window when scrolled past
    stickyBar() {
      let el = document.getElementById('navbar');
      let position = window.scrollY;

      if (el.getBoundingClientRect().bottom <= 0) {
        this.setState({onTop: true});
      } else if (position === 0) {
        this.setState({onTop: false});
      }
    }

    render() {
      const NavBar = styled.nav `
            z-index: 99;
            position: ${this.state.onTop ? 'fixed' : 'relative'};
            top: ${this.state.onTop ? '0' : undefined};
            width: 100%;
            background: ${this.state.onTop ? '#ff6659' : undefined};
            text-align: center;
            min-width: 680px;
        `;

        const List = styled.li `
            margin: ${this.state.onTop ? undefined : '5px'};
            display: inline;
        `;

        return(
          <Head>
            <LogoContainer>
              <Logo src={logo} />
            </LogoContainer>

            <NavBar id='navbar'>
              <ul>
                <List>
                  <NavButton page='Home' navPath='/' />
                </List>
                <List>
                  <NavButton page='Pick Your Own' navPath='/pick_your_own' />
                </List>
                <List>
                  <NavButton page='Farm Markets' navPath='/farm_markets' />
                </List>
                <List>
                  <NavButton page='Directions' navPath='/directions' />
                </List>
                <List>
                  <NavButton page='Recipes' navPath='/recipes' />
                </List>
              </ul>
            </NavBar>
          </Head>
        )
    }
}

export default Header;