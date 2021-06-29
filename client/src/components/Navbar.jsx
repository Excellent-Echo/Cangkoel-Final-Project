import React from 'react'
import { css } from 'styled-components/macro' //eslint-disable-line
import tw from 'twin.macro'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import userProfileAction from '../redux/user/profile/userProfileAction'

// assets
import Logo from '../assets/logo-cangkoel.png'
import { loadPartialConfig } from '@babel/core'

// styled components with tailwind
const Button = tw.span`rounded bg-crowde-100 hover:bg-crowde-200 py-2 px-4 text-white mx-3`

const Navbar = () => {
	let token = localStorage.getItem('token')
	const history = useHistory()
	const { user } = useSelector((state) => state.userProfile)

	const logout = () => {
		localStorage.clear()
		history.push('/')
		window.location.reload()
	}

	const userData = () => {
		if (user.role === 'petani') {
			return (
				<div class="flex flex-wrap">
					<Link to="/profil-petani">
						<p className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4">
							Hi, {user.full_name}
						</p>
					</Link>
					<Button onClick={logout} type="submit">
						Logout
					</Button>
				</div>
			)
		} else {
			return (
				<Link to="/profil-investor">
					<p className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent md:mt-0 md:ml-4">
						Hi, {user.full_name}
					</p>
				</Link>
			)
		}
	}

	return (
		<div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
			<div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
				<div className="p-4 flex flex-row items-center justify-between ">
					<Link to="/">
						<img src={Logo} alt="logo cangkoel" className="w-36" />
					</Link>
					<button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
						<svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
							<path
								x-show="!open"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							></path>
							<path
								x-show="open"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							></path>
						</svg>
					</button>
				</div>
				{user ? (
					<nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
						<Link
							to="/"
							className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
						>
							Tentang
						</Link>
						<Link
							to="/"
							className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
						>
							Kontak Kami
						</Link>
						{userData()}
					</nav>
				) : (
					<nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
						<Link
							to="/"
							className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
						>
							Tentang
						</Link>
						<Link
							to="/"
							className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
						>
							Kontak Kami
						</Link>
						<Button>
							<Link to="/login">Login</Link>
						</Button>

						<Button>
							<Link to="/register">Register</Link>
						</Button>
					</nav>
				)}
			</div>
		</div>
	)
}

export default Navbar
