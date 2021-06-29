import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import tw from 'twin.macro'
// import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
// import { Container, ContentWithPaddingXl } from '../../components/misc/Layouts.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { getKategoriActionByID } from '../../redux/kategori/kategoriAction'

// components
// import { SectionHeadingtwo } from '../../components/misc/Headings.jsx'
// import { PrimaryButton as PrimaryButtonBase } from '../../components/misc/Buttons.jsx'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
// import Search from '../../components/misc/Search.jsx'

// styled components with tailwind
// const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`
// const Header = tw(SectionHeadingtwo)``
// const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`
// const TabControl = styled.div`
//   ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
//   &:hover {
//     ${tw`bg-gray-300 text-gray-700`}
//   }
//   ${(props) => props.active && tw`bg-crowde-100! text-gray-100!`}
//   }
// `
// const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`
// const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`
// const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`
// const CardImageContainer = styled.div`
// 	${(props) =>
// 		css`
// 			background-image: url('${props.imageSrc}');
// 		`}
// 	${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
// `
// const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`
// const CardRating = styled.div`
// 	${tw`mr-1 text-sm font-bold flex items-end`}
// 	svg {
// 		${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
// 	}
// `
// const CardHoverOverlay = styled(motion.div)`
// 	background-color: rgba(255, 255, 255, 0.5);
// 	${tw`absolute inset-0 flex justify-center items-center`}
// `
// const CardButton = tw(PrimaryButtonBase)`text-sm`
// const CardText = tw.div`p-4 text-gray-900`
// const CardTitle = tw.h5`text-lg font-semibold group-hover:text-crowde-100`
// const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`
// const CardPrice = tw.p`mt-4 text-xl font-bold`

