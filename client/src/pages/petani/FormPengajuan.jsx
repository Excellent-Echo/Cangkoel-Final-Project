import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import { PickerDropPane } from 'filestack-react'

const FormPengajuan = () => {
	return (
		<>
			<Navbar />
			<div className="bg-gray-200 min-h-screen">
				<div className="container mx-auto">
					<div className="inputs w-full max-w-2xl p-6 mx-auto">
						<h2 className="text-2xl text-gray-900">Isi Formulir Pengajuan Pendanaan</h2>

						<form className="mt-6 border-t border-gray-400 pt-4">
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
									/>
								</div>
								<div className=" w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Dokumen Perizinan (Sku/ siup/ tdp/ dll)
									</label>
									<PickerDropPane
										apikey={'ApW8Eq4TGSN69zPGRbKtMz'}
										onSuccess={(res) => {
											console.log(res)
										}}
										ewqa23d5td
									/>
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
									/>
								</div>
								<div className=" w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Upload KTP
									</label>
									<PickerDropPane
										apikey={'ApW8Eq4TGSN69zPGRbKtMz'}
										onSuccess={(res) => {
											console.log(res)
										}}
										ewqa23d5td
									/>
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
									></textarea>
								</div>

								<div className="personal w-full border-t border-gray-400 pt-4">
									<div className="flex justify-end">
										<button
											className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
											type="submit"
										>
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
