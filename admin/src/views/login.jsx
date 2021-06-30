import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Logo from '../assets/images/logo.png'
import userLoginAction from '../redux/user/login/userLoginAction'

const Login = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// useEffect(() => {
	// 	let token = localStorage.getItem('token')
	// 	if (token && token !== 'undefined') {
	// 		history.push('/')
	// 	}
	// }, [])

	const loginHandler = (e) => {
		e.preventDefault()

		dispatch(userLoginAction.login(email, password, history))
	}

	return (
		<div className="section-logina">
			<div className="opacity-login">
				<img style={{ width: '200px' }} src={Logo} alt="logo cangkoel" />
				<h2 style={{ marginTop: '20px', marginBottom: '20px' }}>Login Admin Cangkoel</h2>
				<Form onSubmit={loginHandler}>
					<FormGroup>
						<Label for="exampleEmail">Email</Label>
						<Input
							type="email"
							name="email"
							id="exampleEmail"
							placeholder="Your email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="examplePassword">Password</Label>
						<Input
							type="password"
							name="password"
							id="examplePassword"
							placeholder="Your password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormGroup>

					<Button>Login</Button>
				</Form>
			</div>
		</div>
	)
}

export default Login
