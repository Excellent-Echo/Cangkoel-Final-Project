import React from 'react'
import { Card, CardTitle, Input, Button, Form, FormGroup, Label } from 'reactstrap'

const CreateKategori = () => {
	return (
		<Card>
			<Form style={{ margin: '20px' }}>
				<CardTitle>Buat Kategori Pertanian</CardTitle>
				<FormGroup>
					<Label>Masukkan Nama Kategori</Label>
					<Input type="text" name="kategori" id="kategori" placeholder="masukkan kategori pertanian" />
				</FormGroup>
				<FormGroup>
					<Label>Masukkan Link gambar</Label>
					<Input type="text" name="link" id="link" placeholder="Link gambar" />
				</FormGroup>

				<Button>Buat Kategori Pertanian</Button>
			</Form>
		</Card>
	)
}

export default CreateKategori
