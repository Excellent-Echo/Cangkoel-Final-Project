import React, { useState } from 'react'
import { Input, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label } from 'reactstrap'

const EditPendanaan = (props) => {
	const { className } = props
	const [modal, setModal] = useState(false)
	const toggle = () => setModal(!modal)
	return (
		<div>
			<Button className="btn" color="primary" onClick={toggle}>
				Edit
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup>
							<Label for="exampleEmail">Field</Label>
							<Input type="text" name="text" id="name" placeholder="with a placeholder" />
						</FormGroup>
						<FormGroup>
							<Label for="examplePassword">Field</Label>
							<Input type="text" name="text" id="name" placeholder="with a placeholder" />
						</FormGroup>

						<FormGroup>
							<Label for="exampleText">Text Area</Label>
							<Input type="textarea" name="text" id="exampleText" />
						</FormGroup>
						<FormGroup>
							<Label for="exampleFile">File</Label>
							<Input type="file" name="file" id="exampleFile" />
						</FormGroup>

						<Button style={{ margin: '5px' }} onClick={toggle}>
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

export default EditPendanaan
