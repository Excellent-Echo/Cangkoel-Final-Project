import React, { useState, useEffect } from 'react'
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Input,
	Table,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label
} from 'reactstrap'

import { useDispatch, useSelector } from 'react-redux'
import pendanaanActions from '../../redux/pendanaan/read/readPendanaanAction'

const Pendanaan = (props) => {
	const { className } = props
	const [modal, setModal] = useState(false)
	const [konfirmasi, setKonfirmasi] = useState(false)
	const toggle = () => setModal(!modal)
	const show = () => setKonfirmasi(!konfirmasi)

	const dispatch = useDispatch()
	const readPendanaanData = useSelector((state) => state.readPendanaan.pendanaan)

	useEffect(() => {
		console.log('selector', readPendanaanData)
	})

	useEffect(() => {
		dispatch(pendanaanActions.readPendanaanActions())
	}, [])

	return (
		<>
			<Card>
				<Form style={{ margin: '20px' }}>
					<CardTitle>Buat Pendanaan Baru</CardTitle>
					<FormGroup>
						<Label>Masukkan ID Petani</Label>
						<Input type="number" name="petani" id="petani" placeholder="masukkan id petani" />
					</FormGroup>
					<FormGroup>
						<Label>Masukkan ID Investor</Label>
						<Input type="number" name="investor" id="investor" placeholder="password placeholder" />
					</FormGroup>
					<FormGroup>
						<Label>Masukkan ID Petani</Label>
						<Input type="number" name="petani" id="petani" placeholder="masukkan id petani" />
					</FormGroup>
					<FormGroup>
						<Label for="exampleSelect">Status</Label>
						<Input type="select" name="select" id="exampleSelect">
							<option>Review</option>
							<option>Survey</option>
							<option>Approve</option>
							<option>Rejects</option>
							<option>Dana Cari</option>
							<option>Produksi</option>
							<option>Ekspor</option>
							<option>Bagi Hasil</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="exampleSelect">Keterangan</Label>
						<Input type="select" name="select" id="exampleSelect">
							<option>Pihak Cangkoel dan Investor sedang mereview formulir pengajuan anda</option>
							<option>Pihak Cangkoel dan Investor sedang mensurvei tempat usaha milik petani</option>
							<option>Pihak Cangkoel dan Investor mensetujui formulir pengajuan anda</option>
							<option>Pihak Cangkoel dan Investor sedang menolak formulir pengajuan anda</option>
							<option>Pendanaan untuk produksi sudah cair</option>
							<option>Proses Produksi sedang dilakukan pihak petani diawasi oleh pihak Cangkoel</option>
							<option>Proses pengiriman barang sedang berlangsung ke konsumen</option>
							<option>Pembagian hasil antara investor, petani dan cangkoel</option>
						</Input>
					</FormGroup>

					<Button>Buat Hasil Pengajuan</Button>
				</Form>
			</Card>
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
							</tr>
						</thead>
						{readPendanaanData &&
							readPendanaanData.map((item, index) => {
								return (
									<tbody>
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
											<td>{item.perushaan_pengirim}</td>
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
											<div className="grid-container">
												<div className="item2">
													<Button className="btn" color="primary" onClick={toggle}>
														Edit
													</Button>
												</div>
												<div className="item3">
													<Button className="btn" color="secondary" onClick={show}>
														Delete
													</Button>
													<Modal isOpen={modal} toggle={toggle} className={className}>
														<ModalHeader toggle={toggle}>Modal title</ModalHeader>
														<ModalBody>
															<Form>
																<FormGroup>
																	<Label for="exampleEmail">Field</Label>
																	<Input
																		type="text"
																		name="text"
																		id="name"
																		placeholder="with a placeholder"
																	/>
																</FormGroup>
																<FormGroup>
																	<Label for="examplePassword">Field</Label>
																	<Input
																		type="text"
																		name="text"
																		id="name"
																		placeholder="with a placeholder"
																	/>
																</FormGroup>

																<FormGroup>
																	<Label for="exampleText">Text Area</Label>
																	<Input
																		type="textarea"
																		name="text"
																		id="exampleText"
																	/>
																</FormGroup>
																<FormGroup>
																	<Label for="exampleFile">File</Label>
																	<Input type="file" name="file" id="exampleFile" />
																</FormGroup>

																<Button style={{ margin: '5px' }} onClick={toggle}>
																	Submit
																</Button>
																<Button style={{ margin: '5px' }} onClick={toggle}>
																	Cancel
																</Button>
															</Form>
														</ModalBody>
													</Modal>

													<Modal isOpen={konfirmasi} show={show} className={className}>
														<ModalHeader show={show}>Modal title</ModalHeader>
														<ModalBody>
															<h4>Apakah serius anda ingin mengapus data ini?</h4>
															<Button style={{ margin: '5px' }} onClick={show}>
																Delete
															</Button>
															<Button style={{ margin: '5px' }} onClick={show}>
																Cancel
															</Button>
														</ModalBody>
													</Modal>
												</div>
											</div>
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

export default Pendanaan
