import React, { useEffect, useState } from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import pendanaanActions from '../../redux/pendanaan/create/createPendanaanAction'

const CreatePendanaan = () => {
	const pendanaanData = useSelector((state) => state.createPendanaan)
	const dispatch = useDispatch()

	useEffect(() => {
		console.log('pendanaanData', pendanaanData)
	}, [])

	useEffect(() => {
		dispatch(pendanaanActions.resetForm())
		// eslint-disable-next-line
	}, [])

	const [profil, SetProfil] = useState('')
	const [namaInvestor, setNamaInvestor] = useState('')
	const [judulPenadanaan, setJudulPenadanaan] = useState('')
	const [nominalPendanaan, setNominalPendanaan] = useState('')
	const [perusahaanPengirim, setPerusahaanPengirim] = useState('')
	const [bagiHasilInvestor, setBagiHasilInvestor] = useState('')
	const [bagiHasilPetani, setBagiHasilPetani] = useState('')
	const [kebutuhanKomoditas, setKebutuhanKomoditas] = useState('')
	const [jangkaWaktu, setJangkaWaktu] = useState('')
	const [keuntunganBersih, setKeuntunganBersih] = useState('')
	const [deskripsi, setDiskripsi] = useState('')
	const [biayaOperasional, setBiayaOperasional] = useState('')
	const [biayaEkspor, setBiayaEkspor] = useState('')
	const [perhitunganPenghasilan, setPerhitunganPenghasilan] = useState('')
	const [perhitunganKeuntungan, setPerhitunganKeuntungan] = useState('')
	const [kategoriID, setKategoriID] = useState('')

	const handlePendanaanSubmit = (e) => {
		e.preventDefault()
		dispatch(
			pendanaanActions.createPendanaanActions(
				profil,
				namaInvestor,
				judulPenadanaan,
				nominalPendanaan,
				perusahaanPengirim,
				bagiHasilInvestor,
				bagiHasilPetani,
				kebutuhanKomoditas,
				jangkaWaktu,
				keuntunganBersih,
				deskripsi,
				biayaOperasional,
				biayaEkspor,
				perhitunganPenghasilan,
				perhitunganKeuntungan,
				kategoriID
			)
		)
	}

	return (
		<Card>
			{/* <p>{JSON.stringify(pendanaanData)}</p> */}
			{/* Error Message */}
			{/* {pendanaanData.errorMessage && (
				<ul>
					{pendanaanData.errorMessage.map((error, index) => {
						return <li key={index}>{error}</li>
					})}
				</ul>
			)} */}
			{/* Success Message */}
			{/* {pendanaanData.successMessage && <p>{pendanaanData.successMessage}</p>} */}
			<Form style={{ margin: '20px' }} onSubmit={handlePendanaanSubmit}>
				<CardTitle>Buat Pendanaan Baru</CardTitle>
				<FormGroup>
					<Label>Upload Foto Profil</Label>
					<Input
						type="text"
						placeholder="Upload Foto Profil"
						required
						onChange={(e) => SetProfil(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Masukkan Nama Investor</Label>
					<Input
						type="text"
						name="investor"
						id="investor"
						placeholder="masukkan nama investor"
						required
						onChange={(e) => setNamaInvestor(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Judul Pendanaan</Label>
					<Input
						type="text"
						name="judulpendanaan"
						id="judulpendanaan"
						placeholder="masukkan judul pendanaan"
						required
						onChange={(e) => setJudulPenadanaan(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Nominal Pendanaan</Label>
					<Input
						type="number"
						name="nominalpendanaan"
						id="nominalpendanaan"
						placeholder="masukkan nominal pendanaan"
						required
						onChange={(e) => setNominalPendanaan(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Perusahaan Pengirim</Label>
					<Input
						type="text"
						name="perusahaanpengirim"
						id="perusahaanpengirim"
						placeholder="masukkan perushaan pengirim"
						required
						onChange={(e) => setPerusahaanPengirim(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Bagi Hasil Investor</Label>
					<Input
						type="number"
						name="bagihasilinvestor"
						id="bagihasilinvestor"
						placeholder="masukkan bagi hasil investor"
						required
						onChange={(e) => setBagiHasilInvestor(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Bagi Hasil Petani</Label>
					<Input
						type="number"
						name="bagihasilpetani"
						id="bagihasilpetani"
						placeholder="masukkan bagi hasil petani"
						required
						onChange={(e) => setBagiHasilPetani(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Kebutuhan Komoditas</Label>
					<Input
						type="text"
						name="kebutuhankomoditas"
						id="kebutuhankomoditas"
						placeholder="masukkan kebutuhan komoditas"
						required
						onChange={(e) => setKebutuhanKomoditas(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Jangka Waktu</Label>
					<Input
						type="text"
						name="jangkawaktu"
						id="jangkawaktu"
						placeholder="masukkan jangka waktu"
						required
						onChange={(e) => setJangkaWaktu(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Keuntungan Bersih</Label>
					<Input
						type="number"
						name="keuntunganbersih"
						id="keuntunganbersih"
						placeholder="masukkan keuntungan bersih"
						required
						onChange={(e) => setKeuntunganBersih(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Deskripsi</Label>
					<Input
						type="textarea"
						name="deskripsi"
						id="deskripsi"
						placeholder="masukkan deskripsi"
						required
						onChange={(e) => setDiskripsi(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Biaya Operasional</Label>
					<Input
						type="text"
						name="biayaoperasional"
						id="biayaoperasional"
						placeholder="masukkan biaya operasional"
						required
						onChange={(e) => setBiayaOperasional(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Biaya Ekspor</Label>
					<Input
						type="text"
						name="biayaekspor"
						id="biayaekspor"
						placeholder="masukkan biaya ekspor"
						required
						onChange={(e) => setBiayaEkspor(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Perhitungan Penghasilan</Label>
					<Input
						type="text"
						name="perhitunganpenghasilan"
						id="perhitunganpenghasilan"
						placeholder="masukkan perhitungan penghasilan"
						required
						onChange={(e) => setPerhitunganPenghasilan(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Perhitungan Keuntungan</Label>
					<Input
						type="text"
						name="perhitungankeuntugan"
						id="perhitungankeuntugan"
						placeholder="masukkan perhitungan Keuntungan"
						required
						onChange={(e) => setPerhitunganKeuntungan(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Kategori</Label>
					<Input
						type="select"
						name="kategori"
						id="kategori"
						required
						onChange={(e) => setKategoriID(e.target.value)}
					>
						<option value="1">Review</option>
						<option value="2">Survey</option>
						<option value="3">Approve</option>
					</Input>
				</FormGroup>

				<Button>Buat Pendanaan</Button>
			</Form>
		</Card>
	)
}

export default CreatePendanaan
