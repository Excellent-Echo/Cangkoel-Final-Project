import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import pendanaanActions from '../../redux/pendanaan/delete/deletePendanaanAction'
import { useDispatch } from 'react-redux'

const DeletePendanaan = (props) => {
	// const { className } = props
	const [konfirmasi, setKonfirmasi] = useState(false)
	const show = () => setKonfirmasi(!konfirmasi)

	const handleDelete = () => {
		show()
		dispatch(pendanaanActions.deletePendanaan(props.pendanaanID))
	}
	const dispatch = useDispatch()
	return (
		<div>
			<Button className="btn" color="secondary" onClick={show}>
				Delete
			</Button>

			<Modal isOpen={konfirmasi} show={show}>
				<ModalHeader show={show}>Modal title</ModalHeader>
				<ModalBody>
					<h4>Apakah anda ingin mengapus data ini?</h4>
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

export default DeletePendanaan
