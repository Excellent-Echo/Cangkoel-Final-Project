import CangkoelAPI from '../../api/CangkoelAPI'

import { GET_ALL_KATEGORI_REQUEST, GET_ALL_KATEGORI_SUCCESS, GET_ALL_KATEGORI_ERROR } from './kategoriActionTypes'

export const getKategoriAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_ALL_KATEGORI_REQUEST })

			const { response } = await CangkoelAPI({
				method: 'GET',
				url: '/kategori-pertanian'
			})

			console.log('data', response)

			dispatch({ type: GET_ALL_KATEGORI_SUCCESS, payload: response })
		} catch (error) {
			// console.log(error)
			dispatch({ type: GET_ALL_KATEGORI_ERROR, payload: error })
		}
	}
}
