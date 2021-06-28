import CangkoelAPI from '../../../api/CangkoelAPI'
import Swal from 'sweetalert2'

import {
	CREATE_STATUS_HASIL_PENGAJUAN,
	CREATE_KETERANGAN_HASIL_PENGAJUAN,
	CREATE_PETANI_ID_HASIL_PENGAJUAN,
	CREATE_FORM_PENGAJUAN_ID_HASIL_PENGAJUAN
} from '../hasilPengajuanType'

const setStatus = (status) => {
	return {
		type: CREATE_STATUS_HASIL_PENGAJUAN,
		payload: {
			status: status
		}
	}
}

const setKeterangan = (keterangan) => {
	return {
		type: CREATE_KETERANGAN_HASIL_PENGAJUAN,
		payload: {
			keterangan: keterangan
		}
	}
}

const setPetaniID = (petaniID) => {
	return {
		type: CREATE_PETANI_ID_HASIL_PENGAJUAN,
		payload: {
			petaniID: petaniID
		}
	}
}

const setFormPengajuanID = (formPengajuanID) => {
	return {
		type: CREATE_FORM_PENGAJUAN_ID_HASIL_PENGAJUAN,
		payload: {
			formPengajuanID: formPengajuanID
		}
	}
}

const createHasilPengajuanAction = (status, keterangan, petaniID, formPengajuanID) => async (dispatch) => {
	try {
		const postDataHasilPengajuan = {
			status: status,
			keterangan: keterangan,
			petani_id: petaniID,
			form_pengajuan_id: parseInt(formPengajuanID)
		}
		console.log(postDataHasilPengajuan)

		const accessToken = localStorage.getItem('token')
		// console.log(accessToken)

		const postHasilPengajuanData = await CangkoelAPI({
			method: 'POST',
			url: '/hasil-pengajuan',
			data: postDataHasilPengajuan,
			headers: {
				Authorization: accessToken
			}
		})

		if (postHasilPengajuanData.status === 201) {
			Swal.fire({
				title: 'Hasil pengajuan berhasil dibuat',
				icon: 'success',
				timer: 2000,
				timerProgressBar: true
			}).then(() => {
				window.location.reload()
			})
		}

		console.log('hasil pengajuan data action', postHasilPengajuanData.data.data)
	} catch (error) {
		console.log(error.response.data)
	}
}

const hasilPengajuanActions = {
	setStatus,
	setKeterangan,
	setPetaniID,
	setFormPengajuanID,
	createHasilPengajuanAction
}

export default hasilPengajuanActions
