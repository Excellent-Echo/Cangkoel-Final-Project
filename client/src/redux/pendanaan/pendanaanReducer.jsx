import {
	GET_BY_ID_PENDANAAN_REQUEST,
	GET_BY_ID_PENDANAAN_SUCCESS,
	GET_BY_ID_PENDANAAN_ERROR
} from '../pendanaan/pendanaanActionTypes'

const initalState = {
	detailPendanaan: {},
	error: null,
	loading: true
}

const pendanaanReducers = (state = initalState, action) => {
	switch (action.type) {
		case GET_BY_ID_PENDANAAN_REQUEST:
			return {
				...state,
				loading: true
			}
		case GET_BY_ID_PENDANAAN_SUCCESS:
			return {
				...state,
				loading: false,
				detailPendanaan: action.payload
			}
		case GET_BY_ID_PENDANAAN_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state
	}
}

export default pendanaanReducers
