import CangkoelAPI from '../../../api/CangkoelAPI'
import { history } from 'react-router-dom'
import Swal from 'sweetalert2'

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

		console.log(role, token)

		console.log(history)

		if (postData.data.meta.code === 200) {
			Swal.fire({
				title: 'Success!',
				text: "You've Logged In Successfully",
				icon: 'success',
				timer: 2000
			})

			// if (role === 'petani') {
			// history.push('/profil-petani')
			// } else {
			// 	history.push('/profil-investor')
			// }

			localStorage.setItem('token', token)
			localStorage.setItem('role', role)
			localStorage.setItem('isAuth', true)
		}

		history.push('/form-pendanaan')
	} catch (error) {
		let code = error.response.data.meta.code

		console.log(error.response)

		if (code === 401) {
			Swal.fire({
				title: 'Email/Password Invalid',
				icon: 'warning',
				timer: 2000
			})
		}
	}
}

const userLoginAction = {
	setEmail,
	setPassword,
	login
}

export default userLoginAction
