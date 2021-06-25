import CangkoelAPI from '../../api/CangkoelAPI'
import CloudinaryAPI from '../../api/CloudinaryAPI'
import Swal from 'sweetalert2'

import {
	SET_NAMA,
	SET_NOMOR_HP,
	SET_DOKUMEN_PERIZINAN,
	SET_NOMOR_NPWP,
	SET_KTP,
	SET_JENIS_USAHA,
	SET_TENAGA_KERJA,
	SET_OMSET,
	SET_ALAMAT,
	SET_URL_DOKUMEN,
	SET_URL_KTP,
	SET_IMAGE
} from './pengajuanActionTypes'

const setNama = (nama) => {
	return {
		type: SET_NAMA,
		payload: {
			nama: nama
		}
	}
}

const setNomorHP = (nomorHP) => {
	return {
		type: SET_NOMOR_HP,
		payload: {
			nomorHP: nomorHP
		}
	}
}

const setDokumenPerizinan = (dokumenPerizinan) => {
	return {
		type: SET_DOKUMEN_PERIZINAN,
		payload: {
			dokumenPerizinan: dokumenPerizinan
		}
	}
}

const setNomorNPWP = (nomorNPWP) => {
	return {
		type: SET_NOMOR_NPWP,
		payload: {
			nomorNPWP: nomorNPWP
		}
	}
}

const setKTP = (ktp) => {
	return {
		type: SET_KTP,
		payload: {
			ktp: ktp
		}
	}
}

const setJenisUsaha = (jenisUsaha) => {
	return {
		type: SET_JENIS_USAHA,
		payload: {
			jenisUsaha: jenisUsaha
		}
	}
}

const setTenagaKerja = (tenagaKerja) => {
	return {
		type: SET_TENAGA_KERJA,
		payload: {
			tenagaKerja: tenagaKerja
		}
	}
}

const setOmset = (omset) => {
	return {
		type: SET_OMSET,
		payload: {
			omset: omset
		}
	}
}

const setAlamat = (alamat) => {
	return {
		type: SET_ALAMAT,
		payload: {
			alamat: alamat
		}
	}
}

const setUrlDokumen = (urlDokumen) => {
	return {
		type: SET_URL_DOKUMEN,
		payload: {
			urlDokumen: urlDokumen
		}
	}
}

const setUrlKTP = (urlKTP) => {
	return {
		type: SET_URL_KTP,
		payload: {
			urlKTP: urlKTP
		}
	}
}

const setImage = (image) => {
	return {
		type: SET_IMAGE,
		payload: {
			image: image
		}
	}
}

const pengajuan =
	(nama, nomorHP, dokumenPerizinan, nomorNPWP, ktp, jenisUsaha, tenagaKerja, omset, alamat, token, history) =>
	async (dispatch) => {
		try {
			const pengajuanData = {
				nama_lengkap: nama,
				nomor_hp: parseInt(nomorHP),
				dokumen_perizinan: dokumenPerizinan,
				nomor_npwp: parseInt(nomorNPWP),
				ktp: ktp,
				jenis_usaha: jenisUsaha,
				tenaga_kerja: parseInt(tenagaKerja),
				omzet_perbulan: parseInt(omset),
				alamat_usaha: alamat,
				pendanaan_id: 1
			}

			const postPengajuanData = await CangkoelAPI({
				method: 'POST',
				url: '/formulir-pengajuan',
				data: pengajuanData,
				headers: {
					Authorization: token
				}
			})

			if (postPengajuanData.status === 201) {
				Swal.fire({
					title: 'Pengajuan anda sedang diproses',
					text: 'Anda akan dialihkan ke halaman Profil',
					icon: 'success',
					timer: 5000,
					timerProgressBar: true
				}).then(() => {
					history.push('/profil-petani')
				})
			}
		} catch (error) {
			console.log(error.response.data)
		}
	}

const uploadDokumen = (file) => async (dispatch) => {
	try {
		const data = new FormData()

		console.log(file)

		data.append('file', file)
		data.append('upload_preset', 'rxra54p9')
		data.append('cloud_name', 'cangkoel')

		const postDataDokumen = await CloudinaryAPI({
			method: 'POST',
			url: '/image/upload',
			data: data
		})

		dispatch(setUrlDokumen(postDataDokumen.data.url))
	} catch (error) {
		console.log(error.response)
	}
}

const uploadKTP = (file) => async (dispatch) => {
	try {
		const data = new FormData()

		data.append('file', file)
		data.append('upload_preset', 'rxra54p9')
		data.append('cloud_name', 'cangkoel')

		const postDataKTP = await CloudinaryAPI({
			method: 'POST',
			url: '/image/upload',
			data: data
		})

		dispatch(setUrlKTP(postDataKTP.data.url))
	} catch (error) {
		console.log(error.response)
	}
}

const pengajuanAction = {
	setNama,
	setNomorHP,
	setDokumenPerizinan,
	setNomorNPWP,
	setKTP,
	setJenisUsaha,
	setTenagaKerja,
	setOmset,
	setAlamat,
	pengajuan,
	setUrlDokumen,
	setUrlKTP,
	setImage,
	uploadDokumen,
	uploadKTP
}

export default pengajuanAction
