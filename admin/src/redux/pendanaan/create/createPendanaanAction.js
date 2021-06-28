import CangkoelAPI from '../../../api/CangkoelAPI'
import CloudinaryAPI from '../../../api/CloudinaryAPI'
import Swal from 'sweetalert2'

import {
	RESET_FORM_PENDANAAN,
	CREATE_FOTO_PROFIL,
	CREATE_URL_FOTO_PROFIL,
	CREATE_NAMA_INVESTOR,
	CREATE_JUDUL_PENDANAAN,
	CREATE_NOMINAL_PENDANAAN,
	CREATE_PERUSAHAAN_PENGIRIM,
	CREATE_BAGI_HASIL_INVESTOR,
	CREATE_BAGI_HASIL_PETANI,
	CREATE_KEBUTUHAN_KOMODITAS,
	CREATE_JANGKA_WAKTU,
	CREATE_KEUNTUNGAN_BERSIH,
	CREATE_DESKRIPSI,
	CREATE_BIAYA_OPERASIONAL,
	CREATE_BIAYA_EKSPOR,
	CREATE_PERHITUNGAN_PENGHASILAN,
	CREATE_PERHITUNGAN_KEUNTUNGAN,
	CREATE_KATEGORI_ID,
	CREATE_ERROR_MESSAGE_PENDANAAN,
	CREATE_SUCCESS_MESSAGE_PENDANAAN,
	CREATE_START_LOADING_PENDANAAN,
	CREATE_STOP_LOADING_PENDANAAN
} from '../pendanaanType'

const resetForm = () => {
	return {
		type: RESET_FORM_PENDANAAN
	}
}

const setFotoProfil = (fotoProfil) => {
	return {
		type: CREATE_FOTO_PROFIL,
		payload: {
			fotoProfil: fotoProfil
		}
	}
}

const setUrlFotoProfil = (urlFotoProfil) => {
	return {
		type: CREATE_URL_FOTO_PROFIL,
		payload: {
			urlFotoProfil: urlFotoProfil
		}
	}
}

const setNamaInvestor = (setNamaInvestor) => {
	return {
		type: CREATE_NAMA_INVESTOR,
		payload: {
			setNamaInvestor: setNamaInvestor
		}
	}
}

const setJudulPendanaan = (setJudulPendanaan) => {
	return {
		type: CREATE_JUDUL_PENDANAAN,
		payload: {
			setJudulPendanaan: setJudulPendanaan
		}
	}
}

const setNominalPendanaan = (nominalPendanaan) => {
	return {
		type: CREATE_NOMINAL_PENDANAAN,
		payload: {
			nominalPendanaan: nominalPendanaan
		}
	}
}

const setPerusahaanPengirim = (perusahaanPengirim) => {
	return {
		type: CREATE_PERUSAHAAN_PENGIRIM,
		payload: {
			perusahaanPengirim: perusahaanPengirim
		}
	}
}

const setBagiHasilInvestor = (bagiHasilInvestor) => {
	return {
		type: CREATE_BAGI_HASIL_INVESTOR,
		payload: {
			bagiHasilInvestor: bagiHasilInvestor
		}
	}
}

const setBagiHasilPetani = (bagiHasilPetani) => {
	return {
		type: CREATE_BAGI_HASIL_PETANI,
		payload: {
			bagiHasilPetani: bagiHasilPetani
		}
	}
}

const setKebutuhanKomoditas = (kebutuhanKomoditas) => {
	return {
		type: CREATE_KEBUTUHAN_KOMODITAS,
		payload: {
			kebutuhanKomoditas: kebutuhanKomoditas
		}
	}
}

const setJangkaWaktu = (jangkaWaktu) => {
	return {
		type: CREATE_JANGKA_WAKTU,
		payload: {
			jangkaWaktu: jangkaWaktu
		}
	}
}

const setKeuntunganBersih = (keuntunganBersih) => {
	return {
		type: CREATE_KEUNTUNGAN_BERSIH,
		payload: {
			keuntunganBersih: keuntunganBersih
		}
	}
}

const setDeskripsi = (deskripsi) => {
	return {
		type: CREATE_DESKRIPSI,
		payload: {
			deskripsi: deskripsi
		}
	}
}

const setBiayaOperasional = (biayaOperasional) => {
	return {
		type: CREATE_BIAYA_OPERASIONAL,
		payload: {
			biayaOperasional: biayaOperasional
		}
	}
}

const setBiayaEkspor = (biayaEkspor) => {
	return {
		type: CREATE_BIAYA_EKSPOR,
		payload: {
			biayaEkspor: biayaEkspor
		}
	}
}

const setPerhitunganPenghasilan = (perhitunganPenghasilan) => {
	return {
		type: CREATE_PERHITUNGAN_PENGHASILAN,
		payload: {
			perhitunganPenghasilan: perhitunganPenghasilan
		}
	}
}

