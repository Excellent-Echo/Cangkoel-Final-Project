import React, { useState } from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label } from 'reactstrap'
import kategoriActions from '../../redux/kategori/create/createKategoriAction'
import { useDispatch } from 'react-redux'

const CreateKategori = () => {
	const [namaKategori, setNamaKategori] = useState('')
	const [fotoKategori, setFotoKategori] = useState('')
	const dispatch = useDispatch()

	// const token = localStorage.getItem('token')

	const handlePostKategori = (e) => {
		e.preventDefault()
		// console.log(namaKategori)
		// console.log(fotoKategori)
		dispatch(kategoriActions.createKategoriAction(namaKategori, fotoKategori))
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
					<Label>Masukkan Link gambar</Label>
					<Input
						type="text"
						name="link"
						id="link"
						placeholder="Link gambar"
						required
						onChange={(e) => setFotoKategori(e.target.value)}
					/>
				</FormGroup>

				<Button>Buat Kategori Pertanian</Button>
			</Form>
		</Card>
	)
}

export default CreateKategori
