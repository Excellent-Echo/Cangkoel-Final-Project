import CangkoelAPI from '../../api/CangkoelAPI'
import { PENGAJUAN_DATA } from './pengajuanActionTypes'

const setPengajuanData = (pengajuanData) => {
	return {
		type: PENGAJUAN_DATA,
		payload: {
			data: pengajuanData
		}
	}
}

const setLoading = () => {
	return {
		type: PENGAJUAN_DATA
	}
}

const getPengajuanData = () => async (dispatch) => {
	try {
		let token = localStorage.getItem('token')

		const getPengajuanData = await CangkoelAPI({
			method: 'GET',
			url: '/formulir-pengajuan',
			headers: {
				Authorization: token
			}
		})

		dispatch(setPengajuanData(getPengajuanData.data.data))
	} catch (error) {
		console.log(error.response)
	}
}

const pengajuanAction = {
	setPengajuanData,
	setLoading,
	getPengajuanData
}

export default pengajuanAction