const setPerhitunganKeuntungan = (perhitunganKeuntungan) => {
	return {
		type: CREATE_PERHITUNGAN_KEUNTUNGAN,
		payload: {
			perhitunganKeuntungan: perhitunganKeuntungan
		}
	}
}

const setKategoriId = (kategoriID) => {
	return {
		type: CREATE_KATEGORI_ID,
		payload: {
			kategoriID: kategoriID
		}
	}
}

const setErrorMessage = (errorMessage) => {
	return {
		type: CREATE_ERROR_MESSAGE_PENDANAAN,
		payload: {
			errorMessage: errorMessage
		}
	}
}

const setSuccessMessage = (successMessage) => {
	return {
		type: CREATE_SUCCESS_MESSAGE_PENDANAAN,
		payload: {
			successMessage: successMessage
		}
	}
}

const startLoading = () => {
	return {
		type: CREATE_START_LOADING_PENDANAAN
	}
}

const stopLoading = () => {
	return {
		type: CREATE_STOP_LOADING_PENDANAAN
	}
}

const createPendanaanActions =
	(
		fotoProfil,
		namaInvestor,
		judulPendanaan,
		nominalPendanaan,
		perusahaanPengirim,
		bagiHasilInvestor,
		bagiHasilPetani,
		kebutuhanKomoditas,
		jangkaWaktu,
		keuntunganBersih,
		deskripsi,
		biayaOperasional,
		biayaEkspor,
		perhitunganPenghasilan,
		perhitunganKeuntungan,
		kategoriID
	) =>
	async (dispatch) => {
		try {
			console.log('Click Button')
			dispatch(startLoading())
			dispatch(setSuccessMessage(''))
			dispatch(setErrorMessage(''))

			const pendanaanData = {
				foto_profil: fotoProfil,
				nama_investor: namaInvestor,
				judul_pendanaan: judulPendanaan,
				nominal_pendanaan: parseInt(nominalPendanaan),
				perusahaan_pengirim: perusahaanPengirim,
				bagi_hasil_investor: parseInt(bagiHasilInvestor),
				bagi_hasil_petani: parseInt(bagiHasilPetani),
				kebutuhan_komoditas: kebutuhanKomoditas,
				jangka_waktu: jangkaWaktu,
				keuntungan_bersih: parseInt(keuntunganBersih),
				deskripsi: deskripsi,
				biaya_operasional: biayaOperasional,
				biaya_ekspor: biayaEkspor,
				perhitungan_penghasilan: perhitunganPenghasilan,
				perhitungan_keuntungan: perhitunganKeuntungan,
				kategori_id: parseInt(kategoriID)
			}

			console.log(pendanaanData)

			const accessToken = localStorage.getItem('token')
			console.log(accessToken)

			const postPendanaanData = await CangkoelAPI({
				method: 'POST',
				url: '/pendanaan',
				data: pendanaanData,
				headers: {
					Authorization: accessToken
				}
			})

			if (postPendanaanData.status === 201) {
				Swal.fire({
					title: 'Pendanaan berhasil dibuat',
					icon: 'success',
					timer: 2000,
					timerProgressBar: true
				}).then(() => {
					console.log('pendanaan data action', postPendanaanData.data.data)
					dispatch(setSuccessMessage('Success Post Pendanaan'))
					dispatch(stopLoading())
					window.location.reload()
				})
			}
		} catch (error) {
			console.log(error.response.data)
			dispatch(setErrorMessage(error.response.data))
			dispatch(stopLoading())
		}
	}

const uploadFotoProfil = (file) => async (dispatch) => {
	try {
		console.log('file', file)
		const data = new FormData()
		data.append('file', file)
		data.append('upload_preset', 'rxra54p9')
		data.append('cloud_name', 'cangkoel')

		const postDataProfil = await CloudinaryAPI({
			method: 'POST',
			url: '/image/upload',
			data: data
		})

		console.log(postDataProfil.data.url)

		dispatch(setUrlFotoProfil(postDataProfil.data.url))
	} catch (error) {
		console.log(error.response)
	}
}

const pendanaanActions = {
	resetForm,
	setFotoProfil,
	setUrlFotoProfil,
	setNamaInvestor,
	setJudulPendanaan,
	setNominalPendanaan,
	setPerusahaanPengirim,
	setBagiHasilInvestor,
	setBagiHasilPetani,
	setKebutuhanKomoditas,
	setJangkaWaktu,
	setKeuntunganBersih,
	setDeskripsi,
	setBiayaOperasional,
	setBiayaEkspor,
	setPerhitunganPenghasilan,
	setPerhitunganKeuntungan,
	setKategoriId,
	createPendanaanActions,
	uploadFotoProfil
}

export default pendanaanActions