const Results = ({ heading = 'Pendanaan Ekspor Tanaman Sayur' }) => {
	const dispatch = useDispatch()
	const history = useHistory()
	const selector = useSelector((state) => state.kategori)

	const { kategoriDetail } = selector
	console.log('kategori Detail', kategoriDetail.Pendanaan)

	// console.log('tabs', tabs)

	// const tabsKeys = Object.keys(tabs)
	// const [activeTab, setActiveTab] = useState(tabsKeys[0])
	// console.log('tabkeys 0', tabsKeys[0])

	const { id } = useParams()

	useEffect(() => {
		dispatch(getKategoriActionByID(id))
		// eslint-disable-next-line
	}, [])

	const [card, SetKategori] = useState([])

	useEffect(() => {
		SetKategori(GetRandomCards(kategoriDetail))
		console.log('card', card)
		// eslint-disable-next-line
	}, [kategoriDetail])

	const handleClick = (id) => {
		history.push(`/detail-pendanaan/${id}`)
	}

	return (
		<>
			<Navbar />
			<div class="container mx-auto">
				{/* <div>
					{kategoriDetail.Pendanaan &&
						kategoriDetail.Pendanaan.map((item, index) => {
							return (
								<div key={index}>
									<h1 onClick={() => handleClick(item.id)}>{item.judul_pendanaan}</h1>
								</div>
							)
						})}
				</div> */}

				<div class="flex flex-wrap justify-center">
					{kategoriDetail.Pendanaan &&
						kategoriDetail.Pendanaan.map((item, index) => {
							return (
								<div class="md:w-1/3 lg:w-1/4 py-4 px-4">
									<div>
										<div class="bg-white relative shadow p-2 rounded-lg text-gray-800">
											<div
												alt={index}
												class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-yellow-500"
											>
												{item.bagi_hasil_petani} %
											</div>
											<img
												src={item.foto_profil}
												class="h-32 rounded-lg w-full object-cover border-2 border-yellow-500"
												alt={index}
											/>
											<div class="py-2 px-2">
												<div class=" font-bold font-title text-center">
													{item.judul_pendanaan}
												</div>

												<div class="text-sm font-light text-center my-2">
													{Intl.NumberFormat('id', {
														style: 'currency',
														currency: 'IDR'
													}).format(item.nominal_pendanaan)}
												</div>

												<div class="text-sm font-light text-center my-2">
													<button
														type="button"
														class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
														onClick={() => handleClick(item.id)}
													>
														Detail Pendanaan
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})}
				</div>
			</div>

			<Footer />

			{/* <button onClick={() => console.log(GetRandomCards(kategoriDetail))}>Click</button>
			<CardContainer>
				<Card className="group" initial="rest" whileHover="hover" animate="rest">
					<CardImageContainer imageSrc={card.foto_profil}>
						<CardRatingContainer>
							<CardRating>Commodity {card.kebutuhan_komoditas}</CardRating>
						</CardRatingContainer>
						<CardHoverOverlay
							variants={{
								hover: {
									opacity: 1,
									height: 'auto'
								},
								rest: {
									opacity: 0,
									height: 0
								}
							}}
							transition={{ duration: 0.3 }}
						>
							<CardButton>See Details</CardButton>
						</CardHoverOverlay>
					</CardImageContainer>
					<CardText>
						<CardTitle>{card.judul_pendanaan}</CardTitle>
						<CardContent>Bagi Hasil {card.bagi_hasil_petani}%</CardContent>
						<CardPrice>{card.nominal_pendanaan}</CardPrice>
					</CardText>
				</Card>
			</CardContainer> */}
		</>

		// <Container>
		// 	<Navbar />

		// 	<div
		// 		className="hero-image bg-right-bottom bg-cover flex"
		// 		style={{
		// 			backgroundImage: `url("https://res.cloudinary.com/cangkoel/image/upload/v1624008127/jumbotron-result_tltwlj.png")`
		// 		}}
		// 	>
		// 		<div className="relative container mx-auto p-4 flex items-end z-10">
		// 			<div className="content float-left py-4 px-5 my-5">
		// 				<Search />
		// 			</div>
		// 		</div>
		// 	</div>

		// 	<ContentWithPaddingXl>
		// 		<HeaderRow>
		// 			<Header>Beranda / Result / Pendanaan ekspor Tanaman Sayur</Header>
		// 			<TabsControl>
		// 				{Object.keys(tabs).map((tabName, index) => (
		// 					<TabControl
		// 						key={index}
		// 						active={activeTab === tabName}
		// 						onClick={() => setActiveTab(tabName)}
		// 					>
		// 						{tabName}
		// 					</TabControl>
		// 				))}
		// 			</TabsControl>
		// 		</HeaderRow>

		// 		{tabsKeys.map((tabKey, index) => (
		// 			<TabContent
		// 				key={index}
		// 				variants={{
		// 					current: {
		// 						opacity: 1,
		// 						scale: 1,
		// 						display: 'flex'
		// 					},
		// 					hidden: {
		// 						opacity: 0,
		// 						scale: 0.8,
		// 						display: 'none'
		// 					}
		// 				}}
		// 				transition={{ duration: 0.4 }}
		// 				initial={activeTab === tabKey ? 'current' : 'hidden'}
		// 				animate={activeTab === tabKey ? 'current' : 'hidden'}
		// 			>
		// 				{tabs[tabKey] !== undefined ? (
		// 					tabs[tabKey].map((card, index) => (

		// 					))
		// 				) : (
		// 					<h1>Loading</h1>
		// 				)}
		// 			</TabContent>
		// 		))}
		// 	</ContentWithPaddingXl>
		// 	<Footer />
		// </Container>
	)
}

const GetRandomCards = (kategori) => {
	// const selector = useSelector((state) => state.kategori)
	console.log('kategori', kategori)
	// const { kategoriDetail } = selector
	// console.log('kategori Detail', kategoriDetail.Pendanaan)

	// return kategori.Pendanaan.sort(() => Math.random() - 0.5)
}

export default Results
