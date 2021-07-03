import { USER_PROFILE_DATA, SET_LOADING } from '../userActionTypes'

const setProfileData = (userProfile) => {
	return {
		type: USER_PROFILE_DATA,
		payload: {
			user: userProfile
		}
	}
}

const setLoading = () => {
	return {
		type: SET_LOADING
	}
}

const userProfileAction = {
	setProfileData,
	setLoading
}

export default userProfileAction
