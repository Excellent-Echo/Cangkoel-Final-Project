import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

import { USER_SET_EMAIL, USER_SET_PASSWORD, USER_SET_AUTH } from '../userActionTypes'

import userProfileAction from '../profile/userProfileAction'
import pengajuanAction from '../../pengajuan/pengajuanAction'

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

// const setUser = (user) => ({
// 	type: SET_USER,
// 	payload: {
// 		user: user
// 	}
// })

const login = (email, password, history) => async (dispatch) => {
	try {
		const loginData = {
			email: email,
			password: password
		}

		const postData = await CangkoelAPI({
			method: 'POST',
			url: '/admin/login',
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
			url = `/users/admin/${id}`
		}

		const getDetailUser = await CangkoelAPI({
			method: 'GET',
			url: url,
			headers: {
				Authorization: token
			}
		})

		console.log(getDetailUser)

		const getPengajuanData = await CangkoelAPI({
			method: 'GET',
			url: '/formulir-pengajuan',
			headers: {
				Authorization: token
			}
		})

		dispatch(userProfileAction.setProfileData(getDetailUser.data.data))
		dispatch(pengajuanAction.setPengajuanData(getPengajuanData.data.data))
		localStorage.setItem('user', JSON.stringify(getDetailUser.data.data))

		history.push('/')
	} catch (error) {
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
