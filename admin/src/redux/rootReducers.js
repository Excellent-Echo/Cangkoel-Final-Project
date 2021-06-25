import { combineReducers } from 'redux'

import pengajuanReducer from './pengajuan/pengajuanReducer'
import userLoginReducer from './user/login/userLoginReducer'
import userProfileReducer from './user/profile/userProfileReducer'

const rootReducers = combineReducers({
	pengajuan: pengajuanReducer,
	userLogin: userLoginReducer,
	userProfile: userProfileReducer
})

export default rootReducers
