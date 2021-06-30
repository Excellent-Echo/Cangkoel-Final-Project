import CangkoelAPI from '../../../api/CangkoelAPI'
import { USER_PROFILE_DATA, SET_LOADING } from '../userActionTypes'
import Swal from 'sweetalert2'

const setProfileData = (userProfile) => {
	return {
		type: USER_PROFILE_DATA,
		payload: {
			user: userProfile
		}
	}
}

const setLoading = () => {
	return {
		type: SET_LOADING
	}
}

const fetchProfile = () => async (dispatch) => {
	try {
		let token = localStorage.getItem('token')
		let user = JSON.parse(localStorage.getItem('user'))

		const fetchProfileData = await CangkoelAPI({
			method: 'GET',
			url: `/users/petani/${user.id}`,
			headers: {
				Authorization: token
			}
		})

		dispatch(setProfileData(fetchProfileData.data.data))
	} catch (error) {
		console.log(error.response)
	}
}

const updateUserProfile = (id, name, email, password) => async (dispatch) => {
	try {
		const petaniData = {
			full_name: name,
			email: email,
			password: password
		}

		const accessToken = localStorage.getItem('token')

		const updateKategoriData = await CangkoelAPI({
			method: 'PUT',
			url: `/users/petani/${id}`,
			data: petaniData,
			headers: {
				Authorization: accessToken
			}
		})

		if (updateKategoriData.status === 200) {
			Swal.fire({
				title: 'Data berhasil di update',
				icon: 'success',
				timer: 1500,
				timerProgressBar: true
			}).then(() => {
				window.location.reload()
			})
		}
	} catch (error) {
		console.log(error.response.data)
	}
}

const userProfileAction = {
	setProfileData,
	setLoading,
	updateUserProfile,
	fetchProfile
}

export default userProfileAction
