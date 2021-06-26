import React from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label } from 'reactstrap'

const CreateHasilPengajuan = () => {
	return (
		<Card>
			<Form style={{ margin: '20px' }}>
				<CardTitle>Buat Hasil Pengajuan</CardTitle>
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
	)
}

export default CreateHasilPengajuan
