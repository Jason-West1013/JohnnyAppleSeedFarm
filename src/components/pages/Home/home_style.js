import styled from 'styled-components';
import transition from 'styled-transition-group';

// images
import houseOrchard from '../../../images/orchard_trail.jpg';

export const Container = styled.div `
    position: relative;
    height: 2800px;
    width: 100%;
    background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

export const TopSection = styled.div `
    position: relative;
    display: flex; 
    align-items: center;
    top: 4.5%;
    height: 300px;
    width: 100%;
    background: #338a3e;
`;

export const MessageHeader = transition.p `
    position: absolute;
    float: right;
    right: 5%;
    width 40%;
    color: #f3f3f5;
    font-size: 25px;
    font-family: 'Khula', sans-serif;

    &:enter { opacity: 0.01; }

    &:enter-active {
        opacity: 1; 
        transition: all 2000ms ease;
    }
`;

export const SignContainer = transition.div `
    position: absolute;
    top: -20%;
    left: 2%;
    width: 50%;
    height: 140%;

    &:enter {
        opacity: 0.01;
        transform: translateX(-100%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 800ms ease-out;
    }
`;

export const MiddleSection = styled.div `
    position: relative;
    top: 1.5%;
    height: 1100px;
    width: 100%;

    #middleTop {
        position: relative;
        top: 19%;
        width: 100%;
        height: 550px;

        background-image: url(${houseOrchard});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% auto;
    }

    #middleMiddle {
        position: relative;
        top: 30%;
        width: 100%;
        height: 400px;
    }

    #middleBottom {
        border: 1px solid black;
        position: relative;
        top: 41%;
        width: 100%;
        height: 400px;
    }
`;

export const OrchardMessage = styled.div `
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 25%;

    p {
        text-align: center;
        font-family: 'Khula', sans-serif;
        color: #f3f3f5;
    }

    #midMessageWrapper {
        z-index: 4;
        position: relative;
        display: flex;
        align-items: center;
        top: 6%;
        left: 25%;
        height: 100%;
        width: 100%;
    }
`;

export const TopParagraph = transition.p `
    text-shadow: 2px 2px 4px #000;
    font-size: 18px;

    &:enter { opacity: 0.01; }

    &:enter-active {
        opacity: 1;
        transition: all 1000ms ease-out;
    }
`;

export const MidLeftImage = transition.img `
    z-index: 2;
    position: absolute;
    left: 1.5%;
    bottom: -5%;
    width: 40%;
    height: 110%;

    &:enter {
        opacity: 0.01;
        transform: translateX(-100%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 1000ms ease-out;
    }
`;

export const MidLeftBackground = transition.div `
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: -10%;
    width: 43.5%
    height: 120%;
    background: #66bb6a;

    &:enter {
        opacity: 0.01;
        transform: translateX(-100%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 800ms ease;
    }
`;

export const MiddleParagraph = transition.p `
    text-shadow: 2px 2px 4px #000; 
    font-size: 22px;

    &:enter { opacity: 0.01; }

    &:enter-active {
        opacity: 1;
        transition: all 1000ms ease-out;
    }
`;

export const MidMessageBackground = transition.div `
    z-index: 3;
    position: absolute;
    top: 18%;
    right: 0;
    height: 75%;
    width: 58%;
    background: #338a3e;

    &:enter {
        opacity: 0.01;
        transform: translateX(100%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 1000ms ease-out;
    }
`;

export const MidRightImage = transition.img `
    z-index: 5;
    position: absolute;
    margin: 0 auto;
    top: -10%;
    right: 5%;
    width: 22%;
    height: 120%;
    transform: rotate(90);

    &:enter {
        opacity: 0.01;
        transform: translateX(150%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 1100ms ease-out;
    }
`;

export const MidRightBackground = transition.div `
    z-index: 4;
    position: absolute; 
    top: -15%;
    right: 3%;
    height: 130%;
    width: 26%;
    background: #66bb6a;

    &:enter {
        opacity: 0.01;
        transform: translateX(100%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 1000ms ease-out;
    }
`;

export const BottomParagraph = styled.p `
    text-shadow: 2px 2px 4px #000;
    font-size: 18px;
`;

export const BottomImage = styled.img ``;

// Bottom section of homepage
export const BottomSection = styled.div `
    position: absolute;
    bottom: 1%;

    #beeGirl {
        position: relative;
        height: 100%;
        width: 100%;
    }

    #signature {
        position: absolute;
        bottom: 15%;
        left: 5%;    
        color: #f3f3f5;
        font-size: 46px;
        font-family: 'Sacramento', cursive;
    }
`;