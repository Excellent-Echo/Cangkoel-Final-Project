import {
	CREATE_STATUS_HASIL_PENGAJUAN,
	CREATE_KETERANGAN_HASIL_PENGAJUAN,
	CREATE_PETANI_ID_HASIL_PENGAJUAN,
	CREATE_FORM_PENGAJUAN_ID_HASIL_PENGAJUAN
} from '../hasilPengajuanType'

const initalState = {
	status: '',
	keterangan: '',
	petaniID: '',
	formPengajuanID: ''
}

const createHasilPengajuanReducers = (state = initalState, action) => {
	switch (action.type) {
		case CREATE_STATUS_HASIL_PENGAJUAN:
			return {
				...state,
				status: action.payload.status
			}
		case CREATE_KETERANGAN_HASIL_PENGAJUAN:
			return {
				...state,
				keterangan: action.payload.keterangan
			}
		case CREATE_PETANI_ID_HASIL_PENGAJUAN:
			return {
				...state,
				petaniID: action.payload.petaniID
			}
		case CREATE_FORM_PENGAJUAN_ID_HASIL_PENGAJUAN:
			return {
				...state,
				formPengajuanID: action.payload.formPengajuanID
			}
		default:
			return state
	}
}

export default createHasilPengajuanReducers
