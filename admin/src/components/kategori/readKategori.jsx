import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Input, Table } from 'reactstrap'
import EditKategori from './editKategori'
import DeleteKategori from './deleteKategori'
import kategoriActions from '../../redux/kategori/read/readKategoriAction'
import { useDispatch, useSelector } from 'react-redux'

const Readkategori = () => {
	const dispatch = useDispatch()
	const readKategoriData = useSelector((state) => state.readKategori.kategoriPertanian)

	useEffect(() => {
		console.log('selector', readKategoriData)
	})

	useEffect(() => {
		dispatch(kategoriActions.readKategoriActions())
	}, [])

	return (
		<Card>
			<CardBody>
				<div className="d-flex align-items-center">
					<div>
						<CardTitle>Daftar Kategori</CardTitle>
						<CardSubtitle>Overview of Latest Month</CardSubtitle>
					</div>
					<div className="ml-auto d-flex no-block align-items-center">
						<div className="dl">
							<Input type="select" className="custom-select">
								<option value="0">Monthly</option>
								<option value="1">Daily</option>
								<option value="2">Weekly</option>
								<option value="3">Yearly</option>
							</Input>
						</div>
					</div>
				</div>
				<Table className="no-wrap v-middle" responsive>
					<thead>
						<tr className="border-0">
							<th className="border-0">Nama Kategori</th>
							<th className="border-0">Foto Kategori</th>
						</tr>
					</thead>

					{readKategoriData &&
						readKategoriData.map((item, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>{item.nama_kategori}</td>
										<td>
											<div className="d-flex no-block align-items-center">
												<div className="mr-2">
													<img
														src={item.foto_kategori}
														alt="user"
														className="rounded-circle"
														width="45"
													/>
												</div>
											</div>
										</td>
										<div className="grid-container">
											<div className="item2">
												<EditKategori />
											</div>
											<div className="item3">
												<DeleteKategori />
											</div>
										</div>
									</tr>
								</tbody>
							)
						})}
				</Table>
			</CardBody>
		</Card>
	)
}

export default Readkategori
