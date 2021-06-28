import CangkoelAPI from '../../../api/CangkoelAPI'

import {
	READ_SET_HASIL_PENGAJUAN,
	READ_ERROR_HASIL_PENGAJUAN,
	READ_START_LOADING_HASIL_PENGAJUAN,
	READ_STOP_LOADING_HASIL_PENGAJUAN
} from '../hasilPengajuanType'

const readHasilPengajuan = (hasilPengajuan) => {
	return {
		type: READ_SET_HASIL_PENGAJUAN,
		payload: hasilPengajuan
	}
}

const readErrorHasilPengajuan = (errorMessage) => {
	return {
		type: READ_ERROR_HASIL_PENGAJUAN,
		payload: {
			errorMessage: errorMessage
		}
	}
}

const readStartLoading = () => {
	return {
		type: READ_START_LOADING_HASIL_PENGAJUAN
	}
}

const readStopLoading = () => {
	return {
		type: READ_STOP_LOADING_HASIL_PENGAJUAN
	}
}

const readHasilPengajuanActions = () => async (dispatch) => {
	try {
		dispatch(readStartLoading())
		dispatch(readErrorHasilPengajuan(''))

		const accessToken = localStorage.getItem('token')
		console.log(accessToken)

		const getHasilPengajuanData = await CangkoelAPI({
			method: 'GET',
			url: '/hasil-pengajuan',
			headers: {
				Authorization: accessToken
			}
		})

		console.log('hasil pengajuan data action', getHasilPengajuanData.data.data)

		dispatch(readHasilPengajuan(getHasilPengajuanData.data.data))
	} catch (error) {
		console.log(error.response.data)
		dispatch(readErrorHasilPengajuan(error.response.data))
		dispatch(readStopLoading())
	}
}

const hasilPengajuanActions = {
	readHasilPengajuanActions
}

export default hasilPengajuanActions
