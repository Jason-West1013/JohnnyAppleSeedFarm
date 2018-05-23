import styled from 'styled-components';

export const Foot = styled.div `
    border-top: 10px solid #32893d;
    height: 50px;
    width: 100%;
    background: linear-gradient(#65ba69, #97ed98)
`;

export const Address = styled.p `
    position: relative;
    float: left;
    top: 25%;
    left: 1%;
    font-family: 'PT Serif', serif;
`;

export const RightDiv = styled.div `
    position: relative;
    right: 1%;
    float: right;
    height: 100%;
`;

export const RightDivHeader = styled.h3 `
    //border: 1px solid #000;
    position: relative;
    top: 15%;
    float: left;
    padding: 0 10px;
    font-family: 'Pacifico', cursive;
`;

export const FacebookIcon = styled.img `
    float: right;
`;