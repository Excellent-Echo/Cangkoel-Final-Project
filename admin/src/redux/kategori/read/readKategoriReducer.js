import {
	READ_SET_KATEGORI,
	READ_ERROR_KATEGORI,
	READ_START_LOADING_KATEGORI,
	READ_STOP_LOADING_KATEGORI
} from '../kategoryType'

const initialState = {
	kategoriPertanian: [],
	IsLoading: false,
	errorMessage: ''
}

const readKategoryReducers = (state = initialState, action) => {
	switch (action.type) {
		case READ_SET_KATEGORI:
			return {
				...state,
				kategoriPertanian: action.payload
			}
		case READ_ERROR_KATEGORI:
			return {
				...state,
				errorMessage: action.payload.errorMessage
			}
		case READ_START_LOADING_KATEGORI:
			return {
				...state,
				isLoading: true
			}
		case READ_STOP_LOADING_KATEGORI:
			return {
				...state,
				isLoading: false
			}
		default:
			return state
	}
}

export default readKategoryReducers
