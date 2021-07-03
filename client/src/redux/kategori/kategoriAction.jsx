import CangkoelAPI from '../../api/CangkoelAPI'

import {
	GET_ALL_KATEGORI_REQUEST,
	GET_ALL_KATEGORI_SUCCESS,
	GET_ALL_KATEGORI_ERROR,
	GET_BY_ID_KATEGORI_REQUEST,
	GET_BY_ID_KATEGORI_SUCCESS,
	GET_BY_ID_KATEGORI_ERROR
} from './kategoriActionTypes'

export const getKategoriAction = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_ALL_KATEGORI_REQUEST })

			const response = await CangkoelAPI({
				method: 'GET',
				url: '/kategori-pertanian'
			})

			dispatch({ type: GET_ALL_KATEGORI_SUCCESS, payload: response.data.data })
		} catch (error) {
			// console.log(error)
			dispatch({ type: GET_ALL_KATEGORI_ERROR, payload: error })
		}
	}
}

export const getKategoriActionByID = (id) => {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_BY_ID_KATEGORI_REQUEST })

			const response = await CangkoelAPI({
				method: 'GET',
				url: `/kategori-pertanian/${id}`
			})

			dispatch({
				type: GET_BY_ID_KATEGORI_SUCCESS,
				payload: response.data.data
			})
		} catch (error) {
			dispatch({ type: GET_BY_ID_KATEGORI_ERROR, payload: error })
		}
	}
}
