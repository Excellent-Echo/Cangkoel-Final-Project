import {
	UPDATE_HASIL_PENGAJUAN_STATUS,
	UPDATE_HASIL_PENGAJUAN_KETERANGAN,
	UPDATE_HASIL_PENGAJUAN_PETANI_ID,
	UPDATE_HASIL_PENGAJUAN_FORMULIR_PENGAJUAN_ID
} from '../hasilPengajuanType'

const initalState = {
	status: '',
	keterangan: '',
	petaniID: '',
	formulirPengajuanID: ''
}

const updateHasilPengajuanReducers = (state = initalState, action) => {
	switch (action.type) {
		case UPDATE_HASIL_PENGAJUAN_STATUS:
			return {
				...state,
				status: action.payload.status
			}
		case UPDATE_HASIL_PENGAJUAN_KETERANGAN:
			return {
				...state,
				keterangan: action.payload.keterangan
			}
		case UPDATE_HASIL_PENGAJUAN_PETANI_ID:
			return {
				...state,
				petaniID: action.payload.petaniID
			}
		case UPDATE_HASIL_PENGAJUAN_FORMULIR_PENGAJUAN_ID:
			return {
				...state,
				formulirPengajuanID: action.payload.formulirPengajuanID
			}
		default:
			return state
	}
}

export default updateHasilPengajuanReducers
