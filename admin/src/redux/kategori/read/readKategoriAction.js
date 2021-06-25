import CangkoelAPI from '../../../api/CangkoelAPI'

import {
	READ_SET_KATEGORI,
	READ_ERROR_KATEGORI,
	READ_START_LOADING_KATEGORI,
	READ_STOP_LOADING_KATEGORI
} from '../kategoryType'

const readKategori = (kategoriPertanian) => {
	return {
		type: READ_SET_KATEGORI,
		payload: kategoriPertanian
	}
}

const readErrorKategori = (errorMessage) => {
	return {
		type: READ_ERROR_KATEGORI,
		payload: errorMessage
	}
}

const readStartLoading = () => {
	return {
		type: READ_START_LOADING_KATEGORI
	}
}

const readStopLoading = () => {
	return {
		type: READ_STOP_LOADING_KATEGORI
	}
}

const readKategoriActions = () => async (dispatch) => {
	try {
		dispatch(readStartLoading())
		dispatch(readErrorKategori(''))

		const response = await CangkoelAPI({
			method: 'GET',
			url: '/kategori-pertanian'
		})

		console.log('actions', response.data.data)

		dispatch(readKategori(response.data.data))
	} catch (error) {
		console.log(error)
		dispatch(readErrorKategori(error.response))
		dispatch(readStopLoading())
	}
}

const kategoriActions = {
	readKategoriActions
}

export default kategoriActions
