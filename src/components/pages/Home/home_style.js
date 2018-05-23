import styled from 'styled-components';
import transition from 'styled-transition-group';

export const HomeContainer = styled.div `
    //border: 1px solid red;
    position: relative;
    height: 700px;
    width: 100%;
    background: linear-gradient(90deg, #fbfffc, #c8e6c9 , #fbfffc )
`;

export const GreetingContainer =  transition.div `
    position: relative;
    z-index: 2;
    top: 40%;
    left: 60%;
    width: 35%;
    background: #9e9e9e;

    &:enter {
        opacity: 0.01;
        transform: translateX(50%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 800ms ease-out;
    }
`

// green bar that says welcome
export const Welcome = styled.div `
    position: absolute;
    float: left;
    top: -30px;
    right: 30%;
    height: 40px;
    width: 75%;
    text-align: center;
    border-top: 10px solid #338a3e;
    background: #66bb6a;
    font-family: 'Kalam', cursive;
    font-size: 18px;
`;

export const Message = styled.p `
    border: 5px solid #cfcfcf;
    padding: 5% 8%;
    text-indent: 30px;
`;

export const RightImage = transition.div `
    position: absolute;
    top: 4%;
    left: 2%;
    width: 60%;
    height: 60%;
    //border: 1px solid red;

    &:enter { 
        opacity: 0.01; 
        transform: translateX(-50%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 800ms ease-out;
    }
`;