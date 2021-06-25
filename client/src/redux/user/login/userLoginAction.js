import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

import { USER_SET_EMAIL, USER_SET_PASSWORD, USER_SET_AUTH, SET_USER } from '../userActionTypes'

import userProfileAction from '../profile/userProfileAction'

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

const setUser = (user) => ({
	type: SET_USER,
	payload: {
		user: user
	}
})

const login = (email, password, history, location) => async (dispatch) => {
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

		console.log(postData)

		if (postData.status === 200) {
			Swal.fire({
				title: 'Login Success',
				icon: 'success',
				timer: 1500
			})
		}

		let role = postData.data.data.role
		let id = postData.data.data.id
		let token = postData.data.data.token
		localStorage.setItem('token', token)

		let url = ''

		if (role === 'petani') {
			url = `/users/petani/${id}`
		} else {
			url = `/users/investor/${id}`
		}

		const getDetailUser = await CangkoelAPI({
			method: 'GET',
			url: url,
			headers: {
				Authorization: token
			}
		})

		dispatch(userProfileAction.setProfileData(getDetailUser.data.data))
		localStorage.setItem('user', JSON.stringify(getDetailUser.data.data))

		dispatch(setAuth(true))

		let { from } = location.state || { from: { pathname: '/' } }

		history.replace(from)
	} catch (error) {
		console.log(error.response)
		let code = error.response.status

		if (code === 401) {
			Swal.fire({
				title: 'Email/Password Invalid',
				icon: 'warning',
				timer: 1500
			})
		}
	}
}

const userLoginAction = {
	setEmail,
	setPassword,
	setAuth,
	login
}

export default userLoginAction
