import React, { useState } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'
import { useDispatch } from 'react-redux'
import hasilPengajuanActions from '../../redux/hasilPengajuan/delete/deleteHasilPengajuanAction'

const DeleteHasilPengajuan = (props) => {
	// const { className } = props
	// console.log(props)
	const [konfirmasi, setKonfirmasi] = useState(false)
	const show = () => setKonfirmasi(!konfirmasi)

	const handleDelete = () => {
		show()
		dispatch(hasilPengajuanActions.deleteHasilPengajuan(props.hasilPengajuanID))
	}
	const dispatch = useDispatch()
	return (
		<div>
			<Button className="btn" color="secondary" onClick={show}>
				Delete
			</Button>

			<Modal isOpen={konfirmasi} show={show}>
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

export default DeleteHasilPengajuan
