import { PENGAJUAN_DATA, SET_LOADING } from './pengajuanActionTypes'

const initialState = {
	pengajuanData: [],
	isLoading: false
}

const pengajuanReducer = (state = initialState, action) => {
	switch (action.type) {
		case PENGAJUAN_DATA:
			return {
				...state,
				pengajuanData: action.payload.data,
				isLoading: false
			}
		case SET_LOADING:
			return {
				...state,
				isLoading: true
			}
		default:
			return state
	}
}

export default pengajuanReducer
