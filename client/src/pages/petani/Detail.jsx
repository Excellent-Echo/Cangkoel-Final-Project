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

			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
				<div class="flex flex-col md:flex-row -mx-4">
					<div class="md:flex-1 px-4">
						<img
							src={detailPendanaan.foto_profil}
							alt={detailPendanaan.id}
							class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
						/>
						<p class="text-gray-500 mb-4 text-justify">{detailPendanaan.deskripsi}</p>
						<p class="text-gray-800 font-semibold text-lg  mb-4">{detailPendanaan.biaya_operasional}</p>
						<p class="text-gray-800 font-semibold text-lg  mb-4">{detailPendanaan.biaya_ekspor}</p>
						<p class="text-gray-800 font-semibold text-lg  mb-4">
							{detailPendanaan.perhitungan_penghasilan}
						</p>
						<p class="text-gray-800 font-semibold text-lg  mb-4">
							{detailPendanaan.perhitungan_keuntungan}
						</p>
					</div>
					<div class="md:flex-1 px-4">
						<h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
							{detailPendanaan.judul_pendanaan}
						</h2>

						<div class="flex items-center space-x-4 my-4">
							<div>
								<div class="rounded-lg bg-gray-100 flex py-2 px-3">
									<span class="font-bold text-yellow-500 text-3xl">
										{Intl.NumberFormat('id', {
											style: 'currency',
											currency: 'IDR'
										}).format(detailPendanaan.nominal_pendanaan)}
									</span>
								</div>
							</div>
							<div class="flex-1">
								{/* <p class="text-green-500 text-xl font-semibold">Save 12%</p> */}
								<button
									type="button"
									class="h-14 px-6 py-2 font-semibold rounded-xl bg-yellow-500 hover:bg-yellow-400 text-white"
									onClick={() => buttonPengajuan(detailPendanaan.id)}
								>
									Apply
								</button>
								{/* <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p> */}
							</div>
						</div>

						<div class="my-4">
							<p class="text-gray-800 font-semibold text-lg">{detailPendanaan.nama_investor}</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Detail
