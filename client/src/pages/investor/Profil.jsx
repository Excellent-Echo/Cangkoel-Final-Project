import React, { useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import { ContentWithPaddingXl } from '../../components/misc/Layouts'

const Profil = ({ color }) => {
	const [openTab, setOpenTab] = useState(1)

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
									<i className="fas fa-space-shuttle text-base mr-1"></i> Pendanaan Saya
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
									<i className="fas fa-cog text-base mr-1"></i> Daftar Pengajuan
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
									<h3 className="font-semibold text-lg mb-1">Petani terpilih: Michael Parto</h3>
									<div className="container">
										<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Review</h3>
													<p className="leading-tight text-justify">
														Pihak Cangkoel dan Investor sedang mereview formulir pengajuan
														Petani
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
														Pihak Cangkoel dan Investor mensetujui formulir pengajuan Petani
														/ Pihak Cangkoel dan Investor sedang menolak formulir pengajuan
														Petani
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
														Proses Produksi sedang dilakukan pihak petani diawai oleh pihak
														Cangkoel
													</p>
												</div>
											</div>

											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Produksi</h3>
													<p className="leading-tight text-justify">
														Proses pengiriman barang sedang berlangsung ke konsumen
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
														Pembagian hasil antara investor, petani dan cangkoel
													</p>
												</div>
											</div>

											<div className="flex flex-row-reverse md:contents">
												<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
													<h3 className="font-semibold text-lg mb-1">Bagi Hasil</h3>
													<p className="leading-tight text-justify">
														Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
														quaerat?
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
									<div>
										<div className="shadow overflow-hidden rounded border-b border-gray-200">
											<table className="min-w-full bg-white">
												<thead className="bg-blue-500 text-white">
													<tr>
														<th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
															Nama Petani
														</th>
														<th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
															Formulir Pengajuan
														</th>
													</tr>
												</thead>
												<tbody className="text-gray-700">
													<tr>
														<td className="w-1/3 text-left py-3 px-4">Lian</td>
														<td className="w-1/3 text-left py-3 px-4">Unduh</td>
													</tr>
													<tr className="bg-gray-100">
														<td className="w-1/3 text-left py-3 px-4">Emma</td>
														<td className="w-1/3 text-left py-3 px-4">Unduh</td>
													</tr>
													<tr>
														<td className="w-1/3 text-left py-3 px-4">Oliver</td>
														<td className="w-1/3 text-left py-3 px-4">Unduh</td>
													</tr>
													<tr className="bg-gray-100">
														<td className="w-1/3 text-left py-3 px-4">Isabella</td>
														<td className="w-1/3 text-left py-3 px-4">Unduh</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
									<p>
										Efficiently unleash cross-media information without cross-media value. Quickly
										maximize timely deliverables for real-time schemas.
										<br />
										<br /> Dramatically maintain clicks-and-mortar solutions without functional
										solutions.
									</p>
								</div>
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
