import React, { useEffect, useState } from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label, Row, Col } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import pendanaanActions from '../../redux/pendanaan/create/createPendanaanAction'
import kategoriActions from '../../redux/kategori/read/readKategoriAction'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CreatePendanaan = () => {
	const pendanaanData = useSelector((state) => state.createPendanaan)
	const kategoriData = useSelector((state) => state.readKategori.kategoriPertanian)
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	console.log('pendanaanData', pendanaanData)
	// 	// eslint-disable-next-line
	// }, [])

	// useEffect(() => {
	// 	console.log('kategoridata', kategoriData)
	// 	// eslint-disable-next-line
	// }, [])

	useEffect(() => {
		dispatch(pendanaanActions.resetForm())
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		dispatch(kategoriActions.readKategoriActions())
		// eslint-disable-next-line
	}, [])

	const [fileProfil, setFileProfil] = useState('')
	const [namaInvestor, setNamaInvestor] = useState('')
	const [judulPenadanaan, setJudulPenadanaan] = useState('')
	const [nominalPendanaan, setNominalPendanaan] = useState('')
	const [perusahaanPengirim, setPerusahaanPengirim] = useState('')

	// handle maksimal 50%
	const [bagiHasilInvestor, setBagiHasilInvestor] = useState('')

	// handle maksimal 50%
	const [bagiHasilPetani, setBagiHasilPetani] = useState('')

	// kebutuhan komoditas
	const [kebutuhanKomoditas, setKebutuhanKomoditas] = useState('')
	const [satuanBerat, setSatuanBerat] = useState('')
	const hasilKebutuhanKomoditas = kebutuhanKomoditas + ' ' + satuanBerat

	// react date picker
	const [dateRange, setDateRange] = useState('')
	const [startDate, endDate] = dateRange
	const jangkaWaktu = 'Dari tanggal: ' + startDate + ' sampai tanggal ' + endDate
	console.log(jangkaWaktu)

	const [keuntunganBersih, setKeuntunganBersih] = useState('')
	const [deskripsi, setDiskripsi] = useState('')

	// biaya operasional
	const [biayaBahanBaku, setBiayaBahanBaku] = useState('')
	const [biayaSewaMesin, setBiayaSewaMesin] = useState('')
	const biayaOperasional =
		'Total biaya bahan baku sebesar ' +
		biayaBahanBaku +
		' dan total biaya biaya sewa mesin sebesar ' +
		biayaSewaMesin

	// biaya ekspor
	const [biayaOngkosKirim, setBiayaOngkosKirim] = useState('')
	const [biayaPajak, setBiayaPajak] = useState('')
	const [biayaKontainer, setBiayaKontainer] = useState('')
	const [biayaDokumen, setBiayaDokumen] = useState('')
	const biayaEkspor =
		'Biaya Ongkos kirim: ' +
		biayaOngkosKirim +
		', Biaya Pajak: ' +
		biayaPajak +
		', Biaya Kontainer: ' +
		biayaKontainer +
		', Biaya Dokumen: ' +
		biayaDokumen

	// perhitungan penghasilan
	const [perSatuanBerat, setPerSatuanBerat] = useState('')
	const [hargaSatuanBerat, setHargaSatuanBerat] = useState('')
	const perhitunganPenghasilan = 'Satuan Berat ' + perSatuanBerat + ' x ' + hargaSatuanBerat

	// perhitungan keuntungan
	const [totalPendapatan, setTotalPendapatan] = useState('')
	const [modalAwal, setModalAwal] = useState('')
	const dikurangi = parseInt(totalPendapatan) - parseInt(modalAwal)
	const perhitunganKeuntungan = 'Total pendapatan: ' + totalPendapatan + ' - ' + modalAwal + ' = ' + dikurangi

	// mapping
	const [kategoriID, setKategoriID] = useState('')

	const handlePendanaanSubmit = (e) => {
		e.preventDefault()
		dispatch(
			pendanaanActions.createPendanaanActions(
				pendanaanData.urlFotoProfil,
				namaInvestor,
				judulPenadanaan,
				nominalPendanaan,
				perusahaanPengirim,
				bagiHasilInvestor,
				bagiHasilPetani,
				hasilKebutuhanKomoditas,
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

	const uploadImage = () => {
		dispatch(pendanaanActions.uploadFotoProfil(fileProfil))
	}

	return (
		<Card>
			<Form style={{ margin: '20px' }} onSubmit={handlePendanaanSubmit}>
				<CardTitle>Buat Pendanaan Baru</CardTitle>
				<FormGroup>
					<Label for="exampleFile">Upload Foto Profil</Label>
					<Input
						type="file"
						name="file"
						id="exampleFile"
						onChange={(e) => setFileProfil(e.target.files[0])}
					/>
					<button onClick={uploadImage}>Upload</button>
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
						placeholder="masukkan bagi hasil investor max 50%"
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
						placeholder="masukkan bagi hasil petani max 50%"
						required
						onChange={(e) => setBagiHasilPetani(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label>Kebutuhan Komoditas :</Label>
								<Input
									type="number"
									name="kebutuhankomoditas"
									id="kebutuhankomoditas"
									placeholder="Masukkan kebutuhan komoditas"
									required
									onChange={(e) => setKebutuhanKomoditas(e.target.value)}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label>Satuan Berat :</Label>
								<Input
									type="select"
									name="select"
									id="satuanberat"
									required
									onChange={(e) => setSatuanBerat(e.target.value)}
								>
									<option value="Ton">Ton</option>
									<option value="Kilogram">Kilogram</option>
									<option value="Gram">Gram</option>
									<option value="Pound">Pound</option>
									<option value="Lbs">Lbs</option>
								</Input>
							</FormGroup>
						</Col>
					</Row>
				</FormGroup>
				<FormGroup>
					<Label>Jangka Waktu</Label>
					<DatePicker
						selectsRange={true}
						startDate={startDate}
						endDate={endDate}
						onChange={(update) => {
							setDateRange(update)
						}}
						withPortal
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
				<hr />
				<FormGroup>
					<h5>Biaya Operasional</h5>
					<br />
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label>Total Biaya Bahan Baku:</Label>
								<Input
									type="number"
									name="bahanbaku"
									id="bahanbaku"
									placeholder="Masukkan biaya bahan baku"
									required
									onChange={(e) => setBiayaBahanBaku(e.target.value)}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label>Total Biaya Bahan Sewa Mesin:</Label>
								<Input
									type="number"
									name="sewamesin"
									id="sewamesin"
									placeholder="masukkan biaya sewa mesin"
									required
									onChange={(e) => setBiayaSewaMesin(e.target.value)}
								/>
							</FormGroup>
						</Col>
					</Row>
				</FormGroup>
				<hr />
				<FormGroup>
					<h5>Biaya Ekspor</h5>
					<br />
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label>Biaya Ongkos Kirim:</Label>
								<Input
									type="number"
									name="ongkoskirim"
									id="ongkoskirim"
									placeholder="Masukkan biaya ongkos kirim"
									required
									onChange={(e) => setBiayaOngkosKirim(e.target.value)}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label>Biaya Pajak:</Label>
								<Input
									type="number"
									name="pajak"
									id="pajak"
									placeholder="masukkan biaya pajak"
									required
									onChange={(e) => setBiayaPajak(e.target.value)}
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label>Biaya Pengangkatan Kontainer:</Label>
								<Input
									type="number"
									name="kontainer"
									id="kontainer"
									placeholder="Masukkan biaya kontainer"
									required
									onChange={(e) => setBiayaKontainer(e.target.value)}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label>Biaya Pengurusan Dokumen:</Label>
								<Input
									type="number"
									name="dokumen"
									id="dokumen"
									placeholder="masukkan biaya pengurusan dokumen"
									required
									onChange={(e) => setBiayaDokumen(e.target.value)}
								/>
							</FormGroup>
						</Col>
					</Row>
				</FormGroup>
				<hr />
				<FormGroup>
					<h5>Perhitungan Penghasilan</h5>
					<br />
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label>Satuan Berat:</Label>
								<Input
									type="select"
									name="select"
									id="satuanberat"
									required
									onChange={(e) => setPerSatuanBerat(e.target.value)}
								>
									<option value="Ton">1 Ton</option>
									<option value="Kilogram">1 Kilogram</option>
									<option value="Gram">1 Gram</option>
									<option value="Pound">1 Pound</option>
									<option value="Lbs">1 Lbs</option>
								</Input>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label>Harga Per Satuan Berat: </Label>
								<Input
									type="number"
									name="hargapersatuan"
									id="hargapersatuan"
									placeholder="masukkan total harga per satuan"
									required
									onChange={(e) => setHargaSatuanBerat(e.target.value)}
								/>
							</FormGroup>
						</Col>
					</Row>
				</FormGroup>
				<hr />
				<FormGroup>
					<h5>Perhitungan Keuntungan</h5>
					<br />
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label>Total Pendapatan:</Label>
								<Input
									type="number"
									name="pendapatan"
									id="pendapatan"
									placeholder="Masukkan total pendapatan"
									onChange={(e) => setTotalPendapatan(e.target.value)}
									required
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label>Total Modal Awal:</Label>
								<Input
									type="number"
									name="modal"
									id="modal"
									placeholder="masukkan total modal awal"
									onChange={(e) => setModalAwal(e.target.value)}
									required
								/>
							</FormGroup>
						</Col>
					</Row>
					<h5>
						Profit :{' '}
						{new Intl.NumberFormat('en-ID', {
							style: 'currency',
							currency: 'IDR'
						}).format(dikurangi)}
					</h5>
				</FormGroup>
				<hr />
				<FormGroup>
					<Label>Kategori</Label>
					<Input
						type="select"
						name="kategori"
						id="kategori"
						required
						onChange={(e) => setKategoriID(e.target.value)}
					>
						{kategoriData &&
							kategoriData.map((value, index) => {
								return (
									<option key={index} value={value.id}>
										{value.nama_kategori}
									</option>
								)
							})}
					</Input>
				</FormGroup>

				<Button>Buat Pendanaan</Button>
			</Form>
		</Card>
	)
}

export default CreatePendanaan
