import React, { useState, useEffect } from 'react'
import { Input, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap'
import editHasilPengajuanAction from '../../redux/hasilPengajuan/update/updateHasilPengajuanAction'
import { useDispatch } from 'react-redux'

const EditHasilPengajuan = (props) => {
	// const { className } = props
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	// const selector = useSelector((state) => state.updateHasilPengajuan)
	const dispatch = useDispatch()
	// useEffect(() => {
	// 	console.log('selector', selector)
	// 	// eslint-disable-next-line
	// }, [])

	const [status, setStatus] = useState('')
	const [keterangan, setKeterangan] = useState('')

	useEffect(() => {
		dispatch(editHasilPengajuanAction.updateHasilPengajuanAction())
		// dispatch(editHasilPengajuanAction.getHasilPengajuanByIDAction(props.hasilPengajuanID))
		// eslint-disable-next-line
	}, [])

	const handleEdit = (e) => {
		e.preventDefault()
		dispatch(
			editHasilPengajuanAction.updateHasilPengajuanAction(
				props.hasilPengajuanID,
				status,
				keterangan,
				props.petaniID,
				props.formPengajuanID
				// petaniID,
				// formulirPengajuanID
			)
		)
	}

	return (
		<div>
			<Button className="btn" color="primary" onClick={toggle}>
				Edit
			</Button>
			{/* <h1>{props.valueid}</h1> */}
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Update Hasil Pengajuan</ModalHeader>
				<ModalBody>
					<Form onSubmit={handleEdit}>
						<FormGroup>
							<Label>Status</Label>
							<Input
								type="select"
								name="select"
								id="status"
								onChange={(e) => {
									setStatus(e.target.value)
								}}
							>
								<option>Select your option</option>
								<option value="Review">Review</option>
								<option value="Survey">Survey</option>
								<option value="Approve">Approve</option>
								<option value="Rejects">Rejects</option>
								<option value="Dana Cair">Dana Cair</option>
								<option value="Produksi">Produksi</option>
								<option value="Ekspor">Ekspor</option>
								<option value="Bagi Hasil">Bagi Hasil</option>
							</Input>
						</FormGroup>
						<FormGroup>
							<Label>Keterangan</Label>
							<Input
								type="select"
								name="select"
								id="keterangan"
								onChange={(e) => {
									setKeterangan(e.target.value)
								}}
							>
								<option>Select your option</option>
								<option value="Pihak Cangkoel sedang mereview formulir pengajuan anda">
									Pihak Cangkoel sedang mereview formulir pengajuan anda
								</option>
								<option value="Pihak Cangkoel sedang mensurvei tempat usaha milik petani">
									Pihak Cangkoel sedang mensurvei tempat usaha milik petani
								</option>
								<option value="Pihak Cangkoel mensetujui formulir pengajuan anda">
									Pihak Cangkoel mensetujui formulir pengajuan anda
								</option>
								<option value="Pihak Cangkoel sedang menolak formulir pengajuan anda">
									Pihak Cangkoel sedang menolak formulir pengajuan anda
								</option>
								<option value="Pendanaan untuk produksi sudah cair">
									Pendanaan untuk produksi sudah cair
								</option>
								<option value="Proses Produksi sedang dilakukan pihak petani diawasi oleh pihak Cangkoel">
									Proses Produksi sedang dilakukan pihak petani diawasi oleh pihak Cangkoel
								</option>
								<option value="Proses pengiriman barang sedang berlangsung ke konsumen">
									Proses pengiriman barang sedang berlangsung ke konsumen
								</option>
								<option value="Pembagian hasil antara petani dan cangkoel">
									Pembagian hasil antara petani dan cangkoel
								</option>
							</Input>
						</FormGroup>

						<FormGroup>
							<Label>ID Petani</Label>
							<Input
								disabled
								type="text"
								name="petani"
								id="petani"
								placeholder="masukkan id petani"
								value={props.petaniID}
							/>
						</FormGroup>
						<FormGroup>
							<Label>ID Formulir Pengajuan</Label>
							<Input
								disabled
								type="number"
								name="hasilpengajuan"
								id="hasilpengajuan"
								placeholder="masukkan id formulir pengajuan"
								value={props.formPengajuanID}
							/>
						</FormGroup>

						<Button style={{ margin: '5px' }}>Submit</Button>
					</Form>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default EditHasilPengajuan
