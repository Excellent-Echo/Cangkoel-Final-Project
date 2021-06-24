import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKategoriAction } from '../redux/kategori/kategoriAction'

const Test = () => {
	const dispatch = useDispatch()
	const listKategori = useSelector((state) => state.kategori)
	const { kategoriPertanian } = listKategori

	console.log('kategori pertanian', kategoriPertanian.data)

	useEffect(() => {
		dispatch(getKategoriAction())
	}, [dispatch])

	console.log(Array.isArray(kategoriPertanian))

	return (
		<div>
			<h1>Coba</h1>
			{kategoriPertanian &&
				kategoriPertanian.map((item, index) => {
					return (
						<div key={index}>
							<img src={item.foto_kategori} />
							<h1>{item.nama_kategori}</h1>
						</div>
					)
				})}
		</div>
	)
}

export default Test
