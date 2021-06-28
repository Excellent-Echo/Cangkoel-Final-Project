import React, { useState } from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label } from 'reactstrap'
import hasilPengajuanActions from '../../redux/hasilPengajuan/create/createHasilPengajuanAction'
import { useDispatch } from 'react-redux'

const CreateHasilPengajuan = () => {
	const dispatch = useDispatch()

	const [status, setStatus] = useState('')
	const [keterangan, setKeterangan] = useState('')
	const [petaniID, setPetaniID] = useState('')
	const [formPengajuanID, setFormPengajuanID] = useState('')

	const handlePostHasilPengajuan = (e) => {
		e.preventDefault()
		dispatch(hasilPengajuanActions.createHasilPengajuanAction(status, keterangan, petaniID, formPengajuanID))
	}

	return (
		<Card>
			<Form style={{ margin: '20px' }} onSubmit={handlePostHasilPengajuan}>
				<CardTitle>Buat Hasil Pengajuan</CardTitle>
				<FormGroup>
					<Label>Status</Label>
					<Input type="select" name="select" id="status" onChange={(e) => setStatus(e.target.value)}>
						<option value="" disabled selected>
							Select your option
						</option>
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
					<Input type="select" name="select" id="keterangan" onChange={(e) => setKeterangan(e.target.value)}>
						<option value="" disabled selected>
							Select your option
						</option>
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
						<option value="Pendanaan untuk produksi sudah cair">Pendanaan untuk produksi sudah cair</option>
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
					<Label>Masukkan ID Petani</Label>
					<Input
						type="text"
						name="petani"
						id="petani"
						placeholder="masukkan id petani"
						onChange={(e) => setPetaniID(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Masukkan ID Formulir Pengajuan</Label>
					<Input
						type="number"
						name="hasilpengajuan"
						id="hasilpengajuan"
						placeholder="masukkan id formulir pengajuan"
						onChange={(e) => setFormPengajuanID(e.target.value)}
					/>
				</FormGroup>

				<Button>Buat Hasil Pengajuan</Button>
			</Form>
		</Card>
	)
}

export default CreateHasilPengajuan
