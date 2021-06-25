import { CREATE_NAME_KATEGORI, CREATE_FOTO_KATEGORI } from '../kategoryType'

const initalState = {
	namaKategori: '',
	fotoKategori: ''
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
		default:
			return state
	}
}

export default createKategoriReducers
