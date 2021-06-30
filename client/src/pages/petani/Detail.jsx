import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
// import tw from 'twin.macro'
// import { ContentWithPaddingXl } from '../../components/misc/Layouts'
import { useParams, useHistory } from 'react-router-dom'
import { getPendanaanById } from '../../redux/pendanaan/pendanaanAction'
import { useDispatch, useSelector } from 'react-redux'

// export const NavLinks = tw.div`inline-block`

// export const NavLink = tw.a`
//   text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
//   font-semibold tracking-wide transition duration-300
//   pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
// `

// export const PrimaryLink = tw(NavLink)`
//   lg:mx-1
//   px-8 py-3 rounded bg-crowde-100 text-gray-100
//   hocus:bg-crowde-200 hocus:text-gray-200 focus:shadow-outline
//   border-b-0
// `
// const Card = tw.div`bg-crowde-100 p-6 flex justify-center items-center`

const Detail = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const detailPendanaan = useSelector((state) => state.pendanaan.detailPendanaan)

	// useEffect(() => {
	// 	console.log('selector', selector)
	// })

	const { id } = useParams()

	useEffect(() => {
		dispatch(getPendanaanById(id))
		// eslint-disable-next-line
	}, [])

	const buttonPengajuan = (id) => {
		history.push('/formulir-pengajuan')
		localStorage.setItem('idPendanaan', id)
	}

	//
	let jangkaWaktuArr = []
	if (detailPendanaan.jangka_waktu) {
		jangkaWaktuArr = detailPendanaan.jangka_waktu.split(',')
	}

	const convertDate = (date) => {
		var dateString = date
		dateString = new Date(dateString).toUTCString()
		dateString = dateString.split(' ').slice(1, 4).join(' ')

		return dateString
	}

	//
	let biayaOperasionalArr = []
	if (detailPendanaan.biaya_operasional) {
		biayaOperasionalArr = detailPendanaan.biaya_operasional.split(',')
	}

	//
	let biayaEksporArr = []
	if (detailPendanaan.biaya_ekspor) {
		biayaEksporArr = detailPendanaan.biaya_ekspor.split(',')
	}

	//
	let perhitunganPenghasilanArr = []
	if (detailPendanaan.perhitungan_penghasilan) {
		perhitunganPenghasilanArr = detailPendanaan.perhitungan_penghasilan.split(',')
	}

	//
	let perhitunganKeuntunganArr = []
	if (detailPendanaan.perhitungan_keuntungan) {
		perhitunganKeuntunganArr = detailPendanaan.perhitungan_keuntungan.split(',')
	}

	return (
		<>
			<Navbar />
			{/* <ContentWithPaddingXl>
				<Card>
					<div className="resume bg-white shadow-lg p-8 md:p-16">
						<header>
							<h1 className="flex flex-col md:flex-row md:justify-between md:items-baseline">
								<span className="text-3xl font-medium">{selector.judul_pendanaan}</span>
								<span className="text-xl text-gray-600 font-m edium mt-2 md:mt-0">
									<PrimaryLink>Ajukan Pendanaan</PrimaryLink>
								</span>
							</h1>
						</header>
						<div className="border-grey-light border-t">
							<main className="py-3">
								<section className="bio">
									<h2 className="flex items-center">
										<i className="em em-wave text-lg mr-2"></i>
										<span className="text-2xl font-semibold">Deskripsi</span>
									</h2>
									<p className="text-gray-800">{selector.deskripsi}</p>
								</section>
								<section className="experience">
									<h2 className="flex items-center">
										<i className="em em-computer text-lg mr-2"></i>
										<span className="text-2xl font-semibold">Detail Pendanaan</span>
									</h2>
									<p className="text-gray-800">
										Perhitungan Penghasilan : {selector.perhitungan_penghasilan}
									</p>
									<p className="text-gray-800">
										Perhitungan Keuntungan : {selector.perhitungan_keuntungan}
									</p>
								</section>
								<section className="education">
									<h2 className="flex items-center">
										<i className="em em-mortar_board mr-2 text-lg"></i>
										<span className="font-semibold text-2xl">Education</span>
									</h2>
									<p className="text-gray-800">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab cupiditate
										accusamus ut veniam ea expedita modi rem sequi exercitationem cum eius tempora
										repellat provident numquam dolore, reprehenderit adipisci eos.
									</p>
								</section>
							</main>
						</div>
					</div>
				</Card>
			</ContentWithPaddingXl> */}

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
				<div className="flex flex-col md:flex-row -mx-4">
					<div className="md:flex-1 px-4">
						<img
							src={detailPendanaan.foto_profil}
							alt={detailPendanaan.id}
							className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
						/>
						<p className="text-gray-500 mb-4 text-justify">{detailPendanaan.deskripsi}</p>
						<div>
							<p className="text-gray-500 font-bold text-xl">Biaya Operasional</p>
							<table className="rounded-t-lg my-4 w-6/6 bg-gray-200 text-gray-800">
								<tr className="text-left border-b-2 border-gray-300">
									<th className="px-4 py-3">Biaya Bahan Baku</th>
									<th className="px-4 py-3">Biaya Sewa Mesin</th>
								</tr>

								<tr className="bg-gray-100 border-b border-gray-200">
									<td className="px-4 py-3">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(biayaOperasionalArr[0])}
									</td>
									<td className="px-4 py-3">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(biayaOperasionalArr[1])}
									</td>
								</tr>
							</table>
						</div>

						<div>
							<p className="text-gray-500 font-bold text-xl">Biaya Ekspor</p>
							<table className="rounded-t-lg my-4 w-6/6 bg-gray-200 text-gray-800">
								<tr className="text-left border-b-2 border-gray-300">
									<th className="px-4 py-3">Biaya Ongkos Kirim</th>
									<th className="px-4 py-3">Biaya Pajak</th>
									<th className="px-4 py-3">Biaya Kontainer</th>
									<th className="px-4 py-3">Biaya Dokumen</th>
								</tr>

								<tr className="bg-gray-100 border-b border-gray-200">
									<td className="px-4 py-3">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(biayaEksporArr[0])}
									</td>
									<td className="px-4 py-3">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(biayaEksporArr[1])}
									</td>
									<td className="px-4 py-3">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(biayaEksporArr[2])}
									</td>
									<td className="px-4 py-3">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(biayaEksporArr[3])}
									</td>
								</tr>
							</table>
						</div>
						<div className="my-4">
							<p className="text-gray-500 font-bold text-xl">Perhitungan Penghasilan</p>
							<p className="text-gray-800 font-semibold text-md">
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(perhitunganPenghasilanArr[1])}
								/{perhitunganPenghasilanArr[0]}
							</p>
						</div>
						<div className="my-4">
							<p className="text-gray-500 font-bold text-xl">Perhitungan Keuntungan</p>
							<p className="text-gray-800 font-semibold text-md">
								Total Pendapatan:{' '}
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(perhitunganKeuntunganArr[0])}
							</p>
							<p className="text-gray-800 font-semibold text-md">
								Modal:{' '}
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(perhitunganKeuntunganArr[1])}
							</p>
							<p className="text-gray-800 font-semibold text-md">
								Keuntungan:{' '}
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(perhitunganKeuntunganArr[0] - perhitunganKeuntunganArr[1])}
							</p>
							<p className="text-gray-800 font-semibold text-md">
								Investor ({detailPendanaan.bagi_hasil_investor} %):{' '}
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(
									(perhitunganKeuntunganArr[0] - perhitunganKeuntunganArr[1]) *
										(detailPendanaan.bagi_hasil_investor / 100)
								)}
							</p>
							<p className="text-gray-800 font-semibold text-md">
								Petani ({detailPendanaan.bagi_hasil_petani} %):{' '}
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(
									(perhitunganKeuntunganArr[0] - perhitunganKeuntunganArr[1]) *
										(detailPendanaan.bagi_hasil_petani / 100)
								)}
							</p>
							<p className="text-gray-800 font-semibold text-md">
								Cangkoel (
								{100 - (detailPendanaan.bagi_hasil_petani + detailPendanaan.bagi_hasil_investor)} %):{' '}
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(
									(perhitunganKeuntunganArr[0] - perhitunganKeuntunganArr[1]) *
										((100 -
											(detailPendanaan.bagi_hasil_petani + detailPendanaan.bagi_hasil_investor)) /
											100)
								)}
							</p>
						</div>
					</div>
					<div className="md:flex-1 px-4">
						<h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
							{detailPendanaan.judul_pendanaan}
						</h2>

						<div className="flex items-center space-x-4 my-4">
							<div>
								<div className="rounded-lg bg-gray-100 flex py-2 px-3">
									<span className="font-bold text-yellow-500 text-3xl">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(detailPendanaan.nominal_pendanaan)}
									</span>
								</div>
							</div>
							<div className="flex-1">
								{/* <p className="text-green-500 text-xl font-semibold">Save 12%</p> */}
								<button
									type="button"
									className="h-14 px-6 py-2 font-semibold rounded-xl bg-yellow-500 hover:bg-yellow-400 text-white"
									onClick={() => buttonPengajuan(detailPendanaan.id)}
								>
									Apply
								</button>
								{/* <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p> */}
							</div>
						</div>

						<div className="my-4">
							<p className="text-gray-800 font-semibold text-lg">{detailPendanaan.nama_investor}</p>
						</div>
						<div className="my-8">
							<p className="text-gray-500 font-bold text-xl">Perusahaan Pengirim</p>
							<p className="text-gray-800 font-semibold text-md">{detailPendanaan.perusahaan_pengirim}</p>
						</div>
						<div className="my-8">
							<p className="text-gray-500 font-bold text-xl">Bagi Hasil</p>
							<p className="text-gray-800 font-semibold text-md">
								Investor: {detailPendanaan.bagi_hasil_investor} %
							</p>
							<p className="text-gray-800 font-semibold text-md">
								Petani: {detailPendanaan.bagi_hasil_petani} %
							</p>
						</div>
						<div className="my-8">
							<p className="text-gray-500 font-bold text-xl">Kebutuhan Komoditas</p>
							<p className="text-gray-800 font-semibold text-md">{detailPendanaan.kebutuhan_komoditas}</p>
						</div>
						<div className="my-8">
							<p className="text-gray-500 font-bold text-xl">Jangka Waktu</p>
							<p className="text-gray-800 font-semibold text-md">
								{convertDate(jangkaWaktuArr[0])} - {convertDate(jangkaWaktuArr[1])}
							</p>
						</div>
						<div className="my-8">
							<p className="text-gray-500 font-bold text-xl">Keuntungan Bersih</p>
							<p className="text-gray-800 font-semibold text-md">
								{Intl.NumberFormat('id', {
									style: 'currency',
									currency: 'IDR'
								}).format(detailPendanaan.keuntungan_bersih)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Detail
