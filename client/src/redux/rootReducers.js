import { combineReducers } from 'redux'

import userRegisterReducer from './user/register/userRegisterReducer'
import userLoginReducer from './user/login/userLoginReducer'

const rootReducer = combineReducers({
	userRegister: userRegisterReducer,
	userLogin: userLoginReducer
})

export default rootReducer
