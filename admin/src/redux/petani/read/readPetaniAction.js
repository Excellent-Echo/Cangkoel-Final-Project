import CangkoelAPI from '../../../api/CangkoelAPI'

import { READ_SET_PETANI, READ_ERROR_PETANI, READ_START_LOADING_PETANI, READ_STOP_LOADING_PETANI } from '../petaniType'

const readPetani = (petani) => {
	return {
		type: READ_SET_PETANI,
		payload: petani
	}
}

const readErrorPetani = (errorMessage) => {
	return {
		type: READ_ERROR_PETANI,
		payload: errorMessage
	}
}

const readStartLoading = () => {
	return {
		type: READ_START_LOADING_PETANI
	}
}

const readStopLoading = () => {
	return {
		type: READ_STOP_LOADING_PETANI
	}
}

const readPetaniActions = () => async (dispatch) => {
	try {
		dispatch(readStartLoading())
		dispatch(readErrorPetani(''))

		const response = await CangkoelAPI({
			method: 'GET',
			url: '/users/petani'
		})

		console.log('actions', response.data.data)

		dispatch(readPetani(response.data.data))
	} catch (error) {
		console.log(error)
		dispatch(readErrorPetani(error.response))
		dispatch(readStopLoading())
	}
}

const petaniActions = {
	readPetaniActions
}

export default petaniActions
