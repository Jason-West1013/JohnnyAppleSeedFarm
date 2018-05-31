import styled from 'styled-components';
import transition from 'styled-transition-group';

export const HomeContainer = styled.div `
    position: relative;
    height: 2100px;
    width: 100%;
    background: linear-gradient(90deg, #fbfffc, #c8e6c9 , #fbfffc);
`;

export const TopSection = styled.div `
    position: relative;
    top: 5%;
    height: 300px;
    width: 100%;
    background: #338a3e;
`;

export const MessageHeader = transition.p `
    position: relative;
    float: right;
    top: 18%;
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
        transform: translateX(-50%);
    }

    &:enter-active {
        opacity: 1;
        transform: translateX(0%);
        transition: all 1000ms ease;
    }
`;

export const MiddleSection = styled.div `
    position: relative;
    top: 5%;
    height: 1100px;
    width: 100%;
`;

export const MidTop = styled.div `
    border: 1px solid black;
    width: 100%;
    height: 400px;
    text-align: center;
`;

export const MidTopLeftImage = styled.img `
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
`;

export const MidTopOldOrchardMessage = styled.div `
    border: 1px solid black;
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 50%;
    text-align: center;
`;

export const MidTopRightImage = styled.img `
    position: relative;
    float: right;
    transform: rotate(-10deg);
    width: 100px;
    height: 100px;
`;

export const MiddleMiddle = styled.div `
    border: 1px solid red;
    width: 100%;
    height: 100px;
`;

export const MiddleBottom = styled.div `
    border: 1px solid black;
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