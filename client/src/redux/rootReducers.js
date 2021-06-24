import { combineReducers } from 'redux'

import userRegisterReducer from './user/register/userRegisterReducer'
import userLoginReducer from './user/login/userLoginReducer'
import userProfileReducer from './user/profile/userProfileReducer'
import pengajuanReducer from './pengajuan/pengajuanReducer'
import kategoriReducers from './kategori/kategoriReducer'

const rootReducer = combineReducers({
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer,
	userProfile: userProfileReducer,
	pengajuan: pengajuanReducer,
	kategori: kategoriReducers
})

export default rootReducer
