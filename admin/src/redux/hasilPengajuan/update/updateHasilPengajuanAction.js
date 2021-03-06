import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

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
		// console.log(id)

		const updateDataHasilPengajuan = {
			status: status,
			keterangan: keterangan,
			petani_id: petaniID,
			form_pengajuan_id: parseInt(formulirPengajuanID)
		}

		const accessToken = localStorage.getItem('token')

		const response = await CangkoelAPI({
			method: 'PUT',
			url: `hasil-pengajuan/${id}`,
			data: updateDataHasilPengajuan,
			headers: {
				Authorization: accessToken
			}
		})

		if (response.status === 200) {
			Swal.fire({
				title: 'Hasil Pengajuan berhasil di update',
				icon: 'success',
				timer: 1500,
				timerProgressBar: true
			}).then(() => {
				window.location.reload()
			})
		}

		console.log('data update', response.data.data)
	} catch (error) {
		console.log(error)
	}
}

const editHasilPengajuanAction = {
	setStatus,
	setKeterangan,
	setPetaniID,
	setFormulirPengajuanID,
	updateHasilPengajuanAction
}

export default editHasilPengajuanAction
