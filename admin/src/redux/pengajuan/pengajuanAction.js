import { PENGAJUAN_DATA } from './pengajuanActionTypes'

const setPengajuanData = (pengajuanData) => {
	return {
		type: PENGAJUAN_DATA,
		payload: {
			data: pengajuanData
		}
	}
}

const setLoading = () => {
	return {
		type: PENGAJUAN_DATA
	}
}

const pengajuanAction = {
	setPengajuanData,
	setLoading
}

export default pengajuanAction
