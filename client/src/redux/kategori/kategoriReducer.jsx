import {
	GET_ALL_KATEGORI_REQUEST,
	GET_ALL_KATEGORI_SUCCESS,
	GET_ALL_KATEGORI_ERROR,
	GET_BY_ID_KATEGORI_REQUEST,
	GET_BY_ID_KATEGORI_SUCCESS,
	GET_BY_ID_KATEGORI_ERROR
} from '../kategori/kategoriActionTypes'

const initialState = {
	kategoriPertanian: [],
	kategoriDetail: {},
	loading: false,
	error: null
}

const kategoriReducers = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_KATEGORI_REQUEST:
			return {
				...state,
				loading: true
			}
		case GET_ALL_KATEGORI_SUCCESS:
			return {
				...state,
				loading: false,
				kategoriPertanian: action.payload
			}
		case GET_ALL_KATEGORI_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		case GET_BY_ID_KATEGORI_REQUEST:
			return {
				...state,
				loading: true
			}
		case GET_BY_ID_KATEGORI_SUCCESS:
			return {
				...state,
				loading: false,
				kategoriDetail: action.payload
			}
		case GET_BY_ID_KATEGORI_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		default:
			return state
	}
}

export default kategoriReducers
