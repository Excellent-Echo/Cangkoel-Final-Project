import {
	READ_SET_PENDANAAN,
	READ_ERROR_PENDANAAN,
	READ_START_LOADING_PENDANAAN,
	READ_STOP_LOADING_PENDANAAN
} from '../pendanaanType'

const initialState = {
	pendanaan: [],
	IsLoading: false,
	errorMessage: ''
}

const readPendanaanReducers = (state = initialState, action) => {
	switch (action.type) {
		case READ_SET_PENDANAAN:
			return {
				...state,
				pendanaan: action.payload
			}
		case READ_ERROR_PENDANAAN:
			return {
				...state,
				errorMessage: action.payload.errorMessage
			}
		case READ_START_LOADING_PENDANAAN:
			return {
				...state,
				isLoading: true
			}
		case READ_STOP_LOADING_PENDANAAN:
			return {
				...state,
				isLoading: false
			}
		default:
			return state
	}
}

export default readPendanaanReducers
