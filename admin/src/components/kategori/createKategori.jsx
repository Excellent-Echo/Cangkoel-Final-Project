import React, { useState } from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label } from 'reactstrap'
import kategoriActions from '../../redux/kategori/create/createKategoriAction'
import { useDispatch, useSelector } from 'react-redux'

const CreateKategori = () => {
	const kategoriData = useSelector((state) => state.createKategori)

	const [namaKategori, setNamaKategori] = useState('')
	// const [fotoKategori, setFotoKategori] = useState('')
	const [fileFotoKategori, setFileFotoKategori] = useState('')
	const dispatch = useDispatch()

	// const token = localStorage.getItem('token')

	const handlePostKategori = (e) => {
		e.preventDefault()
		// console.log(namaKategori)
		// console.log(fotoKategori)
		dispatch(kategoriActions.createKategoriAction(namaKategori, kategoriData.urlFotoKategori))
	}

	const uploadImage = () => {
		dispatch(kategoriActions.uploadFotoKategori(fileFotoKategori))
	}

	return (
		<Card>
			<Form style={{ margin: '20px' }} onSubmit={handlePostKategori}>
				<CardTitle>Buat Kategori Pertanian</CardTitle>
				<FormGroup>
					<Label>Masukkan Nama Kategori</Label>
					<Input
						type="text"
						name="kategori"
						id="kategori"
						placeholder="masukkan kategori pertanian"
						required
						onChange={(e) => setNamaKategori(e.target.value)}
					/>
				</FormGroup>
				<FormGroup>
					<Label>Upload Foto Kategori</Label>
					<Input
						type="file"
						name="file"
						id="exampleFile"
						onChange={(e) => setFileFotoKategori(e.target.files[0])}
					/>
					<button onClick={uploadImage}>Upload</button>
				</FormGroup>

				<Button>Buat Kategori Pertanian</Button>
			</Form>
		</Card>
	)
}

export default CreateKategori
