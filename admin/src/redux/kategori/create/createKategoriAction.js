import CangkoelAPI from '../../../api/CangkoelAPI'

import { CREATE_NAME_KATEGORI, CREATE_FOTO_KATEGORI } from '../kategoryType'

const setNamekategori = (namaKategori) => {
	return {
		type: CREATE_NAME_KATEGORI,
		payload: {
			namaKategori: namaKategori
		}
	}
}

const setFotoKategori = (fotoKategori) => {
	return {
		type: CREATE_FOTO_KATEGORI,
		payload: {
			fotoKategori: fotoKategori
		}
	}
}

const createKategoriAction = (namaKategori, fotoKategori, token) => async (dispatch) => {
	try {
		const postDataKategori = {
			nama_kategori: namaKategori,
			foto_kategori: fotoKategori
		}

		const response = await CangkoelAPI({
			method: 'POST',
			url: '/kategori-pertanian',
			data: postDataKategori
			// headers: {
			// 	Authorization: token
			// }
		})
		window.location.reload()
		console.log(response.data.data)
	} catch (error) {
		console.log(error.response.data)
	}
}

const kategoriActions = {
	setNamekategori,
	setFotoKategori,
	createKategoriAction
}

export default kategoriActions
