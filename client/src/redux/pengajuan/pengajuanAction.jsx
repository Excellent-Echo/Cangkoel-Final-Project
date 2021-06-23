import CangkoelAPI from '../../api/CangkoelAPI'

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
	SET_PETANI_ID
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

const setPetaniID = (petaniID) => {
	return {
		type: SET_PETANI_ID,
		payload: {
			petaniID: petaniID
		}
	}
}

const pengajuan =
	(nama, nomorHP, dokumenPerizinan, nomorNPWP, ktp, jenisUsaha, tenagaKerja, omset, alamat, petaniID, token) =>
	async (dispatch) => {
		try {
			const pengajuanData = {
				nama_lengkap: nama,
				nomor_hp: nomorHP,
				dokumen_perizinan: dokumenPerizinan,
				nomor_npwp: nomorNPWP,
				ktp: ktp,
				jenis_usaha: jenisUsaha,
				tenaga_kerja: tenagaKerja,
				omzet_perbulan: omset,
				alamat_usaha: alamat,
				petani_id: petaniID
			}

			console.log(pengajuanData)

			const postPengajuanData = await CangkoelAPI({
				method: 'POST',
				url: '/formulir-pengajuan',
				data: pengajuanData,
				headers: {
					Authorization: token
				}
			})
		} catch (error) {
			console.log(error.response.data)
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
	setPetaniID,
	pengajuan
}

export default pengajuanAction
