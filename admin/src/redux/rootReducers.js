import { combineReducers } from 'redux'

// pengajuan reducers
import pengajuanReducer from './pengajuan/pengajuanReducer'

// petani reducers
import readPetaniReducers from './petani/read/readPetaniReducer'

// user reducers
import userLoginReducer from './user/login/userLoginReducer'
import userProfileReducer from './user/profile/userProfileReducer'

// kategori reducers
import readKategoriReducers from './kategori/read/readKategoriReducer'
import createKategoriReducers from './kategori/create/createKategoriReducer'

// pendanaan reducers
import readPendanaanReducers from './pendanaan/read/readPendanaanReducer'
import createPendanaanReducers from './pendanaan/create/createPendanaanReducer'

const rootReducers = combineReducers({
	pengajuan: pengajuanReducer,
	userLogin: userLoginReducer,
	userProfile: userProfileReducer,
	readKategori: readKategoriReducers,
	createKategori: createKategoriReducers,
	readPendanaan: readPendanaanReducers,
	readPetani: readPetaniReducers,
	createPendanaan: createPendanaanReducers
})

export default rootReducers
