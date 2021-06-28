import CangkoelAPI from '../../../api/CangkoelAPI'

import {
	UPDATE_HASIL_PENGAJUAN_STATUS,
	UPDATE_HASIL_PENGAJUAN_KETERANGAN,
	UPDATE_HASIL_PENGAJUAN_PETANI_ID,
	UPDATE_HASIL_PENGAJUAN_FORMULIR_PENGAJUAN_ID
} from '../hasilPengajuanType'

const setStatus = (status) => {
	return {
		type: UPDATE_HASIL_PENGAJUAN_STATUS,
		payload: {
			status: status
		}
	}
}

const setKeterangan = (keterangan) => {
	return {
		type: UPDATE_HASIL_PENGAJUAN_KETERANGAN,
		payload: {
			keterangan: keterangan
		}
	}
}

const setPetaniID = (petaniID) => {
	return {
		type: UPDATE_HASIL_PENGAJUAN_PETANI_ID,
		payload: {
			petaniID: petaniID
		}
	}
}

const setFormulirPengajuanID = (formulirPengajuanID) => {
	return {
		type: UPDATE_HASIL_PENGAJUAN_FORMULIR_PENGAJUAN_ID,
		payload: {
			formulirPengajuanID: formulirPengajuanID
		}
	}
}

const updateHasilPengajuanAction = (id, status, keterangan, petaniID, formulirPengajuanID) => async (dispatch) => {
	try {
		console.log(id)

		const updateDataHasilPengajuan = {
			status: status,
			keterangan: keterangan,
			petani_id: petaniID,
			form_pengajuan_id: parseInt(formulirPengajuanID)
		}

		const response = await CangkoelAPI({
			method: 'PUT',
			url: `hasil-pengajuan/${id}`,
			data: updateDataHasilPengajuan
		})

		console.log('data update', response.data.data)

		console.log('update data success')
	} catch (error) {
		console.log(error)
	}
}

const getHasilPengajuanByIDAction = (id) => async (dispatch) => {
	try {
		// console.log(id)

		console.log('updating hasil pengajuan')
		const getHasilPengajuanByID = await CangkoelAPI({
			method: 'GET',
			url: `/hasil-pengajuan/${id}`
		})

		console.log('actions', getHasilPengajuanByID.data.data)
		// console.log('status', getHasilPengajuanByID.data.data.status)

		dispatch(setStatus(getHasilPengajuanByID.data.data.status))
		dispatch(setKeterangan(getHasilPengajuanByID.data.data.keterangan))
		dispatch(setPetaniID(getHasilPengajuanByID.data.data.petani_id))
		dispatch(setFormulirPengajuanID(getHasilPengajuanByID.data.data.form_pengajuan_id))
		console.log('updating hasil pengajuan success')
	} catch (error) {
		console.log(error)
	}
}

const editHasilPengajuanAction = {
	setStatus,
	setKeterangan,
	setPetaniID,
	setFormulirPengajuanID,
	updateHasilPengajuanAction,
	getHasilPengajuanByIDAction
}

export default editHasilPengajuanAction
