import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar.jsx'
import { ContentWithPaddingXl } from '../../components/misc/Layouts'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import userProfileAction from '../../redux/user/profile/userProfileAction'

const Profil = ({ color }) => {
	const [openTab, setOpenTab] = useState(1)
	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		const loggedInUser = localStorage.getItem('user')

		if (loggedInUser) {
			dispatch(userProfileAction.fetchProfile())
		}
		// eslint-disable-next-line
	}, [])

	const [disabled, setDisabled] = useState(true)
	let [name, setName] = useState('')
	let [email, setEmail] = useState('')

	const { user } = useSelector((state) => state.userProfile)

	if (user === null) {
		return <div>loading</div>
	}

	const handleSubmit = () => {
		dispatch(userProfileAction.updateUserProfile(user.id, name, email))
		// dispatch(userProfileAction.fetchProfile())
	}

	const handleTab = (tab) => {
		dispatch(userProfileAction.fetchProfile())
		setOpenTab(tab)
	}

	const handleEdit = () => {
		setDisabled(!disabled)
	}

	const ajukanButton = () => {
		history.push('/')
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
									// onClick={(e) => {
									// 	e.preventDefault()
									// 	setOpenTab(1)
									// }}
									onClick={() => handleTab(1)}
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
									// onClick={(e) => {
									// 	e.preventDefault()
									// 	setOpenTab(2)
									// }}
									onClick={(e) => handleTab(2)}
									data-toggle="tab"
									href="#link2"
									role="tablist"
								>
									<i className="fas fa-cog text-base mr-1"></i> Profil
								</a>
							</li>
							{/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
							</li> */}
						</ul>

						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								<div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
									<div className="mb-4">
										<p class="text-xl font-semibold">Keterangan</p>
										<div>
											<div className="flex flex-wrap py-1">
												<div
													className="bg-blue-500"
													style={{
														height: '25px',
														width: '25px',
														borderRadius: '50%'
													}}
												></div>{' '}
												<div className="px-4">belum diproses</div>
											</div>
										</div>
										<div>
											<div className="flex flex-wrap py-1">
												<div
													className="bg-yellow-600"
													style={{
														height: '25px',
														width: '25px',
														borderRadius: '50%'
													}}
												></div>{' '}
												<div className="px-4">sedang diproses</div>
											</div>
										</div>
										<div>
											<div className="flex flex-wrap py-1">
												<div
													className="bg-gray-500"
													style={{
														height: '25px',
														width: '25px',
														borderRadius: '50%'
													}}
												></div>{' '}
												<div className="px-4">telah diproses</div>
											</div>
										</div>
										<div>
											<div className="flex flex-wrap py-1">
												<div
													className="bg-green-500"
													style={{
														height: '25px',
														width: '25px',
														borderRadius: '50%'
													}}
												></div>{' '}
												<div className="px-4">pengajuan pendanaan disetujui</div>
											</div>
										</div>
										<div>
											<div className="flex flex-wrap py-1">
												<div
													className="bg-red-600"
													style={{
														height: '25px',
														width: '25px',
														borderRadius: '50%'
													}}
												></div>{' '}
												<div className="px-4">pengajuan pendanaan ditolak</div>
											</div>
										</div>
									</div>

									{user && user.FormPengajuan.length === 0 ? (
										<div className="min-w-screen animated fadeIn faster left-0 top-0 flex justify-center inset-0 z-50 outline-none focus:outline-none">
											<div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
															></path>
														</svg>
														<div class="flex flex-col ml-3">
															<div className="font-medium leading-none">
																Belum memiliki pengajuan
															</div>
															<p className="text-sm text-gray-600 leading-none mt-1">
																Segera ajukan pendanaan untuk usaha anda
															</p>
														</div>
													</div>
													<button
														onClick={ajukanButton}
														mat-icon-button=""
														className="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"
													>
														Ajukan
													</button>
												</div>
											</div>
										</div>
									) : (
										<div>
											<h3 className="font-semibold text-xl mb-1">Pengajuan Pendanaan: {}</h3>
											<div className="container">
												<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
													{user && user.HasilPengajuan.length === 0 ? (
														<div className="flex md:contents">
															<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
																<div className="h-full w-6 flex items-start justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
															<div className="bg-yellow-600 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">
																	Verifikasi Data
																</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel sedang melakukan verifikasi data
																	pengajuan anda
																</p>
															</div>
														</div>
													) : (
														<div className="flex md:contents">
															<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
															<div className="bg-gray-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">
																	Verifikasi Data
																</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel sedang melakukan verifikasi data
																	pengajuan anda
																</p>
															</div>
														</div>
													)}

													{user.HasilPengajuan && user.HasilPengajuan.length === 0 ? (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Review</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor sedang mereview formulir
																	pengajuan anda
																</p>
															</div>
															<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
														</div>
													) : user.HasilPengajuan &&
													  user.HasilPengajuan[0].status === 'Review' ? (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-yellow-600 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Review</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor sedang mereview formulir
																	pengajuan anda
																</p>
															</div>
															<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
														</div>
													) : (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-gray-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Review</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor sedang mereview formulir
																	pengajuan anda
																</p>
															</div>
															<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
														</div>
													)}

													{user.HasilPengajuan && user.HasilPengajuan.length === 0 ? (
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
																	Pihak Cangkoel dan Investor sedang mensurvei tempat
																	usaha milik petani
																</p>
															</div>
														</div>
													) : user.HasilPengajuan &&
													  user.HasilPengajuan[0].status === 'Survey' ? (
														<div className="flex md:contents">
															<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
															<div className="bg-yellow-600 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Survey</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor sedang mensurvei tempat
																	usaha milik petani
																</p>
															</div>
														</div>
													) : user.HasilPengajuan[0].status === 'Approve' ||
													  user.HasilPengajuan[0].status === 'Rejects' ||
													  user.HasilPengajuan[0].status === 'Dana Cair' ||
													  user.HasilPengajuan[0].status === 'Produksi' ||
													  user.HasilPengajuan[0].status === 'Ekspor' ||
													  user.HasilPengajuan[0].status === 'Bagi Hasil' ? (
														<div className="flex md:contents">
															<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
															<div className="bg-gray-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Survey</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor sedang mensurvei tempat
																	usaha milik petani
																</p>
															</div>
														</div>
													) : (
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
																	Pihak Cangkoel dan Investor sedang mensurvei tempat
																	usaha milik petani
																</p>
															</div>
														</div>
													)}

													{user.HasilPengajuan && user.HasilPengajuan.length === 0 ? (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">
																	Approve / Reject
																</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor menyetujui pengajuan
																	anda / menolak pengajuan anda
																</p>
															</div>
															<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
														</div>
													) : user.HasilPengajuan &&
													  user.HasilPengajuan[0].status === 'Approve' ? (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-green-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Approve</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor menyetujui pengajuan
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
													) : user.HasilPengajuan &&
													  user.HasilPengajuan[0].status === 'Rejects' ? (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-red-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">Reject</h3>
																<p className="leading-tight text-justify">
																	Mohon maaf pengajuan anda ditolak. Anda bisa
																	mengajukan kembali dalam 30 hari kedepan.
																</p>
															</div>
															<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
														</div>
													) : (
														<div className="flex flex-row-reverse md:contents">
															<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
																<h3 className="font-semibold text-lg mb-1">
																	Approve / Reject
																</h3>
																<p className="leading-tight text-justify">
																	Pihak Cangkoel dan Investor menyetujui pengajuan
																	anda / menolak pengajuan anda
																</p>
															</div>
															<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
																<div className="h-full w-6 flex items-center justify-center">
																	<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
																</div>
																<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
															</div>
														</div>
													)}

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
																Proses Produksi sedang dilakukan pihak petani diawasi
																oleh pihak Cangkoel
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
									)}
								</div>

								<div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
									<div className="h-full">
										<div className="block md:flex flex justify-center">
											{user ? (
												<div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
													<div className="rounded  shadow p-6">
														<div className="pb-4">
															<label
																htmlFor="name"
																className="font-semibold text-gray-700 block pb-1"
															>
																Name
															</label>
															<div className="flex">
																<input
																	disabled={disabled}
																	id="username"
																	className="border-2 border-yellow-500 rounded-r px-4 py-2 w-full"
																	type="text"
																	placeholder={user.full_name}
																	onChange={(e) => setName(e.target.value)}
																/>
															</div>
														</div>
														<div className="pb-4">
															<label
																htmlFor="about"
																className="font-semibold text-gray-700 block pb-1"
															>
																Email
															</label>
															<input
																disabled={disabled}
																id="email"
																className="border-2 border-yellow-500 rounded-r px-4 py-2 w-full"
																type="email"
																placeholder={user.email}
																onChange={(e) => setEmail(e.target.value)}
															/>
														</div>
														<div className="pb-4">
															<div className="flex justify-between">
																{/* <span className="text-xl font-semibold block">Admin Profile</span> */}
																<button
																	href="#"
																	className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
																	onClick={handleEdit}
																>
																	Edit
																</button>
																{!disabled ? (
																	<button
																		href="#"
																		className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
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
								</div>

								{/* <div className={openTab === 3 ? 'block' : 'hidden'} id="link3"></div> */}
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
