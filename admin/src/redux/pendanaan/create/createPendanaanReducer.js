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

const intialState = {
	fotoProfil: '',
	urlFotoProfil: '',
	namaInvestor: '',
	judulPendanaan: '',
	nominalPendanaan: '',
	perusahaanPengirim: '',
	bagiHasilInvestor: '',
	bagiHasilPetani: '',
	kebutuhanKomoditas: '',
	jangkaWaktu: '',
	keuntunganBersih: '',
	deskripsi: '',
	biayaOperasional: '',
	biayaEkspor: '',
	perhitunganPenghasilan: '',
	perhitunganKeuntungan: '',
	kategoriID: '',
	successMessage: '',
	isLoading: false
}

const createPendanaanReducers = (state = intialState, action) => {
	switch (action.type) {
		case RESET_FORM_PENDANAAN:
			return {
				...intialState
			}
		case CREATE_FOTO_PROFIL:
			return {
				...state,
				fotoProfil: action.payload.fotoProfil
			}
		case CREATE_URL_FOTO_PROFIL:
			return {
				...state,
				urlFotoProfil: action.payload.urlFotoProfil
			}
		case CREATE_NAMA_INVESTOR:
			return {
				...state,
				namaInvestor: action.payload.namaInvestor
			}
		case CREATE_JUDUL_PENDANAAN:
			return {
				...state,
				judulPendanaan: action.payload.judulPendanaan
			}
		case CREATE_NOMINAL_PENDANAAN:
			return {
				...state,
				nominalPendanaan: action.payload.nominalPendanaan
			}
		case CREATE_PERUSAHAAN_PENGIRIM:
			return {
				...state,
				perusahaanPengirim: action.payload.perusahaanPengirim
			}
		case CREATE_BAGI_HASIL_INVESTOR:
			return {
				...state,
				bagiHasilInvestor: action.payload.bagiHasilInvestor
			}
		case CREATE_BAGI_HASIL_PETANI:
			return {
				...state,
				bagiHasilPetani: action.payload.bagiHasilPetani
			}
		case CREATE_KEBUTUHAN_KOMODITAS:
			return {
				...state,
				kebutuhanKomoditas: action.payload.kebutuhanKomoditas
			}
		case CREATE_JANGKA_WAKTU:
			return {
				...state,
				jangkaWaktu: action.payload.jangkaWaktu
			}
		case CREATE_KEUNTUNGAN_BERSIH:
			return {
				...state,
				keuntunganBersih: action.payload.keuntunganBersih
			}
		case CREATE_DESKRIPSI:
			return {
				...state,
				deskripsi: action.payload.deskripsi
			}
		case CREATE_BIAYA_OPERASIONAL:
			return {
				...state,
				biayaOperasional: action.payload.biayaOperasional
			}
		case CREATE_BIAYA_EKSPOR:
			return {
				...state,
				biayaEkspor: action.payload.biayaEkspor
			}
		case CREATE_PERHITUNGAN_PENGHASILAN:
			return {
				...state,
				perhitunganPenghasilan: action.payload.perhitunganPenghasilan
			}
		case CREATE_PERHITUNGAN_KEUNTUNGAN:
			return {
				perhitunganKeuntungan: action.payload.perhitunganKeuntungan
			}
		case CREATE_KATEGORI_ID:
			return {
				...state,
				kategoriID: action.payload.kategoriID
			}
		case CREATE_ERROR_MESSAGE_PENDANAAN:
			return {
				...state,
				errorMessage: action.payload.errorMessage
			}
		case CREATE_SUCCESS_MESSAGE_PENDANAAN:
			return {
				...state,
				successMessage: action.payload.successMessage
			}
		case CREATE_START_LOADING_PENDANAAN:
			return {
				...state,
				isLoading: true
			}
		case CREATE_STOP_LOADING_PENDANAAN:
			return {
				...state,
				isLoading: false
			}
		default:
			return state
	}
}

export default createPendanaanReducers
