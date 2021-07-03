import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

import {
	USER_SET_ROLE,
	USER_REGISTER_RESET_FORM,
	USER_SET_EMAIL,
	USER_SET_PASSWORD,
	USER_SET_FULLNAME
} from '../userActionTypes'

const resetForm = () => {
	return {
		type: USER_REGISTER_RESET_FORM
	}
}

const setEmail = (email) => {
	return {
		type: USER_SET_EMAIL,
		payload: {
			email: email
		}
	}
}

const setPassword = (password) => {
	return {
		type: USER_SET_PASSWORD,
		payload: {
			password: password
		}
	}
}

const setFullName = (fullName) => {
	return {
		type: USER_SET_FULLNAME,
		payload: {
			fullName: fullName
		}
	}
}

const setRole = (role) => {
	return {
		type: USER_SET_ROLE,
		payload: {
			role: role
		}
	}
}

const register = (role, email, password, fullName, history) => async (dispatch) => {
	try {
		let url = ''

		if (role === 'petani') {
			url = '/users/petani/register'
		} else {
			url = '/users/investor/register'
		}

		const registerData = {
			email: email,
			password: password,
			full_name: fullName
		}

		// eslint-disable-next-line
		const postRegisterData = await CangkoelAPI({
			method: 'POST',
			url: url,
			data: registerData
		})

		if (postRegisterData.status === 201) {
			Swal.fire({
				title: 'Register Success',
				icon: 'success',
				timer: 1500
			})

			history.push('/login')
		}
	} catch (error) {
		console.log(error.response.data)
	}
}

const userRegisterAction = {
	resetForm,
	setRole,
	setEmail,
	setPassword,
	setFullName,
	register
}

export default userRegisterAction
