import CangkoelAPI from '../../../api/CangkoelAPI'

import {
	READ_SET_PENDANAAN,
	READ_ERROR_PENDANAAN,
	READ_START_LOADING_PENDANAAN,
	READ_STOP_LOADING_PENDANAAN
} from '../pendanaanType'

const readPendanaan = (pendanaan) => {
	return {
		type: READ_SET_PENDANAAN,
		payload: pendanaan
	}
}

const readErrorPendanaan = (errorMessage) => {
	return {
		type: READ_ERROR_PENDANAAN,
		payload: {
			errorMessage: errorMessage
		}
	}
}

const readStartLoading = () => {
	return {
		type: READ_START_LOADING_PENDANAAN
	}
}

const readStopLoading = () => {
	return {
		type: READ_STOP_LOADING_PENDANAAN
	}
}

const readPendanaanActions = () => async (dispatch) => {
	try {
		dispatch(readStartLoading())
		dispatch(readErrorPendanaan(''))

		const getPendanaanData = await CangkoelAPI({
			method: 'GET',
			url: '/pendanaan'
		})

		// console.log('actions', getPendanaanData.data.data)
		dispatch(readPendanaan(getPendanaanData.data.data))
	} catch (error) {
		console.log(error.response.data)
		dispatch(readErrorPendanaan(error.response.data))
		dispatch(readStopLoading())
	}
}

const pendanaanActions = {
	readPendanaanActions
}

export default pendanaanActions
