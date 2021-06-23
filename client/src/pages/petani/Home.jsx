import React from 'react'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'
import { css } from 'styled-components/macro' //eslint-disable-line

// components
import Navbar from '../../components/Navbar.jsx'
import Jumbotron from '../../components/Jumbotron.jsx'
import KategoriPertanian from '../../components/KategoriPertanian.jsx'
import DataPengguna from '../../components/DataPengguna.jsx'
import Testimoni from '../../components/Testimoni.jsx'
import Footer from '../../components/Footer.jsx'
import Search from '../../components/misc/Search.jsx'

// assets
import pendanaan from '../../assets/pendanaan.svg'
import investor from '../../assets/investor.svg'
import konsumen from '../../assets/konsumen.svg'

// styled components with tailwind
const HighlightedText = tw.span`bg-crowde-100 text-gray-100 px-4 transform -skew-x-12 inline-block`
const HighlightedTextInverse = tw.span`bg-gray-100 text-crowde-100 px-4 transform -skew-x-12 inline-block`

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron
				text={
					<>
						Tingkatkan Komoditas Ekspor Anda di{' '}
						<HighlightedTextInverse>Platform Cangkoel.</HighlightedTextInverse>
					</>
				}
			/>
			<Search />
			<KategoriPertanian
				heading={
					<>
						<Link to="/results">
							Cari pendanaan <HighlightedText>pertanian.</HighlightedText>
						</Link>
					</>
				}
			/>

			<DataPengguna
				heading={
					<>
						<HighlightedText>Investor</HighlightedText> Terbaik
					</>
				}
				cards={[
					{
						imageSrc: pendanaan,
						title: 'Memberikan Pendanaan Kepada Pemilik Lahan',
						description:
							'Petani yang mempunyai lahan pertanian tapi tidak mempunyai dana yang cukup untuk melakukan produksi dan ekspor.'
					},
					{
						imageSrc: investor,
						title: '150+ Investor Terpercaya dan Terbaik',
						description:
							'Kami telah bekerja sama dengan berbagai macam investor dari Indonesia dan luar negeri terpercaya dan terbaik.'
					},
					{
						imageSrc: konsumen,
						title: 'Konsumen Dari Berbagai Penjuru Dunia',
						description:
							'Tidak perlu bingung lagi distribusi komoditas anda, pendanaan kami sudah siap mendistribusikan komoditas anda.'
					}
				]}
				imageContainerCss={tw`p-2!`}
				imageCss={tw`w-20! h-20!`}
			/>

			<Testimoni
				subheading=""
				heading={
					<>
						Cerita <HighlightedText>Mereka.</HighlightedText>
					</>
				}
			/>

			<Footer />
		</div>
	)
}

export default Home
