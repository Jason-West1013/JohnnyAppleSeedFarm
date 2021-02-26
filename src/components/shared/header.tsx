import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuOpen from '@material-ui/icons/MenuOpen'
import { smallScreen, smallScreenPx, altGreenPrimary, greyLight, greyPrimary, greyDark, mediumScreenPx } from '../../constants'

import logo from '../../assets/images/logo.png'

const Container = styled.div`
	z-index: 1;
	position: relative;
	display: flex;
	flex-direction: row;

	#separator-container {
		flex-grow: 1;
	}

	@media (max-width: ${smallScreenPx}) {
		position: unset;
		border-bottom: 7px solid ${altGreenPrimary};
	}
`

const Logo = styled.div`
	height: 5.3125rem;
	width: 15.625rem;
	padding: 0.125rem;

	img {
		height: 100%;
		width: 100%;
	}

	@media screen and (min-width: ${mediumScreenPx}) {
		margin: 1rem 0 0 2rem;
	}

	@media screen and (max-width: ${smallScreenPx}) {
		height: 3.75rem;
		width: 12rem;
		margin: .5rem 0 .25rem 0;
	}
`

// const slideAnimation = css`animation: ${slideInRight} 2s linear`

const NavBar = styled.nav<{ showBar: boolean }>`
	display: ${(props) => props.showBar ? 'flex' : 'none'};
	align-items: center;
	padding: 5px 25px;

	@media (max-width: ${smallScreenPx}) {
		position: absolute;
		flex-direction: column
		right: 0;
		padding-top: 0;
		height: 100%;
		width: 65%;
		overflow: hidden;
		background-color: ${greyLight};
	}
`

const NavButton = styled.div<{ showButton: boolean }>`
	display: ${(props) => props.showButton ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
	width: 20%

	#mobile-nav-button {
		height: 35;
		width: 35;
	}
`

const Links = styled(Link)`
	position: relative;
	text-decoration: none;
	color: white;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;

	&:hover {
		color: grey;
		transition: color 0.25s ease-in-out;
	}

	@media (min-width: ${smallScreenPx}) {
		margin: 0px .75rem;
	}

	@media (max-width: ${smallScreenPx}) {
		border-bottom: 1px solid ${greyPrimary};
		padding: 15% 100%;
		color: black;

		&:active {
			background-color: ${greyDark}
		}
	}
`

const Header = () => {
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= smallScreen)
	const [showNav, setShowNav] = useState<boolean>(!isMobile)

	useEffect(() => {
		window.addEventListener('resize', onResize)
	}, [])

	const onResize = () => {
		window.innerWidth <= smallScreen ? setIsMobile(true) : setIsMobile(false)
		window.innerWidth <= smallScreen ? setShowNav(false) : setShowNav(true)
	}

	const toggleMobileNav = () => isMobile && showNav ? setShowNav(false) : setShowNav(true)

	return (
		<Container>
			<Logo>
				<img src={logo} alt="Logo" />
			</Logo>
			<div id="separator-container"></div>
			<NavBar showBar={showNav} onClick={toggleMobileNav}>
				<Links to="/">Home</Links>
				<Links to="/about">About</Links>
				<Links to="/stands">Stands</Links>
				<Links to="/recipes">Recipes</Links>
			</NavBar>
			<NavButton showButton={isMobile}>
				<MenuOpen id="mobile-nav-button" onClick={toggleMobileNav} />
			</NavButton>
		</Container>
	)
}

export default Header
