import { READ_SET_PETANI, READ_ERROR_PETANI, READ_START_LOADING_PETANI, READ_STOP_LOADING_PETANI } from '../petaniType'

const initialState = {
	petani: [],
	IsLoading: false,
	errorMessage: ''
}

const readPetaniReducers = (state = initialState, action) => {
	switch (action.type) {
		case READ_SET_PETANI:
			return {
				...state,
				petani: action.payload
			}
		case READ_ERROR_PETANI:
			return {
				...state,
				errorMessage: action.payload.errorMessage
			}
		case READ_START_LOADING_PETANI:
			return {
				...state,
				isLoading: true
			}
		case READ_STOP_LOADING_PETANI:
			return {
				...state,
				isLoading: false
			}
		default:
			return state
	}
}

export default readPetaniReducers
