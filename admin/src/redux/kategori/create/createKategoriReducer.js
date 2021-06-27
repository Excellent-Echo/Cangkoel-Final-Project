import { CREATE_NAME_KATEGORI, CREATE_FOTO_KATEGORI, CREATE_URL_FOTO_KATEGORI } from '../kategoryType'

const initalState = {
	namaKategori: '',
	fotoKategori: '',
	urlFotoKategori: ''
}

const createKategoriReducers = (state = initalState, action) => {
	switch (action.type) {
		case CREATE_NAME_KATEGORI:
			return {
				...state,
				nameKategori: action.payload.nameKategori
			}
		case CREATE_FOTO_KATEGORI:
			return {
				...state,
				fotoKategori: action.payload.fotoKategori
			}
		case CREATE_URL_FOTO_KATEGORI:
			return {
				...state,
				urlFotoKategori: action.payload.urlFotoKategori
			}
		default:
			return state
	}
}

export default createKategoriReducers
