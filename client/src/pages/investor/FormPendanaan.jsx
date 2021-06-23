import React, { useState } from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import DatePicker from 'react-datepicker'
import { PickerDropPane } from 'filestack-react'
import 'react-datepicker/dist/react-datepicker.css'

const FormPendanaan = () => {
	const [dateRange, setDateRange] = useState([null, null])
	const [startDate, endDate] = dateRange

	return (
		<>
			<Navbar />
			<div className="bg-gray-200 min-h-screen">
				<div className="container mx-auto">
					<div className="inputs w-full max-w-2xl p-6 mx-auto">
						<h2 className="text-2xl text-gray-900">Buat Pendanaan Untuk Petani</h2>
						<div className="mt-6 border-t border-gray-400 pt-4">
							<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
								Foto Sampul
							</label>
							<PickerDropPane
								apikey="process.env.FILESTACK_KEY"
								onSuccess={(res) => {
									console.log(res)
								}}
							/>
						</div>
						<form className="mt-6 border-t border-gray-400 pt-4">
							<div className="flex flex-wrap -mx-3 mb-6 ">
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nama Investor
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="text"
										placeholder="Masukkan nama Investor"
										required
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Judul Pendanaan
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="text"
										placeholder="Masukkan judul pendanaan"
										required
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Nominal Pendanaan
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="number"
										placeholder="Masukkan nominal pendanaan"
										required
									/>
								</div>
								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Perusahaan Pengirim
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="text"
										placeholder="Masukkan perusahaan pengirim"
										required
									/>
								</div>

								<div className="flex items-center justify-between mt-4 w-full">
									<div className="w-full md:w-1/2 px-3 mb-6">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
											Bagi Hasil Investor
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
											type="number"
											placeholder="Bagi hasil investor max 45%"
											required
										/>
									</div>
									<div className="w-full md:w-1/2 px-3 mb-6">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
											Bagi Hasil Petani
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
											type="number"
											placeholder="Bagi hasil petani max 45%"
											required
										/>
									</div>
								</div>

								<div className="flex items-center justify-between mt-4 w-full">
									<div className="w-full md:w-1/2 px-3 mb-6">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
											Kebutuhan Komoditas
										</label>
										<input
											className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
											type="number"
											placeholder="Masukkan kebutuhan komoditas"
											required
										/>
									</div>
									<div className="w-full md:w-1/2 px-3 mb-6">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
											Satuan Berat
										</label>
										<select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
											<option>Pilih ...</option>
											<option>Ton</option>
											<option>Kg</option>
											<option>Gram</option>
											<option>Kwintal</option>
											<option>Pound</option>
										</select>
										<div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
											<svg
												className="fill-current h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</div>

								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Jangka Waktu
									</label>
									<DatePicker
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										selectsRange={true}
										startDate={startDate}
										endDate={endDate}
										onChange={(update) => {
											setDateRange(update)
										}}
										withPortal
									/>
								</div>

								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Keuntungan Bersih
									</label>
									<input
										className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
										id="grid-text-1"
										type="number"
										placeholder="Masukkan keuntungan bersih"
										required
									/>
								</div>

								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Deskripsi
									</label>
									<textarea
										className="bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 focus:outline-none focus:bg-white"
										placeholder="Masukkan deskripsi lengkap"
										required
									></textarea>
								</div>

								<div className="w-full md:w-full px-3 mb-6">
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Kategori Pertanian
									</label>
									<div className="flex-shrink w-full inline-block relative">
										<select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
											<option>Pilih ...</option>
											<option>Pendanaan Ekspor Tanaman Sayur</option>
											<option>Pendanaan Ekspor Tanaman Buah</option>
											<option>Pendanaan Ekspor Tanaman Industri</option>
											<option>Pendanaan Ekspor Tanaman Pangan</option>
											<option>Pendanaan Ekspor Tanaman Hias</option>
											<option>Pendanaan Ekspor Tanaman Umbi</option>
										</select>
										<div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
											<svg
												className="fill-current h-4 w-4"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</div>

								<div className="personal w-full border-t border-gray-400 pt-4">
									<h2 className="text-2xl text-gray-900">Biaya Operasional :</h2>
									<div className="flex items-center justify-between mt-4">
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Biaya bahan baku
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan total biaya bahan baku"
												type="number"
												required
											/>
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Biaya alat produksi
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan biaya sewa alat produksi"
												type="number"
												required
											/>
										</div>
									</div>
									<div className="flex items-center justify-between mt-4">
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Biaya perawatan
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan total biaya perawatan"
												type="number"
												required
											/>
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Biaya gaji pekerja
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan total biaya gaji pekerja"
												type="number"
												required
											/>
										</div>
									</div>

									<h2 className="text-2xl text-gray-900">Biaya Ekspor :</h2>
									<div className="flex items-center justify-between mt-4">
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Biaya Ongkos Kirim
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan total biaya bahan baku"
												type="number"
												required
											/>
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Biaya pajak
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan biaya sewa alat produksi"
												type="number"
												required
											/>
										</div>
									</div>

									<h2 className="text-2xl text-gray-900">Perhitungan Penghasilan :</h2>
									<div className="flex items-center justify-between mt-4">
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Per Satuan Berat
											</label>
											<select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
												<option>Pilih ...</option>
												<option>1 Ton</option>
												<option>1 Kg</option>
												<option>1 Gram</option>
												<option>1 Kwintal</option>
												<option>1 Pound</option>
											</select>
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Harga per satuan berat
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan harga per satuan"
												type="number"
												required
											/>
										</div>
									</div>

									<h2 className="text-2xl text-gray-900">Keuntungan :</h2>
									<div className="flex items-center justify-between mt-4">
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Total Pendapatan
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan total pendapatan"
												type="number"
												required
											/>
										</div>
										<div className="w-full md:w-1/2 px-3 mb-6">
											<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
												Modal awal
											</label>
											<input
												className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
												placeholder="Masukkan modal awal"
												type="number"
												required
											/>
										</div>
									</div>

									<div className="flex justify-end">
										<button
											className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
											type="submit"
										>
											Simpan Pendanaan
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

export default FormPendanaan
