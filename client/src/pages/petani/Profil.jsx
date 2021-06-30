import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar.jsx'
import { ContentWithPaddingXl } from '../../components/misc/Layouts'
import { useSelector, useDispatch } from 'react-redux'

import userProfileAction from '../../redux/user/profile/userProfileAction'

const Profil = ({ color }) => {
	const [openTab, setOpenTab] = useState(1)
	const dispatch = useDispatch()

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user')

		if (loggedInUser) {
			// const foundUser = JSON.parse(loggedInUser)
			// dispatch(userProfileAction.setProfileData(foundUser))
			dispatch(userProfileAction.fetchProfile())
		}
	}, [])

	const { user } = useSelector((state) => state.userProfile)
	const [disabled, setDisabled] = useState(true)

	let [name, setName] = useState('')
	let [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = () => {
		dispatch(userProfileAction.updateUserProfile(user.id, name, email, password))
		dispatch(userProfileAction.fetchProfile())
	}

	const handleEdit = () => {
		setDisabled(!disabled)
	}

	return (
		<>
			<Navbar />
			<ContentWithPaddingXl>
				<div className="flex flex-wrap my-12">
					<div className="w-full">
						<ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
							<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
								<a
									className={
										'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
										(openTab === 1
											? 'text-white bg-' + color + '-600'
											: 'text-' + color + '-600 bg-white')
									}
									onClick={(e) => {
										e.preventDefault()
										setOpenTab(1)
									}}
									data-toggle="tab"
									href="#link1"
									role="tablist"
								>
									<i className="fas fa-space-shuttle text-base mr-1"></i> Pengajuan Saya
								</a>
							</li>
							<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
								<a
									className={
										'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
										(openTab === 2
											? 'text-white bg-' + color + '-600'
											: 'text-' + color + '-600 bg-white')
									}
									onClick={(e) => {
										e.preventDefault()
										setOpenTab(2)
									}}
									data-toggle="tab"
									href="#link2"
									role="tablist"
								>
									<i className="fas fa-cog text-base mr-1"></i> Profil
								</a>
							</li>
							<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
								<a
									className={
										'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
										(openTab === 3
											? 'text-white bg-' + color + '-600'
											: 'text-' + color + '-600 bg-white')
									}
									onClick={(e) => {
										e.preventDefault()
										setOpenTab(3)
									}}
									data-toggle="tab"
									href="#link3"
									role="tablist"
								>
									<i className="fas fa-briefcase text-base mr-1"></i> Pesan
								</a>
							</li>
						</ul>

						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								<div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
									<h3 className="font-semibold text-lg mb-1">
										Penadanaan: Pendanaan ekspor sayur kangkung
									</h3>
									<div className="container">
										<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Review</h3>
													<p className="leading-tight text-justify">
														Pihak Cangkoel dan Investor sedang mereview formulir pengajuan
														anda
													</p>
												</div>
												<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
											</div>

											<div className="flex md:contents">
												<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
												<div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Survey</h3>
													<p className="leading-tight text-justify">
														Pihak Cangkoel dan Investor sedang mensurvei tempat usaha milik
														petani
													</p>
												</div>
											</div>

											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Approve / Reject</h3>
													<p className="leading-tight text-justify">
														Pihak Cangkoel dan Investor mensetujui formulir pengajuan anda /
														Pihak Cangkoel dan Investor sedang menolak formulir pengajuan
														anda
													</p>
												</div>
												<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
											</div>

											<div className="flex md:contents">
												<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
												<div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Dana Cair</h3>
													<p className="leading-tight text-justify">
														Pendanaan untuk produksi sudah cair
													</p>
												</div>
											</div>

											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Produksi</h3>
													<p className="leading-tight text-justify">
														Proses Produksi sedang dilakukan pihak petani diawasi oleh pihak
														Cangkoel
													</p>
												</div>
												<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
											</div>

											<div className="flex md:contents">
												<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
												<div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Ekspor</h3>
													<p className="leading-tight text-justify">
														Proses pengiriman barang sedang berlangsung ke konsumen
														Pembagian hasil antara investor, petani dan cangkoel
													</p>
												</div>
											</div>

											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Bagi Hasil</h3>
													<p className="leading-tight text-justify">
														Pembagian hasil antara investor, petani dan cangkoel
													</p>
												</div>
												<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
													<div className="h-full w-6 flex items-center justify-center">
														<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
													</div>
													<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
									<div class="h-full">
										<div class="block md:flex flex justify-center">
											{user ? (
												<div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
													<div className="rounded  shadow p-6">
														<div class="pb-4">
															<label
																htmlFor="name"
																class="font-semibold text-gray-700 block pb-1"
															>
																Name
															</label>
															<div class="flex">
																<input
																	disabled={disabled}
																	id="username"
																	class="border-2 border-yellow-500 rounded-r px-4 py-2 w-full"
																	type="text"
																	placeholder={user.full_name}
																	onChange={(e) => setName(e.target.value)}
																/>
															</div>
														</div>
														<div class="pb-4">
															<label
																htmlFor="about"
																class="font-semibold text-gray-700 block pb-1"
															>
																Email
															</label>
															<input
																disabled={disabled}
																id="email"
																class="border-2 border-yellow-500 rounded-r px-4 py-2 w-full"
																type="email"
																placeholder={user.email}
																onChange={(e) => setEmail(e.target.value)}
															/>
														</div>
														<div class="pb-4">
															<label
																htmlFor="name"
																class="font-semibold text-gray-700 block pb-1"
															>
																Password
															</label>
															<div class="pb-4">
																<input
																	disabled={disabled}
																	id="password"
																	class="border-2 border-yellow-500 rounded-r px-4 py-2 w-full"
																	type="password"
																	onChange={(e) => setPassword(e.target.value)}
																/>
															</div>
															<div class="flex justify-between">
																{/* <span class="text-xl font-semibold block">Admin Profile</span> */}
																<button
																	href="#"
																	class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
																	onClick={handleEdit}
																>
																	Edit
																</button>
																{!disabled ? (
																	<button
																		href="#"
																		class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
																		onClick={handleSubmit}
																	>
																		Submit
																	</button>
																) : (
																	<div></div>
																)}
															</div>
														</div>
													</div>
												</div>
											) : (
												<div>loading...</div>
											)}
										</div>
									</div>
									{/* 
									<h3 className="font-semibold text-lg mb-1">
										Name: {userProfileData.full_name} Email: {userProfileData.email}
									</h3> */}
								</div>

								<div className={openTab === 3 ? 'block' : 'hidden'} id="link3"></div>
							</div>
						</div>
					</div>
				</div>
			</ContentWithPaddingXl>
		</>
	)
}

export default function TabsRender() {
	return (
		<>
			<Profil color="blue" />;
		</>
	)
}
