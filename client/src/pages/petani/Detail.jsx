import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import tw from 'twin.macro'
import { ContentWithPaddingXl } from '../../components/misc/Layouts'
import { useParams } from 'react-router-dom'
import { getPendanaanById } from '../../redux/pendanaan/pendanaanAction'
import { useDispatch, useSelector } from 'react-redux'

export const NavLinks = tw.div`inline-block`

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

export const PrimaryLink = tw(NavLink)`
  lg:mx-1
  px-8 py-3 rounded bg-crowde-100 text-gray-100
  hocus:bg-crowde-200 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`
const Card = tw.div`bg-crowde-100 p-6 flex justify-center items-center`

const Detail = () => {
	const dispatch = useDispatch()
	const selector = useSelector((state) => state.pendanaan.detailPendanaan)

	useEffect(() => {
		console.log('selector', selector)
	})

	const { id } = useParams()

	useEffect(() => {
		dispatch(getPendanaanById(id))
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Navbar />
			<ContentWithPaddingXl>
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
			</ContentWithPaddingXl>
			<Footer />
		</>
	)
}

export default Detail
