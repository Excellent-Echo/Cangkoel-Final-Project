import {
	READ_SET_HASIL_PENGAJUAN,
	READ_ERROR_HASIL_PENGAJUAN,
	READ_START_LOADING_HASIL_PENGAJUAN,
	READ_STOP_LOADING_HASIL_PENGAJUAN
} from '../hasilPengajuanType'

const initialState = {
	hasilPengajuan: [],
	IsLoading: false,
	errorMessage: ''
}

const readHasilPengajuanReducers = (state = initialState, action) => {
	switch (action.type) {
		case READ_SET_HASIL_PENGAJUAN:
			return {
				...state,
				hasilPengajuan: action.payload
			}
		case READ_ERROR_HASIL_PENGAJUAN:
			return {
				...state,
				errorMessage: action.payload.errorMessage
			}
		case READ_START_LOADING_HASIL_PENGAJUAN:
			return {
				...state,
				isLoading: true
			}
		case READ_STOP_LOADING_HASIL_PENGAJUAN:
			return {
				...state,
				isLoading: false
			}
		default:
			return state
	}
}

export default readHasilPengajuanReducers
