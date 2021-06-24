import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { useDispatch, useSelector } from 'react-redux'
import { getKategoriAction } from '../redux/kategori/kategoriAction'

// components
import { ContentWithPaddingXl } from './misc/Layouts.jsx'

// styled components with tailwind
const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`
const CardImageContainer = styled.div`
	${(props) =>
		css`
			background-image: url('${props.imageSrc}');
		`}
	${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`

const CardHoverOverlay = styled(motion.div)`
	background-color: rgba(255, 255, 255, 0.5);
	${tw`absolute inset-0 flex justify-center items-center`}
`
const CardButton = tw.span`rounded bg-crowde-100 hover:bg-crowde-200 py-2 px-4 text-white mx-3`
const CardText = tw.div`p-4 text-gray-900`
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-crowde-100`

const KategoriPertanian = ({
	tabs = {
		Starters: [
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941562/sayuran_pgy0to.jpg',
				title: 'Pendanaan Ekspor Tanaman Sayur',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941563/buah_snz3r1.jpg',
				title: 'Pendanaan Ekspor Tanaman Buah',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941562/industri_kwtr3e.jpg',
				title: 'Pendanaan Ekspor Tanaman Industri',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941495/pangan_bgxoqb.jpg',
				title: 'Pendanaan Ekspor Tanaman Pangan',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941562/hias_yp2hle.jpg',
				title: 'Pendanaan Ekspor Tanaman Hias',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941563/umbi_vu2y1i.jpg',
				title: 'Pendanaan Ekspor Tanaman Umbi',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941562/sayuran_pgy0to.jpg',
				title: 'Pendanaan Ekspor Tanaman Sayur',
				url: '/results'
			},
			{
				imageSrc: 'https://res.cloudinary.com/cangkoel/image/upload/v1623941562/sayuran_pgy0to.jpg',
				title: 'Pendanaan Ekspor Tanaman Sayur',
				url: '/results'
			}
		]
	}
}) => {
	const dispatch = useDispatch()
	const listKategori = useSelector((state) => state.kategori)
	const tabsKeys = Object.keys(tabs)
	const { kategoriPertanian } = listKategori

	console.log('kategori pertanian', kategoriPertanian)

	useEffect(() => {
		dispatch(getKategoriAction())
	}, [dispatch])

	return (
		<ContentWithPaddingXl>
			{tabsKeys.map((tabKey, index) => (
				<TabContent
					key={index}
					variants={{
						current: {
							opacity: 1,
							scale: 1,
							display: 'flex'
						},
						hidden: {
							opacity: 0,
							scale: 0.8,
							display: 'none'
						}
					}}
					transition={{ duration: 0.4 }}
				>
					{tabs[tabKey].map((card, index) => (
						<CardContainer key={index}>
							<Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
								<CardImageContainer imageSrc={card.imageSrc}>
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
										<CardButton>Cari Pendanaan</CardButton>
									</CardHoverOverlay>
								</CardImageContainer>
								<CardText>
									<CardTitle>{card.title}</CardTitle>
								</CardText>
							</Card>
						</CardContainer>
					))}
				</TabContent>
			))}
		</ContentWithPaddingXl>
	)
}

export default KategoriPertanian
