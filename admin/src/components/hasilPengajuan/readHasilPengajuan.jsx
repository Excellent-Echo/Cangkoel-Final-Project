import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Input, Table } from 'reactstrap'
import DeleteHasilPengajuan from './deleteHasilPengajuan'
import EditHasilPengajuan from './editHasilPengajuan'
import hasilPengajuanActions from '../../redux/hasilPengajuan/read/readHasilPengajuanAction'
import { useDispatch, useSelector } from 'react-redux'

const ReadHasilPengajuan = () => {
	const dispatch = useDispatch()
	const readHasilPengajuanData = useSelector((state) => state.readHasilPengajuan.hasilPengajuan)

	console.log(readHasilPengajuanData)

	// useEffect(() => {
	// 	console.log('hasil pengajuan data', readHasilPengajuanData)
	// }, [])

	useEffect(() => {
		dispatch(hasilPengajuanActions.readHasilPengajuanActions())
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<Card>
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<CardTitle>Daftar Hasil Pengajuan</CardTitle>
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
								<th className="border-0">Status</th>
								<th className="border-0">Keterangan</th>
								<th className="border-0">ID Petani</th>
								<th className="border-0">ID Formulir Pengajuan</th>
								<th className="border-0">Dibuat Terakhir</th>
								<th className="border-0">Diupdate Terakhir</th>

								<th></th>
							</tr>
						</thead>

						{readHasilPengajuanData &&
							readHasilPengajuanData.map((value, index) => {
								return (
									<tbody key={index}>
										<tr>
											<td>{value.id}</td>
											<td>{value.status}</td>
											<td>{value.keterangan}</td>
											<td>{value.petani_id}</td>
											<td>{value.form_pengajuan_id}</td>
											<td>{value.created_at}</td>
											<td>{value.updated_at}</td>
											<td>
												<div className="grid-container">
													<div className="item2">
														<EditHasilPengajuan valueid={value.id} />
													</div>
													<div className="item3">
														<DeleteHasilPengajuan />
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

export default ReadHasilPengajuan
