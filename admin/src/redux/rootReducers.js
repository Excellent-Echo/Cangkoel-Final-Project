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

// hasil pengajuan reducers
import readHasilPengajuanReducers from './hasilPengajuan/read/readHasilPengajuanReducer'
import createHasilPengajuanReducers from './hasilPengajuan/create/createHasilPengajuanReducer'
import updateHasilPengajuanReducers from './hasilPengajuan/update/updateHasilPengajuanReducer'

const rootReducers = combineReducers({
	pengajuan: pengajuanReducer,
	userLogin: userLoginReducer,
	userProfile: userProfileReducer,
	readKategori: readKategoriReducers,
	createKategori: createKategoriReducers,
	readPendanaan: readPendanaanReducers,
	createPendanaan: createPendanaanReducers,
	readPetani: readPetaniReducers,
	readHasilPengajuan: readHasilPengajuanReducers,
	createHasilPengajuan: createHasilPengajuanReducers,
	updateHasilPengajuan: updateHasilPengajuanReducers
})

export default rootReducers
