import styled from 'styled-components';
import transition from 'styled-transition-group';

export const HomeContainer = styled.div `
    position: relative;
    height: 2100px;
    width: 100%;
    background: linear-gradient(90deg, #fbfffc, #98ee99, #fbfffc);
`;

export const TopSection = styled.div `
    position: relative;
    display: flex; 
    align-items: center;
    top: 5%;
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
    top: 2.5%;
    left: 2%;
    width: 50%;
    height: 20%;

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
    top: 5%;
    height: 1100px;
    width: 100%;
`;

export const MidTop = styled.div `
    position: relative;
    top: 10%;
    width: 100%;
    height: 400px;
`;

export const MidTopLeftImage = transition.img `
    z-index: 2;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 33%;
    height: 90%;

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

export const MidTopLeftBackground = transition.div `
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: -8%;
    width: 36%
    height: 105%;
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

export const MidTopOldOrchardMessage = styled.div `
    margin: 0 auto;
    height: 100%;
    width: 25%;
    font-size: 22px;
    font-family: 'Khula', sans-serif;
    color: #f3f3f5;
`;

export const MidTopOldOrchardMessageWrapper = styled.div `
    z-index: 4;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
`;

export const MidTopMessageBackground = transition.div `
    z-index: 3;
    position: absolute;
    top: 12%;
    right: 0;
    height: 75%;
    width: 65%;
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

export const MidTopRightImage = transition.img `
    z-index: 5;
    position: absolute;
    margin: 0 auto;
    top: 0;
    right: 3%;
    width: 22%;
    height: 100%;
    transform: rotate(90);

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

export const MidTopRightBackground = transition.div `
    z-index: 4;
    position: absolute; 
    top: -9%;
    right: 0;
    height: 118%;
    width: 29%;
    background: #66bb6a;

    &:enter {
        opacity: 0.01;
        transform: translateX(100%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 1100ms ease-out;
    }
`;

export const MiddleMiddle = styled.div `
    width: 100%;
    height: 100px;
`;

export const MiddleBottom = styled.div `
    width: 100%;
    height: 100px;
`;

// Bottom section of homepage
export const BottomSection = styled.div `
    position: absolute;
    bottom: 1%;

    #beeGirl {
        position: relative;
        height: 100%;
        width: 100%;
    }
`;

export const Signature = styled.p `
    position: absolute;
    bottom: 15%;
    left: 5%;    
    color: #f3f3f5;
    font-size: 46px;
    font-family: 'Sacramento', cursive;
`;