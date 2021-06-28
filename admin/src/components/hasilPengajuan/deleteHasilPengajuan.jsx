import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'

const DeleteHasilPengajuan = (props) => {
	const { className } = props
	const [konfirmasi, setKonfirmasi] = useState(false)
	const show = () => setKonfirmasi(!konfirmasi)
	return (
		<div>
			<Button className="btn" color="secondary" onClick={show}>
				Delete
			</Button>

			<Modal isOpen={konfirmasi} show={show} className={className}>
				<ModalHeader show={show}>Modal title</ModalHeader>
				<ModalBody>
					<h4>Apakah anda ingin mengapus data ini?</h4>
					<Button style={{ margin: '5px' }} onClick={show}>
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

export default DeleteHasilPengajuan
