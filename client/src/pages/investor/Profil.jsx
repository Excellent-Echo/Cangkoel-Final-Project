import React from 'react'
import { useHistory } from 'react-router-dom'

import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

const Profil = () => {
	const history = useHistory()

	const logoutHandler = (e) => {
		e.preventDefault()

		localStorage.clear()
		history.push('/')
	}

	return (
		<>
			<Navbar />
			<div className="antialiased bg-gray-200">
				<div className="h-screen flex overflow-hidden">
					<div className="bg-white w-64 min-h-screen overflow-y-auto hidden md:block shadow relative z-30">
						<div className="px-4 py-2">
							<ul>
								<li>
									<a
										href="/#"
										className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="mr-4 opacity-50"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke="currentColor"
											fill="none"
										>
											<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
											<rect x="4" y="4" width="6" height="6" rx="1" />
											<rect x="14" y="4" width="6" height="6" rx="1" />
											<rect x="4" y="14" width="6" height="6" rx="1" />
											<rect x="14" y="14" width="6" height="6" rx="1" />
										</svg>
										Profil Saya
									</a>
								</li>

								<li>
									<a
										href="/#"
										className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="mr-4 opacity-50"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke="currentColor"
											fill="none"
										>
											<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
											<line x1="4" y1="19" x2="20" y2="19" />
											<polyline points="4 15 8 9 12 11 16 6 20 10" />
										</svg>
										Janji Saya
									</a>
								</li>

								<li>
									<a
										href="/#"
										className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="mr-4 opacity-50"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke="currentColor"
											fill="none"
										>
											<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
											<polyline points="14 3 14 8 19 8" />
											<path d="M17 21H7a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
											<line x1="9" y1="9" x2="10" y2="9" />
											<line x1="9" y1="13" x2="15" y2="13" />
											<line x1="9" y1="17" x2="15" y2="17" />
										</svg>
										Diskusi Saya
									</a>
								</li>
								<li onClick={logoutHandler}>
									{/* <a
										href="/home"
										className="mb-1 px-2 py-2 rounded-lg flex items-center font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200"
									> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="mr-4 opacity-50"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke="currentColor"
										fill="none"
									>
										<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
										<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
										<circle cx="12" cy="12" r="3" />
									</svg>
									Logout
									{/* </a> */}
								</li>
							</ul>
						</div>
					</div>

					<div className="flex-1 flex-col relative z-0 overflow-y-auto">
						<div className="md:max-w-6xl md:mx-auto px-4 py-8">
							<div className="flex items-center justify-between mb-4">
								<h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
							</div>

							<div className="bg-orange-200 mb-10 p-6 rounded-lg shadow">
								<div className="md:flex">
									<div className="md:w-1/2">
										<h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
											Power your business with Dashing Admin.
										</h2>

										<p className="text-gray-700 mb-4">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsam vero.
											Ut mollitia, cumque amet suscipit quas error minima maiores aperiam.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Profil
