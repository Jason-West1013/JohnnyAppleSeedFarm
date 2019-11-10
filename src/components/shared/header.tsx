import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuOpen from '@material-ui/icons/MenuOpen'
import { mobileScreen, mobileScreenPx, altGreenPrimary, greyLight, greyPrimary, greyDark } from '../../constants'

import logo from '../../assets/logo.png'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 10px solid ${altGreenPrimary};

	#separator-container {
		flex-grow: 1;
	}

	@media (max-width: ${mobileScreenPx}) {
		border-bottom: 7px solid ${altGreenPrimary};
	}
`

const Logo = styled.div`
	height: 85px;
	width: 22%;
	margin-left: 10px;
	padding: 2px;

	img {
		height: 100%;
		width: 100%;
	}

	@media screen and (max-width: ${mobileScreenPx}) {
		height: 60px;
		width: 40%;
	}
`

// const slideAnimation = css`animation: ${slideInRight} 2s linear`

const NavBar = styled.nav<{ showBar: boolean }>`
	display: ${(props) => props.showBar ? 'flex' : 'none'};
	align-items: center;
	padding: 5px 25px;

	@media (max-width: ${mobileScreenPx}) {
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
	margin: 0px 20px;
	border-bottom: 2px solid white;
	text-decoration: none;
	color: black;
	font-family: 'Open Sans', sans-serif;
	font-weight: bold;

	&:hover {
		border-bottom-color: black;
		transition: border-bottom-color 0.25s ease-in-out;
	}

	@media (max-width: ${mobileScreenPx}) {
		margin: 0;
		border-bottom: 1px solid ${greyPrimary};
		padding: 15% 100%;

		&:active {
			background-color: ${greyDark}
		}
	}
`

const Header = () => {
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= mobileScreen)
	const [showNav, setShowNav] = useState<boolean>(!isMobile)

	useEffect(() => {
		window.addEventListener('resize', onResize)
	}, [])

	const onResize = () => {
		window.innerWidth <= mobileScreen ? setIsMobile(true) : setIsMobile(false)
		window.innerWidth <= mobileScreen ? setShowNav(false) : setShowNav(true)
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
