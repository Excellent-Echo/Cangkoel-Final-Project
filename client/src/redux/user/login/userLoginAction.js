import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

import { USER_SET_EMAIL, USER_SET_PASSWORD, USER_SET_AUTH } from '../userActionTypes'

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

		console.log(getDetailUser.data.data)

		dispatch(setAuth(true))

		let { from } = location.state || { from: { pathname: '/' } }

		history.replace(from)

		// let role = postData.data.data.role
		// let token = postData.data.data.token
		// let code = postData.data.meta.code

		// if (postData.data.meta.code === 200) {
		// 	Swal.fire({
		// 		title: 'Success!',
		// 		text: "You've Logged In Successfully",
		// 		icon: 'success',
		// 		timer: 2000
		// 	})

		// 	localStorage.setItem('token', token)
		// 	localStorage.setItem('role', role)
		// 	localStorage.setItem('isAuth', true)
		// }
	} catch (error) {
		let code = error.response.data.meta.code

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
	setAuth,
	login
}

export default userLoginAction
