import React from 'react'
import styled from 'styled-components'
import { smallScreenPx, mediumScreenPx } from '../../constants'

import cliffPumpkin from '../../assets/images/cliff-pumpkin.png'

const Container = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (max-width: ${smallScreenPx}) {
        position: unset;
    }
`

const ImageHeader = styled.div`
    height: 50rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url(${cliffPumpkin});

    @media screen and (max-width: ${mediumScreenPx}) {
        background-position: right;
        background-attachment: unset;
    }

    @media screen and (max-width: ${smallScreenPx}) {
        height: 20rem;
    }
`

const NextDiv = styled.div`
    border: 1px solid red;
    height: 50rem;
`

const Home = () => {
    return (
        <Container>
            <ImageHeader />
            <NextDiv />
        </Container>
    )
}

export default Home
