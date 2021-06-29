import CangkoelAPI from '../../../api/CangkoelAPI'

import {
	READ_SET_KATEGORI,
	READ_SET_KATEGORI_BY_ID,
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

const readKategoriByID = (kategoriPertanianByID) => {
	return {
		type: READ_SET_KATEGORI_BY_ID,
		payload: kategoriPertanianByID
	}
}

const readErrorKategori = (errorMessage) => {
	return {
		type: READ_ERROR_KATEGORI,
		payload: {
			errorMessage: errorMessage
		}
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

		const getKategoriData = await CangkoelAPI({
			method: 'GET',
			url: '/kategori-pertanian'
		})

		// console.log('kategori data action', getKategoriData.data.data)

		dispatch(readKategori(getKategoriData.data.data))
	} catch (error) {
		console.log(error.response.data)
		dispatch(readErrorKategori(error.response.data))
		dispatch(readStopLoading())
	}
}

const kategoriActions = {
	readKategoriActions
}

export default kategoriActions
