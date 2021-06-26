import React from 'react'
import { Row, Col } from 'reactstrap'
import { ReadPengajuan } from '../../components'

const Starter = () => {
	return (
		<div>
			<Row>
				<Col sm={12}>
					<ReadPengajuan />
				</Col>
			</Row>
		</div>
	)
}

export default Starter
