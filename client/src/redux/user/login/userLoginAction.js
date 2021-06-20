import CangkoelAPI from '../../../api/CangkoelAPI'
import { Redirect } from 'react-router-dom'

import { USER_SET_EMAIL, USER_SET_PASSWORD, USER_SET_AUTH } from '../userActionTypes'

const setEmail = (email) => {
	return {
		type: USER_SET_EMAIL,
		payload: {
			email: email
		}
	}
}

const setPassword = (password) => ({
	type: USER_SET_PASSWORD,
	payload: {
		password: password
	}
})

const setAuth = (isAuth) => ({
	type: USER_SET_AUTH,
	payload: {
		isAuth: isAuth
	}
})

const login = (email, password, history) => async (dispatch) => {
	try {
		const loginData = {
			email: email,
			password: password
		}

		const postData = await CangkoelAPI({
			method: 'POST',
			url: '/users/login',
			data: loginData
		})

		const role = postData.data.data.role
		const token = postData.data.data.token

		role === '' ? console.log('error') : localStorage.setItem('role', role)
		token === '' ? console.log('error') : localStorage.setItem('token', token)
		localStorage.setItem('isAuth', true)
	} catch (error) {
		console.log(error)
	}
}

const logout = () => {
	localStorage.setItem('isAuth', false)
}

const userLoginAction = {
	setEmail,
	setPassword,
	login,
	logout
}

export default userLoginAction
