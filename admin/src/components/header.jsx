import React from 'react'
import { useHistory } from 'react-router-dom'
import {
	Nav,
	NavItem,
	NavLink,
	Navbar,
	NavbarBrand,
	Collapse,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Form,
	Input
} from 'reactstrap'

import logolighttext from '../assets/images/logo-cangkoel.png'
import profilephoto from '../assets/images/users/1.jpg'

const Header = () => {
	const showMobilemenu = () => {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar')
	}

	const toggleMenu = () => {
		document.getElementById('search').classList.toggle('show-search')
	}

	const history = useHistory()

	const logout = () => {
		localStorage.clear()

		history.push('/login')
	}

	return (
		<header className="topbar navbarbg" data-navbarbg="skin4">
			<Navbar className="top-navbar" dark expand="md">
				<div className="navbar-header" id="logobg" data-logobg="skin4">
					<NavbarBrand href="/">
						<span className="logo-text">
							<img
								src={logolighttext}
								className="light-logo "
								style={{ width: '150px' }}
								alt="homepage"
							/>
						</span>
					</NavbarBrand>

					<button
						className="btn-link nav-toggler d-block d-md-none text-white"
						onClick={() => showMobilemenu()}
					>
						<i className="ti-menu ti-close" />
					</button>
				</div>
				<Collapse className="navbarbg" navbar data-navbarbg="skin4">
					<Nav className="float-left" navbar>
						<NavItem className="hidden-sm-down search-box">
							<NavLink href="#" className="hidden-sm-down" onClick={toggleMenu.bind(null)}>
								<i className="ti-search" />
							</NavLink>
							<Form className="app-search" id="search">
								<Input type="text" placeholder="Search & enter" />
								<button className="btn-link srh-btn" onClick={toggleMenu.bind(null)}>
									<i className="ti-close" />
								</button>
							</Form>
						</NavItem>
					</Nav>
					<Nav className="ml-auto float-right" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret className="pro-pic">
								<img src={profilephoto} alt="user" className="rounded-circle" width="31" />
							</DropdownToggle>
							<DropdownMenu right className="user-dd">
								<DropdownItem>
									<i className="ti-user mr-1 ml-1" /> My Account
								</DropdownItem>
								<DropdownItem>
									<i className="ti-wallet mr-1 ml-1" /> My Balance
								</DropdownItem>
								<DropdownItem className="border-bottom">
									<i className="ti-email mr-1 ml-1" /> Inbox
								</DropdownItem>
								<DropdownItem className="border-bottom">
									<i className="ti-settings mr-1 ml-1" /> Account Settings
								</DropdownItem>
								<DropdownItem onClick={logout}>
									<i className="fa fa-power-off mr-1 ml-1" /> Logout
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</header>
	)
}
export default Header
