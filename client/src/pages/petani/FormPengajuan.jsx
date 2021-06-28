import React, { useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import pengajuanAction from '../../redux/pengajuan/pengajuanAction'

const FormPengajuan = () => {
	const pengajuanData = useSelector((state) => state.pengajuan)
	console.log(pengajuanData.imageProgress)
	const dispatch = useDispatch()
	const history = useHistory()

	const [nama, setNama] = useState('')
	const [nomorHP, setNomorHP] = useState('')
	const [nomorNPWP, setNomorNPWP] = useState('')
	const [jenisUsaha, setJenisUsaha] = useState('')
	const [tenagaKerja, setTenagaKerja] = useState('')
	const [omset, setOmset] = useState('')
	const [alamat, setAlamat] = useState('')

	const [fileDokumen, setFileDokumen] = useState('')
	const [fileKTP, setFileKTP] = useState('')

	const token = localStorage.getItem('token')
	const idPengajuan = localStorage.getItem('idPendanaan')

	const handlePengajuan = (e) => {
		e.preventDefault()

		dispatch(
			pengajuanAction.pengajuan(
				nama,
				nomorHP,
				pengajuanData.urlDokumen,
				nomorNPWP,
				pengajuanData.urlKTP,
				jenisUsaha,
				tenagaKerja,
				omset,
				alamat,
				token,
				idPengajuan,
				history
			)
		)
	}

	const uploadImage = () => {
		dispatch(pengajuanAction.uploadDokumen(fileDokumen))
		dispatch(pengajuanAction.uploadKTP(fileKTP))
	}

	return (
		<>
			<Navbar />
			<div className="bg-gray-200 min-h-screen">
				<div className="container mx-auto">
					<div className="inputs w-full max-w-2xl p-6 mx-auto">
						<h2 className="text-2xl text-gray-900">Isi Formulir Pengajuan Pendanaan</h2>

						<form className="mt-6 border-t border-gray-400 pt-4" onSubmit={handlePengajuan}>
							<div className="flex flex-wrap -mx-3 mb-6 ">
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nama Lengkap
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="text"
										placeholder="Masukkan nama lengkap"
										required
										onChange={(e) => setNama(e.target.value)}
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nomor handphone/ Whatsapp
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="number"
										placeholder="Masukkan nomor handphone"
										required
										onChange={(e) => setNomorHP(e.target.value)}
									/>
								</div>
								<div className=" w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Dokumen Perizinan (Sku/ siup/ tdp/ dll)
									</label>
									<div class="flex flex-col w-full items-center justify-center bg-grey-lighter">
										<label class="w-64 flex flex-col items-center px-2 py-2 my-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
											<svg
												class="w-8 h-8"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
											</svg>
											<span class="mt-2 text-base leading-normal">Select a file</span>
											<input
												type="file"
												class="hidden"
												onChange={(e) => setFileDokumen(e.target.files[0])}
											/>
										</label>
										<button
											className="appearance-none justify-center bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
											// type="submit"
											onClick={uploadImage}
										>
											Upload
										</button>
										{/* <div class="shadow w-full bg-grey-light mt-2">
											{pengajuanData.imageProgress && (
												<div
													class="bg-red text-xs leading-none py-1 text-center text-white"
													style="width: 75%"
												>
													{pengajuanData.imageProgress} %
												</div>
											)}
										</div> */}
									</div>

									{/* <img src={url} /> */}
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nomor NPWP
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="number"
										placeholder="Masukkan nomor npwp"
										required
										onChange={(e) => setNomorNPWP(e.target.value)}
									/>
								</div>
								<div className=" w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										KTP
									</label>

									<div class="flex flex-col w-full items-center justify-center bg-grey-lighter">
										<label class="w-64 flex flex-col items-center px-2 py-2 my-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-600 hover:text-white">
											<svg
												class="w-8 h-8"
												fill="currentColor"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
											</svg>
											<span class="mt-2 text-base leading-normal">Select a file</span>
											<input
												type="file"
												class="hidden"
												onChange={(e) => setFileKTP(e.target.files[0])}
											/>
										</label>
										<button
											className="appearance-none justify-center bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
											// type="submit"
											onClick={uploadImage}
										>
											Upload
										</button>
									</div>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Jenis Usaha pertanian
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="text"
										placeholder="Masukkan jenis usaha pertanian"
										required
										onChange={(e) => setJenisUsaha(e.target.value)}
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Jumlah tenaga kerja
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="number"
										placeholder="Masukkan jumlah tenaga kerja"
										required
										onChange={(e) => setTenagaKerja(e.target.value)}
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Omzet Perbulan
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="number"
										placeholder="Masukkan omzet perbulan"
										required
										onChange={(e) => setOmset(e.target.value)}
									/>
								</div>

								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Alamat Lengkap usaha
									</label>
									<textarea
										className="bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 focus:outline-none focus:bg-white"
										placeholder="Masukkan deskripsi lengkap"
										required
										onChange={(e) => setAlamat(e.target.value)}
									></textarea>
								</div>

								<div className="personal w-full border-t border-gray-400 pt-4">
									<div className="flex justify-end">
										<button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3">
											Kirim Formulir
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default FormPengajuan
