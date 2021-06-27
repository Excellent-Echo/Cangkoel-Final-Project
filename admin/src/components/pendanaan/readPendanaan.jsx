import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Input, Table } from 'reactstrap'
import DeletePendanaan from './deletePendanaan'
import EditPendanaan from './editPendanaan'
import { useDispatch, useSelector } from 'react-redux'
import pendanaanActions from '../../redux/pendanaan/read/readPendanaanAction'

const ReadPendanaan = () => {
	const dispatch = useDispatch()
	const readPendanaanData = useSelector((state) => state.readPendanaan.pendanaan)

	useEffect(() => {
		console.log('selector', readPendanaanData)
	})

	useEffect(() => {
		dispatch(pendanaanActions.readPendanaanActions())
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Card>
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<CardTitle>Daftar Pendanaan</CardTitle>
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
								<th className="border-0">ID</th>
								<th className="border-0">Foto Profil</th>
								<th className="border-0">Nama Investor</th>
								<th className="border-0">Judul Pendanaan</th>
								<th className="border-0">Nominal Pendanaan</th>
								<th className="border-0">Perusahaan Pengirim</th>
								<th className="border-0">Bagi Hasil Investor</th>
								<th className="border-0">Bagi Hasil Petani</th>
								<th className="border-0">Kebutuhan Komoditas</th>
								<th className="border-0">Jangka Waktu</th>
								<th className="border-0">Keuntungan Bersih</th>
								<th className="border-0">Deskprisi</th>
								<th className="border-0">Biaya Operasional</th>
								<th className="border-0">Biaya Ekspor</th>
								<th className="border-0">Perhitungan Penghasilan</th>
								<th className="border-0">Perhitungan Keuntungan</th>
								<th className="border-0">ID Kategori Pertanian</th>
								<th className="border-0">Terakhir Dibuat</th>
								<th className="border-0">Terakhir Diupdate</th>
								<th className="border-0"></th>
							</tr>
						</thead>
						{readPendanaanData &&
							readPendanaanData.map((item, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td>{item.id}</td>
											<td>
												<div className="d-flex no-block align-items-center">
													<div className="mr-2">
														<img
															src={item.foto_profil}
															alt="user"
															className="rounded-circle"
															width="45"
														/>
													</div>
												</div>
											</td>
											<td>{item.nama_investor}</td>
											<td>{item.judul_pendanaan}</td>
											<td>{item.nominal_pendanaan}</td>
											<td>{item.perusahaan_pengirim}</td>
											<td>{item.bagi_hasil_investor} %</td>
											<td>{item.bagi_hasil_petani} %</td>
											<td>{item.kebutuhan_komoditas}</td>
											<td>{item.jangka_waktu}</td>
											<td>{item.keuntungan_bersih}</td>
											<td>{item.deskripsi}</td>
											<td>{item.biaya_operasional}</td>
											<td>{item.biaya_ekspor}</td>
											<td>{item.perhitungan_penghasilan}</td>
											<td>{item.perhitungan_keuntungan}</td>
											<td>{item.kategori_id}</td>
											<td>{item.created_at}</td>
											<td>{item.updated_at}</td>
											<td>
												<div className="grid-container">
													<div className="item2">
														<EditPendanaan />
													</div>
													<div className="item3">
														<DeletePendanaan />
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								)
							})}
					</Table>
				</CardBody>
			</Card>
		</>
	)
}

export default ReadPendanaan
