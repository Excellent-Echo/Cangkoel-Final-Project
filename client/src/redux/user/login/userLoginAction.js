import CangkoelAPI from '../../../api/CangkoelAPI'

import { USER_SET_EMAIL, USER_SET_PASSWORD } from '../userActionTypes'

const setEmail = (email) => {
	return {
		type: USER_LOGIN_SET_EMAIL,
		payload: {
			email: email
		}
	}
}

const setPassword = (password) => ({
	type: USER_LOGIN_SET_PASSWORD,
	payload: {
		password: password
	}
})

const login = (email, password) => async (dispatch) => {
	try {
		const loginData = {
			email: email,
			password: password
		}

		const postLoginData = await CangkoelAPI({
			method: 'POST',
			url: '/users/login'
		})
	} catch (error) {
		console.log(error.response.data)
	}
}
