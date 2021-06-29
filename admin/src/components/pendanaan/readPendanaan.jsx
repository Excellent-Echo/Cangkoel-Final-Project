import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Input, Table } from 'reactstrap'
import DeletePendanaan from './deletePendanaan'
import EditPendanaan from './editPendanaan'
import { useDispatch, useSelector } from 'react-redux'
import pendanaanActions from '../../redux/pendanaan/read/readPendanaanAction'

const ReadPendanaan = () => {
	const dispatch = useDispatch()
	const readPendanaanData = useSelector((state) => state.readPendanaan.pendanaan)

	// useEffect(() => {
	// 	console.log('selector', readPendanaanData)
	// },[])

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
								<th className="border-0">Deskripsi</th>
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
								let biayaOperasionalArr = []
								if (item.biaya_operasional) {
									biayaOperasionalArr = item.biaya_operasional.split(',')
								}

								let biayaEksporArr = []
								if (item.biaya_ekspor) {
									biayaEksporArr = item.biaya_ekspor.split(',')
								}

								let perhitunganPenghasilanArr = []
								if (item.perhitungan_penghasilan) {
									perhitunganPenghasilanArr = item.perhitungan_penghasilan.split(',')
								}

								let perhitunganKeuntunganArr = []
								if (item.perhitungan_keuntungan) {
									perhitunganKeuntunganArr = item.perhitungan_keuntungan.split(',')
								}

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
											<td>
												Bahan Baku: {biayaOperasionalArr[0]} <br /> Sewa Mesin:{' '}
												{biayaOperasionalArr[1]}
											</td>
											<td>
												Ongkos Kirim: {biayaEksporArr[0]} <br /> Pajak: {biayaEksporArr[1]}{' '}
												<br /> Kontainer: {biayaEksporArr[2]} <br /> Dokumen:{' '}
												{biayaEksporArr[3]}
											</td>
											<td>
												{perhitunganPenghasilanArr[1]}/{perhitunganPenghasilanArr[0]}
											</td>
											<td>
												Pendapatan: {perhitunganKeuntunganArr[0]} <br /> Modal Awal:{' '}
												{perhitunganKeuntunganArr[1]}
											</td>
											<td>{item.kategori_id}</td>
											<td>{item.created_at}</td>
											<td>{item.updated_at}</td>
											<td>
												<div className="grid-container">
													<div className="item2">
														<EditPendanaan />
													</div>
													<div className="item3">
														<DeletePendanaan pendanaanID={item.id} />
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
