import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Input, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import petaniActions from '../../redux/petani/read/readPetaniAction'

const ReadPetani = () => {
	const dispatch = useDispatch()
	const readPetaniData = useSelector((state) => state.readPetani.petani)

	// useEffect(() => {
	// 	console.log('selector', readPetaniData)
	// },[])

	useEffect(() => {
		dispatch(petaniActions.readPetaniActions())
		// eslint-disable-next-line
	}, [])

	return (
		<Card>
			<CardBody>
				<div className="d-flex align-items-center">
					<div>
						<CardTitle>Daftar Petani</CardTitle>
						<CardSubtitle>Overview of Latest Month</CardSubtitle>
					</div>
					<div className="ml-auto d-flex no-block align-items-center">
						<div className="dl">
							<Input type="select" className="custom-select">
								<option value="0">Monthly</option>
								<option value="1">Daily</option>
								<option value="2">Weekly</option>
								<option value="3">Yearly</option>
							</Input>
						</div>
					</div>
				</div>
				<Table className="no-wrap v-middle" responsive>
					<thead>
						<tr className="border-0">
							<th className="border-0">Nama Lengkap</th>
							<th className="border-0">Email</th>
							<th className="border-0">Role</th>
						</tr>
					</thead>
					{readPetaniData &&
						readPetaniData.map((value, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>
											<div className="d-flex no-block align-items-center">
												<div className="">
													<h5 className="mb-0 font-16 font-medium">{value.full_name}</h5>
												</div>
											</div>
										</td>
										<td>{value.email}</td>
										<td>{value.role}</td>
									</tr>
								</tbody>
							)
						})}
				</Table>
			</CardBody>
		</Card>
	)
}

export default ReadPetani
