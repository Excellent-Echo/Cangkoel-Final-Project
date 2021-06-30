import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, Input, Table } from 'reactstrap'
import DeletePengajuan from './deletePengajuan'
import EditPengajuan from './editPengajuan'

import pengajuanAction from '../../redux/pengajuan/pengajuanAction'

const ReadPengajuan = () => {
	const { pengajuanData } = useSelector((state) => state.pengajuan)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(pengajuanAction.getPengajuanData())
		// eslint-disable-next-line
	}, [])

	return (
		<Card>
			<CardBody>
				<div className="d-flex align-items-center">
					<div>
						<CardTitle>Daftar Pengajuan</CardTitle>
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
							<th className="border-0">Nama Lengkap</th>
							<th className="border-0">Nomor Hp</th>
							{/* <th className="border-0">Jenis Kelamin</th> */}
							<th className="border-0">Dokumen Perizinan</th>
							<th className="border-0">Nomor NPWP</th>
							<th className="border-0">KTP</th>
							<th className="border-0">Jenis Usaha</th>
							<th className="border-0">Tenaga Kerja</th>
							<th className="border-0">Omzet Perbulan</th>
							<th className="border-0">Alamat Usaha</th>
							<th className="border-0">ID Pendanaan</th>
							<th className="border-0">ID Petani</th>
						</tr>
					</thead>
					{pengajuanData &&
						pengajuanData.map((value, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>{value.id}</td>
										<td>
											<div className="d-flex no-block align-items-center">
												<div className="">
													<h5 className="mb-0 font-16 font-medium">{value.nama_lengkap}</h5>
												</div>
											</div>
										</td>
										<td>{value.nomor_hp}</td>
										{/* <td>{value.jenis_kelamin}</td> */}
										<td>
											<Link to={value.dokumen_perizinan}>Dokumen Perizinan</Link>
										</td>
										<td>{value.nomor_npwp}</td>
										<td>
											<Link to={value.ktp}>KTP</Link>
										</td>
										<td>{value.jenis_usaha}</td>
										<td>{value.tenaga_kerja}</td>
										<td>
											{' '}
											{Intl.NumberFormat('id', {
												style: 'currency',
												currency: 'IDR'
											}).format(value.omzet_perbulan)}
										</td>
										<td>{value.alamat_usaha}</td>
										<td>{value.pendanaan_id}</td>
										<td>{value.petani_id}</td>

										<td>
											<div className="grid-container">
												<div className="item2">
													<EditPengajuan />
												</div>
												<div className="item3">
													<DeletePengajuan />
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
	)
}

export default ReadPengajuan
