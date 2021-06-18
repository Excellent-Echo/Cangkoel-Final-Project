import CangkoelAPI from '../../../api/CangkoelAPI'

import { USER_SET_EMAIL, USER_SET_PASSWORD } from '../userActionTypes'

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

const login = (email, password, history) => async (dispatch) => {
	try {
		const loginData = {
			email: email,
			password: password
		}

		const postLoginData = await CangkoelAPI({
			method: 'POST',
			url: '/users/login',
			data: loginData
		})

		if (postLoginData.data.data.role === 'petani') {
			history.push('/profil-petani')
		} else {
			history.push('/profil-investor')
		}

		console.log(postLoginData.data.data)
	} catch (error) {
		console.log(error.response.data)
	}
}

const userLoginAction = {
	setEmail,
	setPassword,
	login
}

export default userLoginAction
