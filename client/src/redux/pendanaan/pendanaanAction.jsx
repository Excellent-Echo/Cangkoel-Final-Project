import CangkoelAPI from '../../api/CangkoelAPI'

import {
	GET_BY_ID_PENDANAAN_REQUEST,
	GET_BY_ID_PENDANAAN_SUCCESS,
	GET_BY_ID_PENDANAAN_ERROR
} from '../pendanaan/pendanaanActionTypes'

export const getPendanaanById = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: GET_BY_ID_PENDANAAN_REQUEST
			})

			const response = await CangkoelAPI({
				method: 'GET',
				url: `/pendanaan/${id}`
			})

			dispatch({
				type: GET_BY_ID_PENDANAAN_SUCCESS,
				payload: response.data.data
			})
		} catch (error) {
			dispatch({
				type: GET_BY_ID_PENDANAAN_ERROR,
				payload: error
			})
		}
	}
}
