import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { useDispatch } from 'react-redux'
import kategoriActions from '../../redux/kategori/delete/deleteKategoriAction'

const DeleteKategori = (props) => {
	// console.log(props)
	const [konfirmasi, setKonfirmasi] = useState(false)
	const show = () => setKonfirmasi(!konfirmasi)

	const handleDelete = () => {
		show()
		dispatch(kategoriActions.deleteCategory(props.kategoriID))
	}

	const dispatch = useDispatch()
	return (
		<div>
			<Button className="btn" color="secondary" onClick={show}>
				Delete
			</Button>

			<Modal isOpen={konfirmasi} show={show}>
				<ModalHeader show={show}>Hapus Kategori</ModalHeader>
				<ModalBody>
					<h4>Apakah anda ingin mengapus kategori ini?</h4>
					<Button style={{ margin: '5px' }} onClick={handleDelete}>
						Delete
					</Button>
					<Button style={{ margin: '5px' }} onClick={show}>
						Cancel
					</Button>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default DeleteKategori
