import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap'
import KategoriAction from '../../redux/kategori/update/updateKategoriAction'

const EditKategori = (props) => {
	// console.log(props)
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)

	const [categoryName, setCategoryName] = useState(props.namaKategori)

	const dispatch = useDispatch()

	const handleInputChange = () => {
		toggle()
		dispatch(KategoriAction.updateKategoriAction(props.kategoriID, categoryName))
	}

	return (
		<div>
			<Button className="btn" color="primary" onClick={toggle}>
				Edit
			</Button>

			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Edit Kategori</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="exampleEmail">Nama Kategori</Label>
							<Input
								type="text"
								name="text"
								id="name"
								placeholder="with a placeholder"
								value={categoryName}
								onChange={(e) => setCategoryName(e.target.value)}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="exampleFile">Foto Kategori</Label>
							<Input type="file" name="file" id="exampleFile" />
						</FormGroup>

						<Button style={{ margin: '5px' }} onClick={handleInputChange}>
							Submit
						</Button>
						<Button style={{ margin: '5px' }} onClick={toggle}>
							Cancel
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default EditKategori
